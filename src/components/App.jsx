import React, { Component } from 'react';

import api from '../api';
import SearchBar from './SearchBar';
import VideoBlock from './VideoBlock';

const KEY = 'AIzaSyDrMTlL_mm8IF37Ao8CyEkCce7eQmFP44E';
const searchURL = `?part=snippet&key=${KEY}`;

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  onTermSubmit = async term => {
    const response = await api.get(`${searchURL}`, {
      params: {
        q: term,
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
      <div className="app ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoBlock appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
