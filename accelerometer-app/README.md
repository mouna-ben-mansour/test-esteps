
  <h1 align="center">Accelerometer Ionic app</h1>


## Description

This is a simple Ionic application that reports accelerometer data, written in ionic, angular, typescript
#### Features
1- Display real-time accelerometer data (x, y, z axis) on the screen.

2- Send accelerometer data to backend.

## Installation

1- Clone this repository to your local machine:
```bash
$ git clone https://github.com/yourusername/accelerometer-app.git

```
2- Navigate to the project directory:

```bash
$ cd accelerometer-app
```
3- Install dependencies:
```bash
$ npm install
```

4- Add the platform you want to run the app on (e.g., Android):
```bash
$ ionic capacitor add android
```

## Usage
1- Start the Ionic development server:
```bash
$ ionic serve
```
2- Run the app on your Android device or emulator:
```bash
$ ionic capacitor run android
```
## Test on real device via apk
1- Build apk
```bash
# after
$ ionic capacitor add android 

# use this cmd to build an apk
$ ionic capacitor copy android && cd android && ./gradlew assembleDebug && cd ..
```
2- Then your apk will be at:
```bash
 android/app/build/outputs/apk/debug/app-debug.apk
```
3- Download and install it in your phone to test.
