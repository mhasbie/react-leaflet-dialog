import { Children } from 'react';
import { render } from 'react-dom';
import { MapControl } from 'react-leaflet';
import L from 'leaflet';
import './Leaflet.Dialog';
import './Leaflet.Dialog.css';

export default class Dialog extends MapControl {
	createLeafletElement(props) {
		// this._id = this._generateId();
		this._id = props.id || this._generateId();
		this._containerId = `dialog-contents-${this._id}`;
		return L.control.dialog(props).setContent(`<div id="${this._containerId}"></div>`);
	}

	componentDidMount() {
		super.componentDidMount();
		const { map } = this.context;
		const {
			onOpened,
			onClosed,
			onDestroyed,
			onLocked,
			onUnlocked,
			onFrozen,
			onUnfrozen,
			onUpdated,
			onResizeStart,
			onResizing,
			onResizeEnd,
			onMoveStart,
			onMoving,
			onMoveEnd,
			onCloseHidden,
			onCloseShown,
			onResizeHidden,
			onResizeShown,
			children
		} = this.props;
		this.leafletElement.addTo(map);
		this._renderContent(children);
		map.on('dialog:opened', (e) => {
				this._propagateEvent(onOpened, e);
			})
			.on('dialog:closed', (e) => {
				this._propagateEvent(onClosed, e);
			})
			.on('dialog:destroyed', (e) => {
				this._propagateEvent(onDestroyed, e);
			})
			.on('dialog:locked', (e) => {
				this._propagateEvent(onLocked, e);
			})
			.on('dialog:unlocked', (e) => {
				this._propagateEvent(onUnlocked, e);
			})
			.on('dialog:frozen', (e) => {
				this._propagateEvent(onFrozen, e);
			})
			.on('dialog:unfrozen', (e) => {
				this._propagateEvent(onUnfrozen, e);
			})
			.on('dialog:updated', (e) => {
				this._propagateEvent(onUpdated, e);
			})
			.on('dialog:resizestart', (e) => {
				this._propagateEvent(onResizeStart, e);
			})
			.on('dialog:resizing', (e) => {
				this._propagateEvent(onResizing, e);
			})
			.on('dialog:resizeend', (e) => {
				this._propagateEvent(onResizeEnd, e);
			})
			.on('dialog:movestart', (e) => {
				this._propagateEvent(onMoveStart, e);
			})
			.on('dialog:moving', (e) => {
				this._propagateEvent(onMoving, e);
			})
			.on('dialog:moveend', (e) => {
				this._propagateEvent(onMoveEnd, e);
			})
			.on('dialog:closehidden', (e) => {
				this._propagateEvent(onCloseHidden, e);
			})
			.on('dialog:closeshown', (e) => {
				this._propagateEvent(onCloseShown, e);
			})
			.on('dialog:resizehidden', (e) => {
				this._propagateEvent(onResizeHidden, e);
			})
			.on('dialog:resizeshown', (e) => {
				this._propagateEvent(onResizeShown, e);
			});
	}

	close() {
		this.leafletElement.close();
	}

	open() {
		this.leafletElement.open();
	}

	destroy() {
		this.leafletElement.destroy();
	}

	setContent(content) {
		// this.leafletElement.setContent(content);
		this._renderContent(content);
	}

	setLocation(anchor) {
		this.leafletElement.setLocation(anchor);
	}

	setSize(size) {
		this.leafletElement.setSize(size);
	}

	lock() {
		this.leafletElement.lock();
	}

	unlock() {
		this.leafletElement.unlock();
	}

	freeze() {
		this.leafletElement.freeze();
	}

	unfreeze() {
		this.leafletElement.unfreeze();
	}

	hideClose() {
		this.leafletElement.hideClose();
	}

	showClose() {
		this.leafletElement.showClose();
	}

	hideResize() {
		this.leafletElement.hideResize();
	}

	showResize() {
		this.leafletElement.showResize();
	}

	_renderContent(content) {
		if (typeof content === 'string') {
			this.leafletElement.setContent(`<div id="${this._containerId}">${content}</div>`);
		} else {
			render(
				Children.only(content),
				document.getElementById(this._containerId)
			);
		}
	}

	_propagateEvent(eventHandler, event) {
		if (typeof eventHandler !== 'function') return;
		eventHandler(event);
	}

	_generateId() {
		return (Math.random() * 1e20).toString(36);
	}
}
