const { S_IFREG } = require("constants");

(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // function simulateAsyncAPI(text, timeout) {
  //   setTimeout(() => {
  //     console.log(text)
  //   }, timeout);
  // }
  // simulateAsyncAPI('A', 100)
  // simulateAsyncAPI('b', 500)
  // simulateAsyncAPI('c', 100)
  // 2. Callback
  // function simulateAsyncAPI(text, timeout, callback) {
  //   setTimeout(() => {
  //     console.log(text)
  //     if (callback) {
  //       callback()
  //     }

  //   }, timeout);
  // }
  // simulateAsyncAPI('A Callback', 100, () => simulateAsyncAPI('b', 500, () => simulateAsyncAPI('c', 500)))
  // 3. Promise
  // function simulateAsyncAPI(text, timeout) {
  //   return new Promise((resolve, reject) => {
  // if ('B' === text) {
  //   return reject('B got rejected.')
  // }
  //     setTimeout(() => {
  //       console.log(text)
  //       resolve()
  //     }, timeout);
  //   })

  // }
  // simulateAsyncAPI('A', 1000)
  //   .then(() => {
  //     return simulateAsyncAPI('B', 500)
  //       .then(() => {
  //         return simulateAsyncAPI('C', 100)
  //       })
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // 4. Async/Await
  function simulateAsyncAPI(text, timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ('B' === text) {
          return reject('B got rejected.')
        }
        console.log(text)
        resolve()
      }, timeout);
    })
  }
  async function run() {
    try {
      await simulateAsyncAPI('A', 1000)
      // await simulateAsyncAPI('B', 500)
      await simulateAsyncAPI('C', 100)
    } catch (error) {
      console.log(error)
    }
  }
  run()
})();
