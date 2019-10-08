let MetrixUtil = require('./src/metrix-util.js');
import {DeviceEventEmitter} from 'react-native';

var Metrix = {};
Metrix.onCreate = MetrixUtil.onCreate;
Metrix.newEvent = MetrixUtil.newEvent;
Metrix.newRevenue = MetrixUtil.newRevenue;
Metrix.screenDisplayed = MetrixUtil.screenDisplayed;
Metrix.addUserAttributes = MetrixUtil.addUserAttributes;
Metrix.addUserMetrics = MetrixUtil.addUserMetrics;
Metrix.appWillOpenUrl = MetrixUtil.appWillOpenUrl;

var MetrixConfig = function(appId) {
  this.settings = {};
  this.settings.appId = appId;
  this.settings.shouldLunchDeeplink = false;
  this.onAttributionChangeListener = function(e) {};
  this.onDeeplinkResponseListener = function(e) {};
  this.onReceiveUserIdListener = function(e) {};
  this.onSessionIdListener = function(e) {};

  DeviceEventEmitter.addListener('onAttributionChangeListener', val => {
    this.onAttributionChangeListener(val);
  });
  DeviceEventEmitter.addListener('onDeeplinkResponseListener', val => {
    this.onDeeplinkResponseListener(val);
  });
  DeviceEventEmitter.addListener('onReceiveUserIdListener', val => {
    this.onReceiveUserIdListener(val);
  });
  DeviceEventEmitter.addListener('onSessionIdListener', val => {
    this.onSessionIdListener(val);
  });
};

MetrixConfig.prototype.setAppSecret = function(
  secretId,
  info1,
  info2,
  info3,
  info4,
) {
  this.settings.appSecret = {
    secretId: secretId.toString(),
    info1: info1.toString(),
    info2: info2.toString(),
    info3: info3.toString(),
    info4: info4.toString(),
  };
};

MetrixConfig.prototype.setShouldLaunchDeeplink = function(shouldLunchDeeplink) {
  this.settings.shouldLunchDeeplink = shouldLunchDeeplink;
};

MetrixConfig.prototype.setLocationListening = function(locationListening) {
  this.settings.locationListening = locationListening;
};

MetrixConfig.prototype.setEventUploadThreshold = function(
  eventUploadThreshold,
) {
  this.settings.eventUploadThreshold = eventUploadThreshold;
};

MetrixConfig.prototype.setEventUploadMaxBatchSize = function(
  eventUploadMaxBatchSize,
) {
  this.settings.eventUploadMaxBatchSize = eventUploadMaxBatchSize;
};

MetrixConfig.prototype.setEventMaxCount = function(eventMaxCount) {
  this.settings.eventMaxCount = eventMaxCount;
};

MetrixConfig.prototype.setEventUploadPeriodMillis = function(
  eventUploadPeriodMillis,
) {
  this.settings.eventUploadPeriodMillis = eventUploadPeriodMillis;
};

MetrixConfig.prototype.setSessionTimeoutMillis = function(
  sessionTimeoutMillis,
) {
  this.settings.sessionTimeoutMillis = sessionTimeoutMillis;
};

MetrixConfig.prototype.setEnableLogging = function(enableLogging) {
  this.settings.enableLogging = enableLogging;
};

MetrixConfig.prototype.setLogLevel = function(logLevel) {
  this.settings.logLevel = logLevel;
};

MetrixConfig.prototype.setFlushEventsOnClose = function(flushEventsOnClose) {
  this.settings.flushEventsOnClose = flushEventsOnClose;
};

MetrixConfig.prototype.setDefaultTrackerToken = function(defaultTrackerToken) {
  this.settings.defaultTrackerToken = defaultTrackerToken;
};

MetrixConfig.prototype.setStore = function(store) {
  this.settings.store = store;
};

MetrixConfig.prototype.setOnAttributionChangeListener = function(
  onAttributionChangeListener,
) {
  this.settings.onAttributionChangedListener = true;
  this.onAttributionChangeListener = onAttributionChangeListener;
};

MetrixConfig.prototype.setOnDeeplinkResponseListener = function(
  onDeeplinkResponseListener,
) {
  this.settings.onDeeplinkResponseListener = true;
  this.onDeeplinkResponseListener = onDeeplinkResponseListener;
};

MetrixConfig.prototype.setOnSessionIdListener = function(onSessionIdListener) {
  this.settings.onSessionIdListener = true;
  this.onSessionIdListener = onSessionIdListener;
};

MetrixConfig.prototype.setOnReceiveUserIdListener = function(
  onReceiveUserIdListener,
) {
  this.settings.onReceiveUserIdListener = true;
  this.onReceiveUserIdListener = onReceiveUserIdListener;
};

module.exports = {
  Metrix,
  MetrixConfig,
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
  setAppSecret: MetrixUtil.setAppSecret,
  setOnAttributionChangedListener: MetrixUtil.setOnAttributionChangedListener,
};
