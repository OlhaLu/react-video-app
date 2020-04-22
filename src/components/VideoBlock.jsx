import React, { Component } from 'react';
import VideoDetail from './VideoDetail';
import VideosList from './VideoList';
import styles from 'styled-components';

class VideoBlock extends Component {
  render() {
    return (
      <VideoBlockContainer>
        <div>
          <VideoDetail selectedVideo={this.props.appState.selectedVideo} />
        </div>
        <div>
          <VideosList
            videos={this.props.appState.videos}
            onVideoSelect={this.props.onVideoSelect}
          />
        </div>
      </VideoBlockContainer>
    );
  }
}

export default VideoBlock;

const VideoBlockContainer = styles.div`
margin: 0 auto;
width: 1600px;
display: flex
`;
