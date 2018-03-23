import React, { PureComponent } from 'react';
import { View, Text, WebView } from 'react-native';
import PropTypes from 'prop-types';

import webPlayer from './webPlayer';

export default class WistiaPlayer extends PureComponent {
  static propTypes = {
    videoId: PropTypes.any,
  }

  render() {
    return (
      <View>
        <Text>this should be a video</Text>
        {/* <WebView
          source={{html: webPlayer(this.props.videoId), baseUrl: 'https://wistia.com' }}
          style={{marginTop: 20, height: 300, width: 300 }}
        /> */}
        <WebView
          source={{html: 'arigatou gozaimazu!!!', baseUrl: 'https://wistia.com' }}
          style={{marginTop: 20, height: 300, width: 300 }}
        />
      </View>
    );
  }
}