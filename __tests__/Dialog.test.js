/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import DialogDefault from '../dist/react-leaflet-dialog.min.js';
const Dialog = withLeaflet(DialogDefault);

class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.destroy = this.destroy.bind(this);
	}
	
	open() {
		this.dialog.open();
	}
	
	close() {
		this.dialog.close();
	}
	
	destroy() {
		this.dialog.destroy();
	}

	render() {
		const { initOpen = true } = this.props;
		const options = {
			center: [0, 0],
			zoom: 1,
			minZoom: 1,
			maxZoom: 22,
		};
		return (
			<Map {...options}>
				<Dialog
					ref={(ref) => { this.dialog = ref; }}
					anchor={[50, 50]}
					id="testDialog"
					initOpen={initOpen}
				>
					{ '<div>This is the dialog content.</div>' }
				</Dialog>
			</Map>
		);
	}
}

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
		
		const wrapper = mount(<MapContainer initOpen={false} />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'open');
		
		wrapper.instance().open();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0).attribs.style).not.toContain('visibility: hidden');
	});
	
	it('Close the dialog box when close() is called but not destroy it', () => {
		
		const wrapper = mount(<MapContainer />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'close');
		
		wrapper.instance().close();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0).attribs.style).toContain('visibility: hidden');
	});
	
	it('Destroy the dialog box when destroy() is called', () => {
		
		const wrapper = mount(<MapContainer />);
		const spyDialogFunction = jest.spyOn(wrapper.instance().dialog, 'destroy');
		
		wrapper.instance().destroy();
		
		expect(spyDialogFunction).toHaveBeenCalled();
		expect(wrapper).not.toBeEmptyRender();
		expect(wrapper.render().find('div.leaflet-control-dialog').get(0)).toBeUndefined();
	});
})