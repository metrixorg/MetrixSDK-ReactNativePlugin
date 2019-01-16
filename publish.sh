#!/usr/bin/env bash

VERSION_NAME="0.0.3"
VERSION_CODE=3
sed -i '' 's/\"version\".*/\"version\" :\"'"${VERSION_NAME}"'\",/' package.json &
sed -i '' 's/Metrix.initialize.*/Metrix.initialize(appKey, \"'"${VERSION_NAME}"'\");/' ./src/metrix-util.js &
sed -i '' 's/versionCode.*/versionCode '"${VERSION_CODE}"'/' ./android/build.gradle &
sed -i '' 's/versionName.*/versionName \"'"${VERSION_NAME}"'\"/' ./android/build.gradle &
git add --all &
git commit -m "v${VERSION_NAME}" &
git push origin master -f &
git tag v${VERSION_NAME} &
git push origin v${VERSION_NAME} &
npm publish