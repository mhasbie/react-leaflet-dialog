/* global describe, expect, it, jest */
import React, { createRef, Component } from 'react';

import { Map, TileLayer, withLeaflet } from 'react-leaflet';
import DialogDefault from '../dist/react-leaflet-dialog.min.js';
const Dialog = withLeaflet(DialogDefault);

export default class DialogContainer extends Component {
	constructor(props) {
		super(props);
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.destroy = this.destroy.bind(this);
		this.setContent = this.setContent.bind(this);
		this.setLocation = this.setLocation.bind(this);
		this.setSize = this.setSize.bind(this);
		this.lock = this.lock.bind(this);
		this.unlock = this.unlock.bind(this);
		this.freeze = this.freeze.bind(this);
		this.unfreeze = this.unfreeze.bind(this);
		this.hideClose = this.hideClose.bind(this);
		this.showClose = this.showClose.bind(this);
		this.hideResize = this.hideResize.bind(this);
		this.showResize = this.showResize.bind(this);
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
	
	setContent(content) {
		this.dialog.setContent(content);
	}
	
	setLocation(anchor) {
		this.dialog.setLocation(anchor);
	}
	
	setSize(size) {
		this.dialog.setSize(size);
	}
	
	lock() {
		this.dialog.lock();
	}
	
	unlock() {
		this.dialog.unlock();
	}
	
	freeze() {
		this.dialog.freeze();
	}
	
	unfreeze() {
		this.dialog.unfreeze();
	}
	
	hideClose() {
		this.dialog.hideClose();
	}
	
	showClose() {
		this.dialog.showClose();
	}
	
	hideResize() {
		this.dialog.hideResize();
	}
	
	showResize() {
		this.dialog.showResize();
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
