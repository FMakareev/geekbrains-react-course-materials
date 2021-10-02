
export const playersApi = {
  sendPlayers: jest.fn(async (...rest) => {
    return new Promise((resolve) => {
      setTimeout(resolve(jest.fn(...rest)), 500);
    })
  })
}