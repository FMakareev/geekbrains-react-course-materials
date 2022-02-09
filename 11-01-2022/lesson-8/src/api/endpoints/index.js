import {stringifyUrl} from 'query-string'

export const getAPIEndpoint = () => 'https://reqres.in/api';

export const getUsersPath = () => [getAPIEndpoint(), 'users'].join('/');

export const getUserByIdPath = (id) => [getUsersPath(), id].join('/');

export const getPaginationParams = (page = 1, per_page = 6) => (url) => stringifyUrl({
  url,
  query: {
    page,
    per_page
  }
})

