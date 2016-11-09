import {    VerticalScroller,    VerticalScrollbar,    TopScrollerShadow,    BottomScrollerShadow,
    HorizontalScroller,    HorizontalScrollbar,    LeftScrollerShadow,    RightScrollerShadow} from 'lib/scroller';

import {
	DATA,
	save_data,
	TMP_SCREEN,
	largeText,
	darkGrayMidText,
	darkGrayMidText_thin,
	whiteSkin,
	lightGraySkin,
	device_list_item_padding,
	device_list_topbar_height,
	device_list_topbar_width,
	device_list_setting_height,
	darkGraySmallText,
	device_image_size
} from "global_settings";

import {
	HomeContentTemplate,
	HomeScreenTemplate,
	HomeContent,
	HomeScreen,
	LoadHomeContent,
} from "home";

export var DeviceScreen;
export var DeviceContent;export var DeviceScreenTemplate = Container.template($ => ({    left: 0, right: 0, top: 0, bottom: 0,
    skin: whiteSkin,    contents: [        VerticalScroller($, {             active: true, top: 0, bottom: 0,            contents: [                $.DeviceContent,                VerticalScrollbar(),                 TopScrollerShadow(),                 BottomScrollerShadow(),                ]                             }),    ]}));

function debug(idx) {
	trace("\n" + DATA.init[idx].img + "\n");
	return "./assets/img_device_00.png";
	//debug($.idx),//"./assets/img_device_00.png", //
}

export var DeviceContentTemplate = Column.template($ => ({    top: 0, left: 0, right: 0,     contents: [
    	new DeviceTopBar({idx: $.idx}),
        new Line ( {
			contents: [
				new Picture({					url:  DATA.init[$.idx].img,					top: 0, left: 0, width: device_image_size, height: device_image_size,				}),
			]
		}),
		new Line({height: 20}),
		new SettingOptions({label: "TYPE", idx: $.idx}),
		new Divide({height: 1, length: 200}),
		new SettingOptions({label: "TIMING", idx: $.idx}),
		new Divide({height: 1, length: 200}),
		new SettingOptions({label: "ALERT", idx: $.idx}),
		new Divide({height: 1, length: 200}),    ]}));

function getStr(idx, option) {
	if (option == "TYPE") {
		var type = DATA.init[idx].type;
		// trace("\n" + type + "\n");
		if (type == "binary" || type == "lock") {
			return "On/Off";
		}
		return "?type";
	}
	else if (option == "TIMING") {
		// return "24 to 24";//debug
		var timing = DATA.init[idx].timing;
		if (timing) {
			return DATA.init[idx].time_start + " to " + DATA.init[idx].time_end;
		}
		return "None";
	}
	else if (option == "ALERT") {
		// return "24:00" // debug
		var alert = DATA.init[idx].alert;
		if (alert) {
			return DATA.init[idx].alert_time;
		}
		return "None";
	}
	return "NULL";
}
var Divide = Line.template($ => ({
	top: 0, left: device_list_item_padding, right: device_list_item_padding, bottom: 0,
	height: $.height, width: $.length, skin: lightGraySkin,
}));

import {
	TimingScreen,	TimingContent,	TimingScreenTemplate,
	TimingContentTemplate
} from "timing";

var SettingOptions = Line.template($ => ({
	top: device_list_item_padding, left: device_list_item_padding, right: device_list_item_padding, bottom: device_list_item_padding * 2,
	height: device_list_setting_height,
	active: true,
	contents: [
		new Label({
			string: $.label,
			style: darkGrayMidText_thin,
			width: 100,
		}),
		new Blank({length: 100}),
		new Label({
			string: getStr($.idx, $.label),
			style: darkGrayMidText_thin,
			width: 60,
		}),
		new Label({
			string: ">",
			style: darkGrayMidText_thin,
		}),
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
			trace("selecting " + $.label + "\n")
			var command = $.label;
			if (command == "TIMING") {
				// application.remove(TMP_SCREEN);
				application.remove(TMP_SCREEN);
				TimingContent = TimingContentTemplate({idx: $.idx});
	        	TimingScreen = new TimingScreenTemplate({ TimingContent });
	        	TMP_SCREEN = TimingScreen;
	        	application.add(TMP_SCREEN);
			} 
        	
		}
	})
	
}));
/*
var SettingOptions = Line.template($ => ({
	top: device_list_item_padding, left: device_list_item_padding, right: device_list_item_padding, bottom: device_list_item_padding * 2,
	height: device_list_setting_height,
	contents: [
		new Label({
			string: $.label,
			style: darkGrayMidText_thin,
			width: 100,
		}),
		new Blank({length: 100}),
		new Label({
			string: "None",
			style: darkGrayMidText_thin,
			width: 60,
		}),
		new Label({
			string: ">",
			style: darkGrayMidText_thin,
		}),
	]
}));
*/

var DeviceTopBar = Container.template($ => ({
	// top-bar
	top: device_list_item_padding, left: device_list_item_padding, right: device_list_item_padding, bottom: device_list_item_padding,
	height: device_list_topbar_height,
	contents: [
		new Column( { contents: [
			new Line( { contents: [
				new BackTemplate(),
				new Blank({length: device_list_topbar_width}),
			] }),
						new Label({
				string: DATA.init[$.idx].DeviceName,
				style: largeText,
			}),
			new Label({
				string: DATA.init[$.idx].DeviceGroup,
				style: darkGrayMidText,
			}),
		
		]}),
	]
}));


let BackTemplate = Container.template($ => ({
	active: true,
	contents: [
		new Label({			string: "< BACK",
			style: darkGraySmallText,			// top: 50, left: 240, right: home_list_item_padding, width: home_list_topbar_img_size, height: home_list_topbar_img_size,		})
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
			save_data(DATA);
			application.remove(TMP_SCREEN);
        	HomeContent = HomeContentTemplate({});
        	LoadHomeContent(HomeContent);
        	HomeScreen = new HomeScreenTemplate({ HomeContent });
        	TMP_SCREEN = HomeScreen;
        	application.add(TMP_SCREEN);
		}
	})
}));

let Blank = Container.template($ => ({
	width: $.length,
}));
