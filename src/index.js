import React, { PureComponent } from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

import webPlayer from './webPlayer';

export default class WistiaPlayer extends PureComponent {
  static propTypes = {
    videoId: PropTypes.any,
  }

  render() {
    return (
      <WebView
        source={{html: webPlayer(this.props.videoId) }}
        style={{marginTop: 20}}
      />
    );
  }
}