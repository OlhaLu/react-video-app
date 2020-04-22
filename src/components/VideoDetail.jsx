import React from 'react';
import styles from 'styled-components';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  const { description, title } = selectedVideo.snippet;

  return (
    <div>
      <DetailsVideoSrc>
        <VideoSrcIframe title={title} src={videoSrc} frameBorder="0" />
        <DetailsHeader>{title}</DetailsHeader>
        <DetailsDescriptions>{description}</DetailsDescriptions>
      </DetailsVideoSrc>
    </div>
  );
};

export default VideoDetail;

const DetailsVideoSrc = styles.div`
margin: 50px 15px;
padding: 25px;
max-width: 900px;
color: #F5FFFA;
`;

const VideoSrcIframe = styles.iframe`
width: 800px;
height: 500px;
`;

const DetailsHeader = styles.h4`
color: #40E0D0;
font-size: 22px;
`;

const DetailsDescriptions = styles.p`
font-size: 18px;
`;
