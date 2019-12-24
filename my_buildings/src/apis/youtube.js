import axios from 'axios';

const KEY = "AIzaSyDxXx_Y9ftFm-lv0hel3WI0NMFqJTES89g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
