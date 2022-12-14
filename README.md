# 👩‍💻 WebdriverIO & Appium & Cucumber
# Test automation project for testing native E- commerce mobile app
## Getting started

> Before you follow the steps below, make sure you have the
[Node.js](https://nodejs.org/en/download/) installed _globally_ only your system
>
[Android Studio](https://developer.android.com/studio)

[Appium Server](https://appium.io/)

[Appium Inspector](https://github.com/appium/appium-inspector)

Install all the necessary dependency using npm :

```
npm install
```

Then you have to configure android emulator or real devices should be connected.
After that change the following capabilities in wdio-android.conf.ts file with your emulator/device:
```
capabilities: [
        {
            "appium:avd": "Your avd device\emulator name",
            "appium:deviceName": "Your device\emulator name",
            "appium:platformVersion": "device\emulator os version",
        },
    ],
```

To run tests use npm command:
```
npm run wdioAndroid
```