require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name             = 'react-native-metrix'
  s.version          = package['version']
  s.summary          = package['description']

  s.homepage         = 'https://metrix.ir'
  s.license          = 'MIT'
  s.author           = { 'Mehdi Azimi' => 'azimi4002@gmail.com' }

  s.platform     = :ios, "8.0"
  s.source       = { :git => "https://github.com/metrixorg/MetrixSDK-ReactNativePlugin.git", :tag => s.version}
  s.source_files = 'ios/RCTMetrixReactNative/*.{h,m}'

  s.dependency 'React'
  s.dependency 'MetrixSdk-ReactNative', '1.2.0'
end
