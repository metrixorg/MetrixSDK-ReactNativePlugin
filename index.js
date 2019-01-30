let MetrixUtil = require("./src/metrix-util.js");

module.exports = {
	initialize: MetrixUtil.initialize,
	enableLocationListening: MetrixUtil.enableLocationListening,
	disableLocationListening: MetrixUtil.disableLocationListening,
	setEventUploadThreshold: MetrixUtil.setEventUploadThreshold,
	setEventUploadMaxBatchSize: MetrixUtil.setEventUploadMaxBatchSize,
	setEventMaxCount: MetrixUtil.setEventMaxCount,
	setEventUploadPeriodMillis: MetrixUtil.setEventUploadPeriodMillis,
	setSessionTimeoutMillis: MetrixUtil.setSessionTimeoutMillis,
	setOptOut: MetrixUtil.setOptOut,
	enableLogging: MetrixUtil.enableLogging,
	setLogLevel: MetrixUtil.setLogLevel,
	setOffline: MetrixUtil.setOffline,
	setFlushEventsOnClose: MetrixUtil.setFlushEventsOnClose,
	newEvent: MetrixUtil.newEvent,
	newBusinessEvent: MetrixUtil.newBusinessEvent,
	screenDisplayed: MetrixUtil.screenDisplayed,
	setScreenFlowsAutoFill: MetrixUtil.setScreenFlowsAutoFill,
	setMetrixApiKey: MetrixUtil.setMetrixApiKey,
	isOptedOut: MetrixUtil.isOptedOut,
	setDefaultTracker: MetrixUtil.setDefaultTracker,
	getSessionNum: MetrixUtil.getSessionNum,
	isScreenFlowsAutoFill: MetrixUtil.isScreenFlowsAutoFill,
	addUserAttributes: MetrixUtil.addUserAttributes,
	setUserMetrics: MetrixUtil.setUserMetrics,
	setOnAttributionChangedListener:MetrixUtil.setOnAttributionChangedListener
};
