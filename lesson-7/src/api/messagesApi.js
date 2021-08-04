
const delay = () => new Promise((resolve) => {

  setTimeout(() => resolve({
    status: true,
  }), 1000);
})


export const messagesApi = {
  addMessage: async () => {
    try {
      const result = await delay();
      return [null, result];
    } catch (e) {
      console.error(e);
      return [e, null];
    }
  }
}