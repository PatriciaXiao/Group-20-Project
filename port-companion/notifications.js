/* 
	img_cross,
	img_check,

import {
	FavoritesContent,
	FavoritesContentTemplate,
	FavoritesScreenTemplate,
	LoadFavoritesContent
} from "favorites";
				/*
				application.remove(TMP_SCREEN)
				NotificationsContent = NotificationsContentTemplate({});
        		LoadNotificationsContent(NotificationsContent);
        		NotificationsScreen = new NotificationsScreenTemplate({ NotificationsContent });
        		TMP_SCREEN = NotificationsScreen;
        		application.add(TMP_SCREEN);
				*/

let crossButtonTemplate = Container.template($ => ({ // the icons in the bottom navigation bar

let checkButtonTemplate = Container.template($ => ({ // the icons in the bottom navigation bar

function getReqState(state) {
	if (state) return "required";
	return "requires";
}

function str(num) {
	return num.toString();
}

export var doorUnlockMessageTemplate = Column.template($ => ({
    top: notifications_list_item_padding_h, bottom: notifications_list_item_padding_h,
    left: notifications_list_item_padding_w, right: notifications_list_item_padding_w,
    height: notifications_list_item_height,
    skin: skins.foreground.notifications,
    contents: [
    	// the notification content
    	new Line ( {
    		top: notifications_list_item_padding_h,
	    	contents: [
		    	new Label({
		    		string: $.kid_name,
					style: texts.notifications.content,
					name: "kid_name",
		    	}),
		    	new Label({
		    		string: " ",
					style: texts.notifications.content,
		    	}),
		    	new Label({
		    		string: getReqState($.state),
					style: texts.notifications.content,
					name: "state"
		    	}),
		    	new Label({
		    		string: " to ",
					style: texts.notifications.content,
		    	}),
		    	new Label({
		    		string: "unlock",
					style: texts.notifications.emph,
		    	}),
		    	new Label({
		    		string: " ",
					style: texts.notifications.content,
		    	}),
		    	new Label({
		    		string: $.door_name,
					style: texts.notifications.content,
					name: "door_name"
		    	}),
	    	]
    	}),
    	// the buttons
    	new Line ({
    		contents: [
    			new crossButtonTemplate({padding: 6, size: 50}),
    			new Column({width: 50}),
    			new checkButtonTemplate({padding: 6, size: 50})
    		]
    	})
    			
    ],
    name: str($.idx)
}));
    	/// hard-code draft
    	new doorUnlockMessageTemplate({idx: 0, kid_name: "David", state: 0, door_name: "front door"}),
    	new doorUnlockMessageTemplate({idx: 1, kid_name: "Susan", state: 0, door_name: "back door"}),
    	/*
    	new Column ({
    		top: notifications_list_item_padding_h, bottom: notifications_list_item_padding_h,
    		left: notifications_list_item_padding_w, right: notifications_list_item_padding_w,
    		height: notifications_list_item_height,
    		skin: skins.foreground.notifications,
    		contents: [
    			// the notification content
    			new Line ( {
    				top: notifications_list_item_padding_h,
	    			contents: [
		    			new Label({
		    				string: "David",
							style: texts.notifications.content,
		    			}),
		    			new Label({
		    				string: " ",
							style: texts.notifications.content,
		    			}),
		    			new Label({
		    				string: "requested",
							style: texts.notifications.content,
		    			}),
		    			new Label({
		    				string: " to ",
							style: texts.notifications.content,
		    			}),
		    			new Label({
		    				string: "unlock",
							style: texts.notifications.emph,
		    			}),
		    			new Label({
		    				string: " ",
							style: texts.notifications.content,
		    			}),
		    			new Label({
		    				string: "front door",
							style: texts.notifications.content,
		    			}),
	    			]
    			}),
    			// the buttons
    			new Line ({
    				contents: [
    					new crossButtonTemplate({padding: 6, size: 50}),
    					new Column({width: 50}),
    					new checkButtonTemplate({padding: 6, size: 50})
    				]
    			})
    			
    		]
    	}),
    	*/
    	///
	/*
	*/