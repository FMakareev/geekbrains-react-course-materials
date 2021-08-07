import {makeRequest} from "./makeRequest";

export const attempt = async (url, config) => {
  try {
    const result = await makeRequest(url, config);

    return [null, result];
  } catch (e) {
    console.warn(e);
    return [e,null];
  }
}