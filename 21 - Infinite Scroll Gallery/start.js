(() => {
  const key = '3b7TbAQZPGFOeT09odxwhOOwu4ZVGlJQqK7VvnBjy50'
  let page = 1
  // เริ่มเขียนโค้ด
  const loaderElem = document.querySelector('.loader')

  function showLoader() {
    loaderElem.classList.add('visible')
  }
  function hideLoader() {
    loaderElem.classList.remove('visible')
  }
  async function displayImages() {
    showLoader()
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${key}&page=${page}`)
    const images = await result.json()

    const galleryElem = document.querySelector('.gallery')

    images.forEach(image => {
      const imgElem = document.createElement('img')
      imgElem.src = image.urls.small
      galleryElem.appendChild(imgElem)
    });
    
    hideLoader()
    page += 1
  }
  function onScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      displayImages()
    }
  }
  function run() {
    displayImages()
    document.addEventListener('scroll', onScroll)
  }
  run()
})();
