/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import DialogDefault from '../dist/react-leaflet-dialog.min.js';
const Dialog = withLeaflet(DialogDefault);

import DialogContainer from './DialogContainer';

describe('Dialog', () => {

	it('Render dialog box with string content', () => {

		const dialogRef = createRef();
		const mapOptions = {
			center: [2.935403, 101.448205],
			zoom: 3,
			minZoom: 1,
			maxZoom: 22,
		};
		const wrapper = mount(
			<div>
				<Map {...mapOptions}>
					<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
					<Dialog ref={dialogRef} anchor={[50, 50]} id="testDialog" >
						{ '<div>This is the dialog content.</div>' }
					</Dialog>
				</Map>
			</div>
		);
		
		expect(wrapper).not.toBeEmptyRender();
		expect(dialogRef.current.leafletElement.options.anchor).toEqual([50, 50]);
	});
	
	it('Open the dialog box when open() is called', () => {
		
		const wrapper = mount(<DialogContainer initOpen={false} />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'open');
		
		wrapper.instance().open();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0).attribs.style).not.toContain('visibility: hidden');
	});
	
	it('Close the dialog box when close() is called but not destroy it', () => {
		
		const wrapper = mount(<DialogContainer />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'close');
		
		wrapper.instance().close();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0).attribs.style).toContain('visibility: hidden');
	});
	
	it('Destroy the dialog box when destroy() is called', () => {
		
		const wrapper = mount(<DialogContainer />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'destroy');
		
		wrapper.instance().destroy();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0)).toBeUndefined();
	});
	
	it('Set new content when setContent() is called', () => {
		
		const wrapper = mount(<DialogContainer />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'setContent');
		
		wrapper.instance().setContent('<div>New dialog content.</div>');
		
		expect(spyDialogFunction).toHaveBeenCalledWith('<div>New dialog content.</div>');
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('#dialog-contents-testDialog').html()).toEqual('<div>New dialog content.</div>');
	});
})