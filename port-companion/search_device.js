import {
	save_data,
	DATA,
	lightGraySkin,
	lightGraySmallText,
	darkGraySmallText,

import {
	HomeContentTemplate,
	HomeScreenTemplate,
	HomeContent,
	HomeScreen,
	LoadHomeContent,
} from "home";

import {
	AddDeviceScreen,
	AddDeviceContent,
	AddDeviceContentTemplate
} from "add_device";
		new Column( { contents: [
			new Line( { contents: [
				new CancelTemplate(),
				new Blank(),
				new AddTemplate()
			] }),
		]}),

let CancelTemplate = Container.template($ => ({
	active: true,
	contents: [
		new Label({
			style: lightGraySmallText,
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

let AddTemplate = Container.template($ => ({
	active: true,
	contents: [
		new Label({
			style: darkGraySmallText,
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
	
			application.remove(TMP_SCREEN);
        	AddDeviceContent = AddDeviceContentTemplate({});
        	AddDeviceScreen = new AddDeviceScreenTemplate({ AddDeviceContent });
        	TMP_SCREEN = AddDeviceScreen;
        	application.add(TMP_SCREEN);
		}
	})
}));

let Blank = Container.template($ => ({
	width: 200
}));