import {getUsersPath, getUserByIdPath, getPaginationParams} from "../endpoints";

const execute = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('any error')
  }

  return response.json()
}

const execute2 = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('any error')
    }

    const result = await response.json();

    return [undefined, result];
  } catch (e) {
    return [e, undefined];
  }
}

export const api = {
  getUsers: async (page, per_page) => execute(
    getPaginationParams(page, per_page)(getUsersPath())
  ),
  getUsers2: async (page, per_page) => execute2(
    getPaginationParams(page, per_page)(getUsersPath())
  ),
  getUserById: (userId) => execute((getUserByIdPath(userId))),
}
