import axios from 'axios';

const KEY = "AIzaSyCoG1Mx3LBYxKKyoC2T6hBaGbUduFb0jGg";

export const baseParams = {
  part: 'snippet',
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
