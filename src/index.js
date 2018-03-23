import React, { PureComponent } from 'react';
import { View, Text, WebView } from 'react-native';
import PropTypes from 'prop-types';

import webPlayer from './webPlayer';

export default class WistiaPlayer extends PureComponent {
  state = {
    isLoading: true,
  }
  
  static propTypes = {
    videoId: PropTypes.any,
  }

  render() {
    return (
      <WebView
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        builtInZoomControls={false}
        allowsInlineMediaPlayback={true}
        scrollEnabled={false}
        bounces={false}
        source={{
          html: webPlayer(this.props.videoId),
          baseUrl: 'https://wistia.com',
        }}
      />
    );
  }
}