import axios from 'axios';
const IS_TEST = false

const baseURL = IS_TEST ? 'DEV_API' : 'https://www.loftus.com'

export const http = axios.create({
  baseURL
});
