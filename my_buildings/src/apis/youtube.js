import React from 'react';
import searchYouTube from "youtube-api-search";

const Youtube = () => {
    const API_KEY = "AIzaSyDxXx_Y9ftFm-lv0hel3WI0NMFqJTES89g";
    searchYouTube(
      { key: API_KEY, term: this.state.term, maxResults: 6 },
      videos => {
        console.log(videos);
      }
    );
}


export default Youtube;