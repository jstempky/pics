import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID fd0e02e1d9e8f6a69c98a45b86b19a6440380e7241edff6815ecaa611ddc4157'
  }
});
