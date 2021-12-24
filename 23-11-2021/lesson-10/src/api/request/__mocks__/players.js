
export const playersApi = {
  sendPlayers: jest.fn(async (...rest) => {
    console.log('fake sendPlayer')
    return new Promise((resolve) => {
      setTimeout(resolve(jest.fn(...rest)), 500);
    })
  })
}
