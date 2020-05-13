import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';

import webPlayer from './webPlayer';

export default class WistiaPlayer extends PureComponent {
  state = {
    isLoading: true,
    isPlaying: false,
  }
  
  static propTypes = {
    videoId: PropTypes.any,
  }

  togglePlaying = (command) => {
    this.webview.postMessage(command);
  }

  setPlaybackSpeed = (speed) => {
    this.webview.postMessage(`speed:${speed}`);
  }

  render() {
    return (
      <WebView
        ref={webview => { this.webview = webview; }}
        style={{ flex: 1, ...this.props.style }}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        builtInZoomControls={false}
        allowsInlineMediaPlayback={true}
        scalesPageToFit={false}
        scrollEnabled={false}
        bounces={false}
        onMessage={this.props.onMessage}
        source={{
          html: webPlayer(this.props.videoId),
          baseUrl: 'https://wistia.com',
        }}
      />
    );
  }
}
