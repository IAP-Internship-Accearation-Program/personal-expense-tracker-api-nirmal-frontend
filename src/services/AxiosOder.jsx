import axios from "axios";

// const token = localStorage.getItem('loig');

const instance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 1000,
    // headers: {Authorization: `Bearer ${token}`}
  });
  export default instance;