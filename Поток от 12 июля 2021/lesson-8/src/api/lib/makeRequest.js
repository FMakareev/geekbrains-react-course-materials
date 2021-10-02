import {API_ENDPOINT} from "../endpoints";


export const makeRequest = (url, config) => fetch(
  [
    API_ENDPOINT,
    url,
  ].join(''), config).then((response) => response.json())