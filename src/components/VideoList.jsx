import React from 'react';
import VideoItem from './VideoItem';
import styles from 'styled-components';

const VideosList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, idx) => {
    return <VideoItem key={idx} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <VideoRenderList>{renderedList}</VideoRenderList>;
};

export default VideosList;

const VideoRenderList = styles.div`
width: 700px;
height: 900px;
background: #696969;
margin: 15px 0;
overflow: auto;
`;
