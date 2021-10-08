
const delay = () => new Promise((resolve) => {

  setTimeout(() => resolve({
    status: true,
  }), 2000);

})


export const messagesApi = {
  addMessage: delay,
  removeMessage: delay,
}
