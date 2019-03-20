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


@end


