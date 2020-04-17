import React, { Component } from 'react';
import VideoDetail from './VideoDetail';
import VideosList from './VideoList';
import styles from 'styled-components';

class VideoBlock extends Component {
  render() {
    return (
      <div>
        <div>
          <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
        </div>
        <div>
          <VideosList
            videos={this.props.appState.videos}
            onVideoSelect={this.props.onVideoSelect}
          />
        </div>
      </div>
    );
  }
}

export default VideoBlock;
