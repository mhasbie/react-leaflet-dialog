/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';
import { mount } from './enzyme';
import 'jest-enzyme';
import './stubs';
// import data from './data';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import DialogDefault from '../dist/react-leaflet-dialog.min.js';
const Dialog = withLeaflet(DialogDefault);

describe('Dialog', () => {

	it('Should instantiate a dialog component when rendered inside a map', () => {

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
						<div>This is the dialog content.</div>
					</Dialog>
				</Map>
			</div>
		);
		
		expect(wrapper).not.toBeEmptyRender();
		// expect(measureControlRef.current.leafletElement.options.anchor).toEqual([50, 50]);
	})
})