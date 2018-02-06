# react-native-loader

Loader component like in youtube for React Native.

## Installing and Usage

```
// Installing from npm
npm install rn-loader

// Usage
<Loader loading={this.state.showLoader} />
```

## DEMO

**Expo:** https://exp.host/@jpuri/rn-loader-playground

### IOS

![](http://i.imgur.com/3wXsOIo.gif)

### ANDROID

![](http://i.imgur.com/YXyK4rb.gif)

## Properties

| S.No. | Property              | Values                     | Description                                                                                                                                           |
| ----- | --------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | loading               | true, false, default false | Loader is visible if value of loading is true                                                                                                         |
| 2     | color                 | string, default red        | Color of the loader                                                                                                                                   |
| 3     | topMargin             | number, default undefined  | Margin of Loader from the top. If defined it will override iosBelowStatusBar, androidBelowStatusBar properties and default positioning of the loader. |
| 3     | iosBelowStatusBar     | true, false, default false | If true loader is positioned below status bar on IOS device                                                                                           |
| 4     | androidBelowStatusBar | true, false, default true  | If true loader is positioned below status bar on android device                                                                                       |

## LICENSE

MIT
