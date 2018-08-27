# react-leaflet-dialog

[![travis build](https://img.shields.io/travis/mhasbie/react-leaflet-dialog.svg?style=plastic)](https://travis-ci.org/mhasbie/react-leaflet-dialog)
[![version](https://img.shields.io/npm/v/react-leaflet-dialog.svg?style=plastic)](http://npm.im/react-leaflet-dialog)
[![MIT License](https://img.shields.io/npm/l/react-leaflet-dialog.svg?style=plastic)](http://opensource.org/licenses/MIT)
[![dependencies](https://img.shields.io/david/mhasbie/react-leaflet-dialog.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-dialog)
[![peer dependencies](https://img.shields.io/david/peer/mhasbie/react-leaflet-dialog.svg?style=plastic)](https://david-dm.org/mhasbie/react-leaflet-dialog?type=peer)
[![downloads](https://img.shields.io/npm/dt/react-leaflet-dialog.svg?style=plastic)](http://npm-stat.com/charts.html?package=react-leaflet-dialog&from=2018-01-01)
[![issues](https://img.shields.io/github/issues/mhasbie/react-leaflet-dialog.svg?style=plastic)](https://github.com/mhasbie/react-leaflet-dialog/issues)

React wrapper of [Leaflet.Dialog](https://github.com/NBTSolutions/Leaflet.Dialog) for [react-leaflet](https://github.com/PaulLeCam/react-leaflet).

A dialog modal window that is resizable and positionable on the map.

*Tested with Leaflet 1.3.1 and React-Leaflet 1.8.0*

[Demo](http://nbtsolutions.github.io/Leaflet.Dialog/).

[JSFiddle](https://jsfiddle.net/m_hasbie/jemw7qzr/)


## Installation

### Install via NPM

```bash
npm install react-leaflet-dialog --save
```

## Usage example

```javascript
import { Map, TileLayer } from 'react-leaflet';
import Dialog from 'react-leaflet-dialog';
		
<Map center={[101.483459, 2.938926]} zoom={12}>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  />

  <Dialog ref={(ref) => { this.dialog = ref; }} id="dialog1" />
</Map>
```

### Options:

Any props passed to Dialog are passed down to Leaflet.Dialog.

Refer [Leaflet.Dialog options](https://github.com/NBTSolutions/Leaflet.Dialog#options) for a complete list of options supported.

| Property | Type | Default | Description
| --- | --- | --- | ---
| size | [Array][width, height] | [ 300, 300 ] | An array of the starting width and height values (in pixels).
| minSize | [Array][width, height] | [ 100, 100 ] | An array with the minimum resize width and height (in pixels).
| maxSize | [Array][width, height] | [ 350, 350 ] | An array with the maximum resize width and height (in pixels).
| anchor | [Array][top, left] | [ 250, 250 ] | The starting point anchor location (from the upper left) in pixels.
| position | [String] | 'topleft' | The leaflet control div to place the modal inside, as a starting reference point.
| initOpen | [Boolean] | true | Whether or not to initialize in an open state.

### Methods:

| Method | Returns | Example | Description
| --- | --- | --- | ---
| open() | this | dialog.open(); | Opens the dialog window.
| close() | this | dialog.close(); | Closes the dialog window.
| destroy() | this | dialog.destroy(); | Removes the dialog box from the window.
| setLocation( [Array][top, left] anchor location ) | this | dialog.setLocation( [ 15, 15 ] ); | Move the dialog box to the specified pixel location ( Relative to the 'position' option )
| setSize( [Array][width, height] size ) | this | dialog.setSize( [ 150, 150 ] ); | Resize the dialog window to the specified width and height.
| setContent( [String | node] content ) | this | dialog.setContent("<p>Hello! Welcome to your nice new dialog box!</p>"); | Set new content for the dialog.
| lock() | this | dialog.lock(); | Hides all visible dialog window controls.
| unlock() | this | dialog.unlock(); | Re-instates all dialog window controls.
| freeze() | this | dialog.freeze(); | Hides all visible dialog window movement/sizing controls.
| unfreeze() | this | dialog.unfreeze(); | Re-instates all dialog window movement/sizing controls.
| hideClose() | this | dialog.hideClose(); | Hides the closing 'x'
| showClose() | this | dialog.showClose(); | Shows the closing 'x'
| hideResize() | this | dialog.hideResize(); | Hides the resizing symbol
| showResize() | this | dialog.showResize(); | Shows the resizing symbol

#### Example

```javascript

...

openDialog() {
  this.dialog.open();
}

closeDialog() {
  this.dialog.close();
}

destroyDialog() {
  this.dialog.destroy();
}

updateDialogContent() {
  this.dialog.setContent("<div>This is the new dialog content.</div>");
}

render() {
  return (
	<Map center={[101.483459, 2.938926]} zoom={12}>
	  <TileLayer
		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	  />

	  <Dialog ref={(ref) => { this.dialog = ref; }} id="dialog1" />
	</Map>
  );
}

...

```

### Events:

| Event | Data | Description
| --- | --- | ---
| onOpened | this | Fired when open() is called.
| onClosed | this | Fired when close() is called or when the 'x' is clicked.
| onDestroyed | this | Fired when destroy() is called.
| onLocked | this | Fired when lock() is called.
| onUnlocked | this | Fired when unlock() is called.
| onFrozen | this | Fired when freeze() is called.
| onUnfrozen | this | Fired when unfreeze() is called.
| onUpdated | this | Fired when contents are set or when added to the map.
| onResizeStart | this | Fired when the resize button is clicked.
| onResizing | this | Fired continuously as the resize button is dragged.
| onResizeEnd | this | Fired when the resize button click is released.
| onMoveStart | this | Fired when the move button is clicked.
| onMoving | this | Fired continuously as the move button is dragged.
| onMoveEnd | this | Fired when the move button click is released.
| onCloseHidden | this | Fired when hideClose() is called.
| onCloseShown | this | Fired when the showClose() is called.
| onResizeHidden | this | Fired when hideResize() is called.
| onResizeShown | this | Fired when the showResize() is called.

# Credits
Credits goes to [NBTSolutions](https://github.com/NBTSolutions) and all the [contributors](https://github.com/NBTSolutions/Leaflet.Dialog/graphs/contributors) for the original work.

# License

MIT License
