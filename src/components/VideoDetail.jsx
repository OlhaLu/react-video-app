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
        <VideoSrcIframe title={description} src={videoSrc} frameBorder="0" />
      </DetailsVideoSrc>
      <Details>
        <DetailsHeader>{title}</DetailsHeader>
        <p>{description}</p>
      </Details>
    </div>
  );
};

export default VideoDetail;

const DetailsVideoSrc = styles.div`
padding: 10px;
border: 1px solid #ddd;
border-radius: 4px;
max-width: 900px;
`;

const VideoSrcIframe = styles.iframe`
width: 800px;
height: 500px;
`;

const Details = styles.div`
font-size: 18px;
`;

const DetailsHeader = styles.h4`
font-size: 20px;
`;
