let MetrixUtil = require("./src/metrix-util.js");

var Metrix = {};
Metrix.onCreate = MetrixUtil.onCreate;
Metrix.newEvent = MetrixUtil.newEvent;
Metrix.newRevenue = MetrixUtil.newRevenue;
Metrix.screenDisplayed = MetrixUtil.screenDisplayed;
Metrix.addUserAttributes = MetrixUtil.addUserAttributes;
Metrix.addUserMetrics = MetrixUtil.addUserMetrics;
Metrix.appWillOpenUrl = MetrixUtil.appWillOpenUrl;


var MetrixConfig = function(appId) {
  this.appId = appId;
  this.shouldLunchDeeplink = false;
};

MetrixConfig.prototype.setAppSecret = function(
  secretId,
  info1,
  info2,
  info3,
  info4
) {
  this.appSecret = {
    secretId: secretId.toString(),
    info1: info1.toString(),
    info2: info2.toString(),
    info3: info3.toString(),
    info4: info4.toString()
  };
};

MetrixConfig.prototype.setShouldLaunchDeeplink = function(
  shouldLunchDeeplink
) {
  this.shouldLunchDeeplink = shouldLunchDeeplink;
};

MetrixConfig.prototype.setLocationListening = function(locationListening) {
  this.locationListening = locationListening;
};

MetrixConfig.prototype.setEventUploadThreshold = function(
  eventUploadThreshold
) {
  this.eventUploadThreshold = eventUploadThreshold;
};

MetrixConfig.prototype.setEventUploadMaxBatchSize = function(
  eventUploadMaxBatchSize
) {
  this.eventUploadMaxBatchSize = eventUploadMaxBatchSize;
};

MetrixConfig.prototype.setEventMaxCount = function(eventMaxCount) {
  this.eventMaxCount = eventMaxCount;
};

MetrixConfig.prototype.setEventUploadPeriodMillis = function(
  eventUploadPeriodMillis
) {
  this.eventUploadPeriodMillis = eventUploadPeriodMillis;
};

MetrixConfig.prototype.setSessionTimeoutMillis = function(
  sessionTimeoutMillis
) {
  this.sessionTimeoutMillis = sessionTimeoutMillis;
};

MetrixConfig.prototype.setEnableLogging = function(enableLogging) {
  this.enableLogging = enableLogging;
};

MetrixConfig.prototype.setLogLevel = function(logLevel) {
  this.logLevel = logLevel;
};

MetrixConfig.prototype.setFlushEventsOnClose = function(flushEventsOnClose) {
  this.flushEventsOnClose = flushEventsOnClose;
};

MetrixConfig.prototype.setDefaultTrackerToken = function(defaultTrackerToken) {
  this.defaultTrackerToken = defaultTrackerToken;
};

MetrixConfig.prototype.setStore = function(store) {
  this.store = store;
};

MetrixConfig.prototype.setOnAttributionChangeListener = function(
  onAttributionChangeListener
) {    
  this.onAttributionChangeListener = onAttributionChangeListener;
};

MetrixConfig.prototype.setOnDeeplinkResponseListener = function(
  onDeeplinkResponseListener
) {
  this.onDeeplinkResponseListener = onDeeplinkResponseListener;
};


module.exports = { Metrix, MetrixConfig };
