
export const playersApi = {
  sendPlayers: async () => {
    console.log('origin sendPlayer')
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    })
  }
}
