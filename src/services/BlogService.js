
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getPosts() {
    return axios.get(`${API_BASE_URL}/posts`);
  },
};
