import React, { Component } from 'react';
import VideoDetail from './VideoDetail';
import VideosList from './VideoList';
import styles from 'styled-components';

class VideoBlock extends Component {
  render() {
    return (
      <VideoBlockContainer>
        <VideoDetailBlock>
          <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
        </VideoDetailBlock>
        <VideosListBlock>
          <VideosList
            videos={this.props.appState.videos}
            onVideoSelect={this.props.onVideoSelect}
          />
        </VideosListBlock>
      </VideoBlockContainer>
    );
  }
}

export default VideoBlock;

const VideoBlockContainer = styles.div``;

const VideoDetailBlock = styles.div`
`;

const VideosListBlock = styles.div`
`;
