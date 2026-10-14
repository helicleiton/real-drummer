# Omnibeats for Android

This Android app packages the existing sequencer as a local WebView app. The HTML and CC0 drum samples are bundled in `app/src/main/assets/www`, served through `WebViewAssetLoader` on an HTTPS app origin so Web Audio and local sample fetches work without `file://` access.

## Requirements

- Android Studio with Android SDK Platform 35
- JDK 17
- Android Gradle Plugin 8.7.3 (downloaded by Gradle on first sync)

## Build

Open this `android` folder in Android Studio, allow Gradle sync to finish, then run the `app` configuration on an Android device or emulator. To build an APK, use **Build > Build Bundle(s) / APK(s) > Build APK(s)**. The APK is written to `app/build/outputs/apk/debug/app-debug.apk`.

The wrapper has no runtime server or internet dependency. The Web Audio drum voices, CC0 WAVs (including the velocity-layered Studio Pro kit) and compiled Tailwind CSS are local. Users may import their own licensed WAV/MP3/OGG one-shots per channel; those files are kept in that app installation's IndexedDB and are not bundled in the APK.

## Updating web assets

After editing the root `index.html` or `samples/`, copy the updated files into `app/src/main/assets/www/` before building the APK. Rebuild the local Tailwind stylesheet with `npm install` and `npm run build:css` after changing HTML utility classes.

Sample source and license details are in `app/src/main/assets/www/samples/README.md` and `LICENSE`.