(() => {
  // เริ่มเขียนโค้ด
  function displayError(element, message) {
    const smallElem = element.parentElement.querySelector('small')
    smallElem.innerText = message
    element.classList.add('invalid')
    form.classList.add('invalid')
  }
  function displaySuccess() {
    document.body.innerHTML = ''
    const pElem = document.createElement('p')
    pElem.innerHTML = 'You have been logged in successfully'
    document.body.appendChild(pElem)
  }
  function resetState(element) {
    const smallElem = element.parentElement.querySelector('small')
    smallElem.innerText = ''
    element.classList.remove('invalid')
    form.classList.remove('invalid')
  }
  function validateLength(element, min, max) {
    const val = element.value
    if(val.length < min || val.length > max) {
      const elemName = element.getAttribute('name')
      displayError(element, `${elemName} length must be between ${min} and ${max}`)
    } 
  }
  function validateEmail(elem) {
    const regex = /\S+@\S+\.\S+/;
    if(!regex.test(elem.value)) {
      displayError(elem, 'Email must be valid.')
    }
  } 
  function onSubmit(event) {
    event.preventDefault()
    const emailElem = document.getElementById('email')
    const passwordElem = document.getElementById('password')
    resetState(emailElem)
    resetState(passwordElem)
    validateLength(emailElem, 10, 20)
    validateLength(passwordElem, 8, 20)
    validateEmail(emailElem)
    const isValidForm = !form.classList.contains('invalid')
    if(isValidForm) {
      displaySuccess()
    }
  }
  function run() {
    const formElem = document.querySelector('form')
    formElem.addEventListener('submit', onSubmit)
  }
  run()
})();
