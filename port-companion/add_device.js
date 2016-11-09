import {
    HorizontalScroller,

import {
	DATA,
	save_data,
	TMP_SCREEN,
	largeText,
	whiteSkin,
	device_list_item_padding,
	device_list_topbar_height,
	// lightGraySmallText,
	darkGraySmallText
} from "global_settings";

import {
	HomeContentTemplate,
	HomeScreenTemplate,
	HomeContent,
	HomeScreen,
	LoadHomeContent,
} from "home";

import {
	SearchScreenTemplate,
	SearchContentTemplate,
	SearchScreen,
	SearchContent
} from "search_device";

export var AddDeviceScreen;
export var AddDeviceContent;

export var AddDeviceContentTemplate = Column.template($ => ({
    	new AddDeviceTopBar(),

var AddDeviceTopBar = Container.template($ => ({
		new Column( { contents: [
			new Line( { contents: [
				new BackTemplate(),
				new Blank(),
				new SaveTemplate()
			] }),
		]}),

let BackTemplate = Container.template($ => ({
	active: true,
	contents: [
		new Label({
			style: darkGraySmallText,
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
			save_data(DATA);
			application.remove(TMP_SCREEN);
			SearchContent = SearchContentTemplate({});
        	SearchScreen = new SearchScreenTemplate({ SearchContent });
        	TMP_SCREEN = SearchScreen;
        	application.add(TMP_SCREEN);
		}
	})
}));

let SaveTemplate = Container.template($ => ({
	active: true,
	contents: [
		new Label({
			style: darkGraySmallText,
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
	
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
	width: 200
}));