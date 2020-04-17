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
        <iframe title={description} src={videoSrc} frameBorder="0" />
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
margin-top: 10px;
padding: 10px;
border: 1px solid #ddd;
border-radius: 4px;
`;

const Details = styles.div`
font-size: 14px;
`;

const DetailsHeader = styles.h4`
font-size: 16px;
`;
