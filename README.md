# React Native Wistia Player

> Wistia video player component for React Native

## Introduction

React Native Wistia Player is a WebView wrapper component on wistia player. This component make use of common video player use-cases such as playing, pausing, modifying callback speed, etc.

## Installation

```bash
npm install react-native-wistia-player --save
```

## Usage

```javascript
import React from 'react';
import WistiaPlayer from 'react-native-wistia-player';

const MyComponent = (
  <WistiaPlayer
    videoId={YOUR_WISTIA_VIDEO_ID}
  />
);

```

## Props

| Prop      | Required | Description                                |
|-----------|----------|--------------------------------------------|
| videoId   | YES      | set which video to play                    |
| style     | NO       | add additional style to WebView player     |
| onMessage | NO       | function to handle onMessage WebView event |

## Methods

### Method Definition

- **togglePlaying()**
  toggle the play/pause state of the video.

- **setPlaybackSpeed(speed: Number)**
  sets the playback speed of the video. Defaults to 1.

### Using Methods

You need to use reference (ref) to the player and call the method from it.

```javascript
import React from 'react';
import WistiaPlayer from 'react-native-wistia-player';

export default class MyComponent extends React.Component {
  aFunction() {
    this.player.WISTIA_PLAYER_METHOD()
  }

  render() {
    return (
      <WistiaPlayer
        ref={(wistiaPlayer) => this.player = wistiaPlayer}
        videoId={YOUR_WISTIA_VIDEO_ID}
      />
    );
  }
}
```

## License

MIT