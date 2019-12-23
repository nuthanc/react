import React from 'react';
import searchYouTube from 'youtube-api-search';
class SearchBar extends React.Component {
    state = {searchTerm: ""}

    onSearchSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.searchTerm);
      const API_KEY = 'AIzaSyDxXx_Y9ftFm-lv0hel3WI0NMFqJTES89g';
      searchYouTube({ key: API_KEY, term: this.state.searchTerm, maxResults: 6 }, videos => {
        console.log(videos);
      });
    }

    render(){
        return (
          <form onSubmit={this.onSearchSubmit}  className="ui form">
            <div className="field">
              <input type="text" value={this.state.searchTerm} onChange={(e) => this.setState({searchTerm: e.target.value})}/>
            </div>
          </form>
        );
    }
}

export default SearchBar;