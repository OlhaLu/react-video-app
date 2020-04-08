import axios from 'axios';

const KEY = 'AIzaSyDrMTlL_mm8IF37Ao8CyEkCce7eQmFP44E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
