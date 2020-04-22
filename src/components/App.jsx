import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoBlock from './VideoBlock';
import api from '../api';
import styles from 'styled-components';

const KEY = 'AIzaSyDrMTlL_mm8IF37Ao8CyEkCce7eQmFP44E';
const searchURL = `?part=snippet&key=${KEY}`;

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('react js');
  }

  onTermSubmit = async term => {
    const response = await api.get(`${searchURL}`, {
      params: {
        q: term,
        maxResults: 10,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    return (
      <AppContainer>
        {/* <Header /> */}
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoBlock appState={this.state} onVideoSelect={this.onVideoSelect} />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styles.div` 
  background-color: #000000;
`;
