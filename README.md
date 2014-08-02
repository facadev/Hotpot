Yeoman Ionic AngularJS PhoneGap Seed
==================================

## What is this repository

This repository is a simple seed to get started on a new mobile project using Yeoman, Ionic, AngularJS and PhoneGap. The content is discuted in the blog post at http://blog.mncc.fr/2014/02/10/quickly-start-app-with-yeoman-ionic-angular-and-phonegap/.

## How to use it

- `git clone https://github.com/MNCC/yeoman-ionic-angular-phonegap-seed`
- `cd yeoman-ionic-angular-phonegap-seed`
- `npm install`
- `bower install`
- `mkdir platforms`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-network-information.git`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-battery-status.git`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-dialogs.git`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-vibration.git`
- `phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git`

- `grunt && phonegap local run ios` and/or `grunt && phonegap local build android`
