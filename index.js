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
	enableLogging: MetrixUtil.enableLogging,
	setLogLevel: MetrixUtil.setLogLevel,
	setFlushEventsOnClose: MetrixUtil.setFlushEventsOnClose,
	newEvent: MetrixUtil.newEvent,
	newRevenue: MetrixUtil.newRevenue,
	screenDisplayed: MetrixUtil.screenDisplayed,
	setScreenFlowsAutoFill: MetrixUtil.setScreenFlowsAutoFill,
	setMetrixApiKey: MetrixUtil.setMetrixApiKey,
	setDefaultTracker: MetrixUtil.setDefaultTracker,
	getSessionNum: MetrixUtil.getSessionNum,
	isScreenFlowsAutoFill: MetrixUtil.isScreenFlowsAutoFill,
	addUserAttributes: MetrixUtil.addUserAttributes,
	setUserMetrics: MetrixUtil.setUserMetrics,
	setOnAttributionChangedListener:MetrixUtil.setOnAttributionChangedListener
};
