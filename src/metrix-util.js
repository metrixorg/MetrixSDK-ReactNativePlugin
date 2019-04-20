let Metrix = require("react-native").NativeModules.MetrixReactNative;
import { Platform } from "react-native";

if (Platform.OS === "android") {
	module.exports = {
		initialize: function(appKey) {
			Metrix.initialize(appKey, "0.8.7");
		},
		enableLocationListening: function() {
			Metrix.enableLocationListening();
		},
		disableLocationListening: function() {
			Metrix.disableLocationListening();
		},
		setEventUploadThreshold: function(eventUploadThreshold) {
			Metrix.setEventUploadThreshold(eventUploadThreshold);
		},
		setEventUploadMaxBatchSize: function(eventUploadMaxBatchSize) {
			Metrix.setEventUploadMaxBatchSize(eventUploadMaxBatchSize);
		},
		setEventMaxCount: function(eventMaxCount) {
			Metrix.setEventMaxCount(eventMaxCount);
		},
		setEventUploadPeriodMillis: function(eventUploadPeriodMillis) {
			Metrix.setEventUploadPeriodMillis(eventUploadPeriodMillis);
		},
		setSessionTimeoutMillis: function(sessionTimeoutMillis) {
			Metrix.setSessionTimeoutMillis(sessionTimeoutMillis);
		},
		enableLogging: function(enableLogging) {
			Metrix.enableLogging(enableLogging);
		},
		setLogLevel: function(logLevel) {
			Metrix.setLogLevel(logLevel);
		},
		setFlushEventsOnClose: function(flushEventsOnClose) {
			Metrix.setFlushEventsOnClose(flushEventsOnClose);
		},
		newEvent: function(eventName, customAttributes, customMetrics) {
				if (customAttributes && customMetrics) {
				Metrix.newEventCustom(eventName,customAttributes,customMetrics);
			}
			else{	
			Metrix.newEvent(eventName);
			}
		},
		newBusinessEvent: function(itemType, itemId, cartType, transactionNum, amount) {
			Metrix.newBusinessEvent(itemType, itemId, cartType, transactionNum, amount);
		},
		screenDisplayed: function(screenName) {
			Metrix.screenDisplayed(screenName);
		},
		setScreenFlowsAutoFill: function(screenFlowsAutoSend) {
			Metrix.setScreenFlowsAutoFill(screenFlowsAutoSend);
		},
		setMetrixApiKey: function(newApiKey) {
			Metrix.setMetrixApiKey(newApiKey);
		},
		setDefaultTracker: function(callback) {
			Metrix.setDefaultTracker(callback);
		},
		getSessionNum: function(callback) {
			Metrix.getSessionNum(callback);
		},
		isScreenFlowsAutoFill: function(callback) {
			Metrix.isScreenFlowsAutoFill(callback);
		},
		setUserMetrics: function(userMetrics){
			Metrix.setUserMetrics(userMetrics);
		},
		addUserAttributes: function(userAttributes){
			Metrix.addUserAttributes(userAttributes);
		},
		setOnAttributionChangedListener: function(callback){
			Metrix.setOnAttributionChangedListener(callback);
		}
	};
} else if (Platform.OS === "ios") {
	module.exports = {
		initialize: function(appKey) {
			Metrix.initialize(appKey);
		},
		enableLocationListening: function() {
			// Metrix.enableLocationListening();
		},
		disableLocationListening: function() {
			// Metrix.disableLocationListening();
		},
		setEventUploadThreshold: function(eventUploadThreshold) {
			// Metrix.setEventUploadThreshold(eventUploadThreshold);
		},
		setEventUploadMaxBatchSize: function(eventUploadMaxBatchSize) {
			// Metrix.setEventUploadMaxBatchSize(eventUploadMaxBatchSize);
		},
		setEventMaxCount: function(eventMaxCount) {
			// Metrix.setEventMaxCount(eventMaxCount);
		},
		setEventUploadPeriodMillis: function(eventUploadPeriodMillis) {
			// Metrix.setEventUploadPeriodMillis(eventUploadPeriodMillis);
		},
		setSessionTimeoutMillis: function(sessionTimeoutMillis) {
			// Metrix.setSessionTimeoutMillis(sessionTimeoutMillis);
		},
		enableLogging: function(enableLogging) {
			// Metrix.enableLogging(enableLogging);
		},
		setLogLevel: function(logLevel) {
			// Metrix.setLogLevel(logLevel);
		},
		setFlushEventsOnClose: function(flushEventsOnClose) {
			// Metrix.setFlushEventsOnClose(flushEventsOnClose);
		},
		newEvent: function(eventName, customAttributes, customMetrics) {
				if (customAttributes && customMetrics) {
				Metrix.newEventCustom(eventName,customAttributes,customMetrics);
			}
			else{	
			Metrix.newEvent(eventName);
			}
		},
		newBusinessEvent: function(itemType, itemId, cartType, transactionNum, amount) {
			// Metrix.newBusinessEvent(itemType, itemId, cartType, transactionNum, amount);
		},
		screenDisplayed: function(screenName) {
			// Metrix.screenDisplayed(screenName);
		},
		setScreenFlowsAutoFill: function(screenFlowsAutoSend) {
			// Metrix.setScreenFlowsAutoFill(screenFlowsAutoSend);
		},
		setMetrixApiKey: function(newApiKey) {
			// Metrix.setMetrixApiKey(newApiKey);
		},
		setDefaultTracker: function(callback) {
			// Metrix.setDefaultTracker(callback);
		},
		getSessionNum: function(callback) {
			// Metrix.getSessionNum(callback);
		},
		isScreenFlowsAutoFill: function(callback) {
			// Metrix.isScreenFlowsAutoFill(callback);
		},
		setUserMetrics: function(userMetrics){
			// Metrix.setUserMetrics(userMetrics);
		},
		addUserAttributes: function(userAttributes){
			// Metrix.addUserAttributes(userAttributes);
		},
		setOnAttributionChangedListener: function(callback){
			// Metrix.setOnAttributionChangedListener(callback);
		}
	};
}

