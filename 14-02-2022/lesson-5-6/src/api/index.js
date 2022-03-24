
export const wait = (time) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(true);
    }, time);

  })
}
