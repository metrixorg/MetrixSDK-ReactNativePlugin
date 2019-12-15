//
//  RCTMetrixReactNative.h
//  RCTMetrixReactNative
//
//  Created by Milad Heydari on 3/20/19.
//  Copyright © 2019 Metrix org. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <MetrixSdk/Metrix.h>
#import <MetrixSdk/MXCurrency.h>
#import <MetrixSdk/MXCustomEvent.h>
#import <React/RCTConvert.h>
#import <React/RCTEventEmitter.h>

@interface RCTMetrixReactNative : RCTEventEmitter <RCTBridgeModule>

@end
