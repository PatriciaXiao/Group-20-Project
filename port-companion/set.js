/* 

import { 
	Button,
    ButtonBehavior,
    RadioGroup, 
    RadioGroupBehavior
} from 'lib/buttons';
	img_logo,
	settings_list_topbar_img_size,
	settings_list_item_padding,
	settings_list_setting_height,
	settings_button_height,

import {
	WelcomePageTemplate,
} from "main";
*/
import {
	HomeContentTemplate,
	HomeScreenTemplate,
	HomeContent,
	HomeScreen,
	LoadHomeContent,
} from "home";

import {
	FavoritesContent,
	FavoritesContentTemplate,
	FavoritesScreenTemplate,
	LoadFavoritesContent
} from "favorites";

import {
	NotificationsContent,
	NotificationsContentTemplate,
	NotificationsScreenTemplate,
	LoadNotificationsContent
} from "notifications";
			if ($.hint == "home") {
				trace("going to home page\n");
				application.remove(TMP_SCREEN);
				HomeContent = HomeContentTemplate({});
        		LoadHomeContent(HomeContent);
        		HomeScreen = new HomeScreenTemplate({ HomeContent });
        		TMP_SCREEN = HomeScreen;
        		application.add(TMP_SCREEN);
			}
			else if ($.hint == "favorites") {
				trace("going to favorites page\n");
				application.remove(TMP_SCREEN);
				FavoritesContent = FavoritesContentTemplate({});
        		LoadFavoritesContent(FavoritesContent);
        		FavoritesScreen = new FavoritesScreenTemplate({ FavoritesContent });
        		TMP_SCREEN = FavoritesScreen;
        		application.add(TMP_SCREEN);
        		
			}
			else if ($.hint == "notifications") {
				trace("going to notifications page\n");
				application.remove(TMP_SCREEN);
				NotificationsContent = NotificationsContentTemplate({});
        		LoadNotificationsContent(NotificationsContent);
        		NotificationsScreen = new NotificationsScreenTemplate({ NotificationsContent });
        		TMP_SCREEN = NotificationsScreen;
        		application.add(TMP_SCREEN);
			}
			else if ($.hint == "settings") {
				trace("staying on settings page\n");
				/*
				application.remove(TMP_SCREEN);
				SetContent = SetContentTemplate({});
        		LoadSetContent(SetContent);
        		SetScreen = new SetScreenTemplate({ SetContent });
        		TMP_SCREEN = SetScreen;
        		application.add(TMP_SCREEN);
        		*/
			}
export var Divide = Line.template($ => ({
	top: 0, left: settings_list_item_padding, right: settings_list_item_padding, bottom: 0,
	height: $.height, width: $.length, skin: skins.foreground.settings,
}));
    	/// hard-coded part ///
    	new Column ( { //Line ( {
			contents: [
				new Picture({
					url:  DATA.users[0].img,
					top: 0, left: 0, right: 0, width: 100, height: 100,
				}),
				new Line({height: 10}),
				new Label({
					string: DATA.users[0].name,
					style: texts.settings.name,
				}),
				new Line({height: 24}),
				new UserSettingOptions({label: "ACCOUNT", idx: 0}), // idx is the user's user id
				new Divide({height: 1, length: 200}),
				new UserSettingOptions({label: "ABOUT", idx: 0}), // idx is the user's user id
				new Divide({height: 1, length: 200}),
				new Line({height: 50}),
				new logoutButtonTemplate({textForLabel: "SIGN OUT"}),
				
			]
		}),
    	///
    	
// the button to enter the home page
        	TMP_SCREEN = new WelcomePageTemplate({ skin: skins.background.welcome, img_url: img_logo, title: "HoM"});
			application.add(TMP_SCREEN);
	// just in case if we want to implement switch user, etc.
	/*
		trace(data_elem.favorite + "\n");
		if (!data_elem.favorite) continue;
	*/
		/*
let Blank = Container.template($ => ({
	width: $.length,
}));

var UserSettingOptions = Line.template($ => ({
	
	top: settings_list_item_padding, left: settings_list_item_padding, right: settings_list_item_padding, bottom: settings_list_item_padding,
	height: settings_list_setting_height,
	
	active: true,
	contents: [
		new Label({
			string: $.label,
			style: texts.settings.options,
			width: 100,
		}),
		new Blank({length: 120}),
		new Label({
			string: ">",
			style: texts.settings.options,
		}),
	],
	behavior: Behavior({
		onTouchEnded: function(container) {
			trace("selecting " + $.label + "\n")
			var command = $.label;
			if (command == "TIMING") {
				application.remove(TMP_SCREEN);
				TimingContent = TimingContentTemplate({idx: $.idx});
	        	TimingScreen = new TimingScreenTemplate({ TimingContent });
	        	TMP_SCREEN = TimingScreen;
	        	application.add(TMP_SCREEN);
			} 
        	
		}
	})	
}));