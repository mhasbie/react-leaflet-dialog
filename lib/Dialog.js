'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _reactDom = require('react-dom');

var _reactLeaflet = require('react-leaflet');

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

require('./Leaflet.Dialog');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = function (_MapControl) {
	_inherits(Dialog, _MapControl);

	function Dialog() {
		_classCallCheck(this, Dialog);

		return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
	}

	_createClass(Dialog, [{
		key: 'createLeafletElement',
		value: function createLeafletElement(props) {
			// this._id = this._generateId();
			this._id = props.id || this._generateId();
			this._containerId = 'dialog-contents-' + this._id;
			return _leaflet2.default.control.dialog(props).setContent('<div id="' + this._containerId + '"></div>');
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_get(Dialog.prototype.__proto__ || Object.getPrototypeOf(Dialog.prototype), 'componentDidMount', this).call(this);
			var map = this.context.map;
			var _props = this.props,
			    onOpened = _props.onOpened,
			    onClosed = _props.onClosed,
			    onDestroyed = _props.onDestroyed,
			    onLocked = _props.onLocked,
			    onUnlocked = _props.onUnlocked,
			    onFrozen = _props.onFrozen,
			    onUnfrozen = _props.onUnfrozen,
			    onUpdated = _props.onUpdated,
			    onResizeStart = _props.onResizeStart,
			    onResizing = _props.onResizing,
			    onResizeEnd = _props.onResizeEnd,
			    onMoveStart = _props.onMoveStart,
			    onMoving = _props.onMoving,
			    onMoveEnd = _props.onMoveEnd,
			    onCloseHidden = _props.onCloseHidden,
			    onCloseShown = _props.onCloseShown,
			    onResizeHidden = _props.onResizeHidden,
			    onResizeShown = _props.onResizeShown,
			    children = _props.children;

			this.leafletElement.addTo(map);
			this._renderContent(children);
			map.on('dialog:opened', function (e) {
				_this2._propagateEvent(onOpened, e);
			}).on('dialog:closed', function (e) {
				_this2._propagateEvent(onClosed, e);
			}).on('dialog:destroyed', function (e) {
				_this2._propagateEvent(onDestroyed, e);
			}).on('dialog:locked', function (e) {
				_this2._propagateEvent(onLocked, e);
			}).on('dialog:unlocked', function (e) {
				_this2._propagateEvent(onUnlocked, e);
			}).on('dialog:frozen', function (e) {
				_this2._propagateEvent(onFrozen, e);
			}).on('dialog:unfrozen', function (e) {
				_this2._propagateEvent(onUnfrozen, e);
			}).on('dialog:updated', function (e) {
				_this2._propagateEvent(onUpdated, e);
			}).on('dialog:resizestart', function (e) {
				_this2._propagateEvent(onResizeStart, e);
			}).on('dialog:resizing', function (e) {
				_this2._propagateEvent(onResizing, e);
			}).on('dialog:resizeend', function (e) {
				_this2._propagateEvent(onResizeEnd, e);
			}).on('dialog:movestart', function (e) {
				_this2._propagateEvent(onMoveStart, e);
			}).on('dialog:moving', function (e) {
				_this2._propagateEvent(onMoving, e);
			}).on('dialog:moveend', function (e) {
				_this2._propagateEvent(onMoveEnd, e);
			}).on('dialog:closehidden', function (e) {
				_this2._propagateEvent(onCloseHidden, e);
			}).on('dialog:closeshown', function (e) {
				_this2._propagateEvent(onCloseShown, e);
			}).on('dialog:resizehidden', function (e) {
				_this2._propagateEvent(onResizeHidden, e);
			}).on('dialog:resizeshown', function (e) {
				_this2._propagateEvent(onResizeShown, e);
			});
		}
	}, {
		key: 'close',
		value: function close() {
			this.leafletElement.close();
		}
	}, {
		key: 'open',
		value: function open() {
			this.leafletElement.open();
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.leafletElement.destroy();
		}
	}, {
		key: 'setContent',
		value: function setContent(content) {
			// this.leafletElement.setContent(content);
			this._renderContent(content);
		}
	}, {
		key: 'setLocation',
		value: function setLocation(anchor) {
			this.leafletElement.setLocation(anchor);
		}
	}, {
		key: 'setSize',
		value: function setSize(size) {
			this.leafletElement.setSize(size);
		}
	}, {
		key: 'lock',
		value: function lock() {
			this.leafletElement.lock();
		}
	}, {
		key: 'unlock',
		value: function unlock() {
			this.leafletElement.unlock();
		}
	}, {
		key: 'freeze',
		value: function freeze() {
			this.leafletElement.freeze();
		}
	}, {
		key: 'unfreeze',
		value: function unfreeze() {
			this.leafletElement.unfreeze();
		}
	}, {
		key: 'hideClose',
		value: function hideClose() {
			this.leafletElement.hideClose();
		}
	}, {
		key: 'showClose',
		value: function showClose() {
			this.leafletElement.showClose();
		}
	}, {
		key: 'hideResize',
		value: function hideResize() {
			this.leafletElement.hideResize();
		}
	}, {
		key: 'showResize',
		value: function showResize() {
			this.leafletElement.showResize();
		}
	}, {
		key: '_renderContent',
		value: function _renderContent(content) {
			if (typeof content === 'string') {
				this.leafletElement.setContent('<div id="' + this._containerId + '">' + content + '</div>');
			} else {
				(0, _reactDom.render)(_react.Children.only(content), document.getElementById(this._containerId));
			}
		}
	}, {
		key: '_propagateEvent',
		value: function _propagateEvent(eventHandler, event) {
			if (typeof eventHandler !== 'function') return;
			eventHandler(event);
		}
	}, {
		key: '_generateId',
		value: function _generateId() {
			return (Math.random() * 1e20).toString(36);
		}
	}]);

	return Dialog;
}(_reactLeaflet.MapControl);

exports.default = Dialog;