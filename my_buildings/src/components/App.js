import React from 'react';
import SearchBar from './SearchBar';
import youtube, { baseParams } from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        ...baseParams,
        q: term
      }
    });
    this.setState({videos: response.data.items})
  };

  onVideoSelect = (video) => {
    console.log('From the App!', video);
  };

  render() {
      return (
        <div className="ui container" style={{marginTop: '15px'}}>
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>
      );
  }
}

export default App;