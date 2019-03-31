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

RCT_EXPORT_METHOD(initialize : (NSString *)appKey) {
    
    MXConfig *metrixConfig = [MXConfig configWithAppId:appKey
                                           environment:MXEnvironmentProduction];
    
    [Metrix appDidLaunch:metrixConfig];
}

RCT_EXPORT_METHOD(newEventCustom : (NSString *)slug  attributes:(NSDictionary *)myAttributes metrics:(NSDictionary *)myMetrics) {
    
    MXCustomEvent *event = [MXCustomEvent newEvent:slug attributes:myAttributes metrics:myMetrics];
    [Metrix trackCustomEvent:event];
}


RCT_EXPORT_METHOD(newEvent : (NSString *)slug) {
    
    [self newEventCustom:slug attributes:nil metrics:nil];
}


@end


