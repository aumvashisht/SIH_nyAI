import axios from "axios";

const baseURL = "https://nyai-jr54.onrender.com";

const instance = axios.create({
  // .. congigure axios baseURL
  baseURL: `${baseURL}`
});

export default instance;