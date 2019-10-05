let Metrix = require("react-native").NativeModules.MetrixReactNative;
import { Platform } from "react-native";

if (Platform.OS === "android") {
  module.exports = {
    initialize: function(appKey) {
      Metrix.initialize(appKey, "0.12.0");
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
    setAppSecret: function(secretId, info1, info2, info3, info4) {
      Metrix.setAppSecret(secretId, info1, info2, info3, info4);
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
    setScreenFlowsAutoFill: function(screenFlowsAutoSend) {
      Metrix.setScreenFlowsAutoFill(screenFlowsAutoSend);
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
    setUserMetrics: function(userMetrics) {
      Metrix.addUserMetrics(userMetrics);
    },

    setOnAttributionChangedListener: function(callback) {
      Metrix.setOnAttributionChangedListener(callback);
    },

    onCreate: function(metrixConfig) {
      Metrix.onCreate(
        metrixConfig,
        metrixConfig.shouldLunchDeeplink,
        metrixConfig.onAttributionChangeListener
          ? metrixConfig.onAttributionChangeListener
          : function(e) {},
        metrixConfig.onDeeplinkResponseListener
          ? metrixConfig.onDeeplinkResponseListener
          : function(e) {},
        metrixConfig.onReceiveUserIdListener
          ? metrixConfig.onReceiveUserIdListener
          : function(e) {},
        metrixConfig.onSessionIdListener
          ? metrixConfig.onSessionIdListener
          : function(e) {}
      );
    },
    appWillOpenUrl: function(uri) {
      Metrix.appWillOpenUrl(uri);
    },
    newEvent: function(eventName, customAttributes, customMetrics) {
      if (customAttributes && customMetrics) {
        Metrix.newEventCustom(eventName, customAttributes, customMetrics);
      } else {
        Metrix.newEvent(eventName);
      }
    },
    newRevenue: function(slug, revenue, currency, orderId) {
      let cr = null;
      if (currency === 0) {
        cr = "IRR";
      } else if (currency === 1) {
        cr = "USD";
      } else if (currency == 2) {
        cr = "EUR";
      }
      if (cr == null && orderId == null) {
        Metrix.newRevenueSimple(slug, revenue);
      } else if (cr == null && orderId != null) {
        Metrix.newRevenueOrderId(slug, revenue, orderId);
      } else if (orderId == null) {
        Metrix.newRevenueCurrency(slug, revenue, cr);
      } else {
        Metrix.newRevenueFull(slug, revenue, cr, orderId);
      }
    },
    screenDisplayed: function(screenName) {
      Metrix.screenDisplayed(screenName);
    },

    addUserMetrics: function(userMetrics) {
      Metrix.addUserMetrics(userMetrics);
    },
    addUserAttributes: function(userAttributes) {
      Metrix.addUserAttributes(userAttributes);
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
        Metrix.newEventCustom(eventName, customAttributes, customMetrics);
      } else {
        Metrix.newEvent(eventName);
      }
    },
    newRevenue: function(slug, revenue, currency, orderId) {
      let cr = null;
      if (currency === 0) {
        cr = "IRR";
      } else if (currency === 1) {
        cr = "USD";
      } else if (currency == 2) {
        cr = "EUR";
      }
      Metrix.trackRevenue(slug, revenue, cr, orderId);
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
    setUserMetrics: function(userMetrics) {
      // Metrix.setUserMetrics(userMetrics);
    },
    addUserAttributes: function(userAttributes) {
      // Metrix.addUserAttributes(userAttributes);
    },
    setOnAttributionChangedListener: function(callback) {
      // Metrix.setOnAttributionChangedListener(callback);
    }
  };
}
