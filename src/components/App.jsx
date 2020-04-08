import React, { Component } from 'react';

import api from '../api';
import SearchBar from './SearchBar';
import VideoModule from './VideoModule';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  onTermSubmit = async term => {
    const response = await api.get('/search', {
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
        <VideoModule appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
