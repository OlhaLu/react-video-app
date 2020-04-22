import React from 'react';
import styles from 'styled-components';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <ItemBlock onClick={() => onVideoSelect(video)}>
      <ItemImg
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <ItemContent>
        <ItemHeader>{video.snippet.title}</ItemHeader>
      </ItemContent>
    </ItemBlock>
  );
};

export default VideoItem;

const ItemBlock = styles.div`
cursor: pointer;

&:hover {
  background-color: #ADD8E6;
}
`;

const ItemImg = styles.img`
max-width: 300px;
`;

const ItemContent = styles.div`
padding: 20px;
`;

const ItemHeader = styles.div`
  text-align: center;
  font-size: 16px;
`;
