(() => {
  const carBrands = [
    'BMW',
    'Maserati',
    'Mercedes Benz',
    'Ferrari',
    'Toyota',
    'Honda',
    'Hyundai'
  ];
  const inputElem = document.querySelector('.search')
  function clearResults() {
    const ulElem = document.querySelector('.results')
    if(ulElem){
      document.body.removeChild(ulElem)
    }
  }
  function selectCarBrand(event) {
    const carBrand = event.target.inputText
    inputElem.value = carBrand
    clearResults()
  }
  function onInput(event) {
    clearResults()
    const inputText = event.target.value.toLowerCase()
    const matchCarBrands = carBrands.filter(item => {
      return item.toLowerCase().startsWith(inputText)
    })

    const ulElement = document.createElement('ul')
    ulElement.classList.add('results')

    matchCarBrands.map(item => {  
      const liElement = document.createElement('li')
      liElement.innerHTML = item
      liElement.onclick = selectCarBrand
      ulElement.appendChild(liElement)
    }) 
    document.body.appendChild(ulElement)
  }
  function run() {
    inputElem.addEventListener('input', onInput)
    document.addEventListener('click', clearResults)
  }
  run()
})();
