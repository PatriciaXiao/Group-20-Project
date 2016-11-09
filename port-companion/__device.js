import {
    HorizontalScroller,

import {
	TMP_SCREEN,
	largeText,
	whiteSkin,
	device_list_item_padding,
	device_list_topbar_height
} from "global_settings";

export var DeviceScreen;
export var DeviceContent;
    skin: whiteSkin,

export var DeviceContentTemplate = Column.template($ => ({
    	new DeviceTopBar(),

var DeviceTopBar = Container.template($ => ({
	// top-bar
	top: device_list_item_padding, left: device_list_item_padding, right: device_list_item_padding, bottom: device_list_item_padding,
	height: device_list_topbar_height,
	contents: [
		new Label({
			string: "Device XYZ",
			style: largeText,
		}),
		/*
		new Line({			
			contents: [
				//
				new AddDeviceTemplate({}),
			]
		}),
		*/
	]
}));