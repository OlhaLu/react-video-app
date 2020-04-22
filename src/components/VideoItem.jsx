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
border: 1px solid #ddd;
border-radius: 4px;
padding: 5px;

&:hover {
  background-color: #ADD8E6;
}
`;

const ItemImg = styles.img`
max-width: 200px;
`;

const ItemContent = styles.div`
padding: 5px;
`;

const ItemHeader = styles.div`
  font-size: 18px;
`;
