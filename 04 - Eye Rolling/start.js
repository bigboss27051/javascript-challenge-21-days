
(() => {
  // เริ่มเขียนโค้ด
  function run() {
    const bodyElement = document.querySelector('body')
    const eyeElems = document.querySelectorAll('.eye');
    function onMouseMove({ pageX, pageY }) {
      eyeElems.forEach(eyeElem => {
        const { left, top } = eyeElem.getBoundingClientRect()
        const eyeCenterX = left + eyeElem.offsetWidth / 2
        const eyeCenterY = top + eyeElem.offsetWidth / 2
        const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY)
        const angle = radian * 180 / Math.PI * -1
        eyeElem.style.transform = `rotate(${angle}deg)`
      })
    }
    bodyElement.addEventListener('mousemove', onMouseMove)
  }
  run()
})();
