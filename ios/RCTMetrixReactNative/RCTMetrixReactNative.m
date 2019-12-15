//
//  RCTMetrixReactNative.m
//  RCTMetrixReactNative
//
//  Created by Milad Heydari on 3/20/19.
//  Copyright © 2019 Metrix org. All rights reserved.
//

#import "RCTMetrixReactNative.h"

@implementation RCTMetrixReactNative

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onAttributionChangeListener",@"onReceiveUserIdListener"];
}
RCT_EXPORT_METHOD(onCreate : (NSDictionary *)metrixDict) {
    
    MXConfig *metrixConfig = [MXConfig configWithAppId:metrixDict[@"appId"]
                                           environment:MXEnvironmentProduction];

    [metrixConfig setDelegate:self];
    [Metrix appDidLaunch:metrixConfig];
}

RCT_EXPORT_METHOD(initialize : (NSString *)appId) {
    
    MXConfig *metrixConfig = [MXConfig configWithAppId:appId
                                           environment:MXEnvironmentProduction];
    [Metrix appDidLaunch:metrixConfig];
}


- (void)metrixSessionTrackingSucceeded:(MXSessionSuccess *)sessionSuccessResponseData {
     [self sendEventWithName:@"onReceiveUserIdListener" body:[sessionSuccessResponseData mxid]];
}


- (void)metrixAttributionChanged:(MXAttribution *)attribution {
    
     [self sendEventWithName:@"onAttributionChangeListener" body:[attribution dictionary]];
}




RCT_EXPORT_METHOD(newEventCustom : (NSString *)slug  attributes:(NSDictionary *)myAttributes metrics:(NSDictionary *)myMetrics) {
    
    MXCustomEvent *event = [MXCustomEvent newEvent:slug attributes:myAttributes metrics:myMetrics];
    [Metrix trackCustomEvent:event];
}


RCT_EXPORT_METHOD(newEvent : (NSString *)slug) {
    
    [self newEventCustom:slug attributes:nil metrics:nil];
}

RCT_EXPORT_METHOD(trackRevenue : (NSString *)slug  withValue:(NSNumber *)value currency:(NSString *)currency orderId:(NSString *)orderId) {
    
    MXCurrency cur = IRR;
    
    if ([currency isEqualToString: @"IRR"]) {
        cur = IRR;
    } else if([currency isEqualToString: @"USD"]) {
        cur = USD;
    }else if([currency isEqualToString: @"EUR"]) {
        cur = EUR;
    }
    
    [Metrix trackRevenue:slug withValue:value currency:cur orderId:orderId];
    
  }

@end
