
(() => {
  // เริ่มเขียนโค้ด
  let dragElem;
  function onDragStart() {
    dragElem = this
  }
  function onDrop() {
    this.append(dragElem)
    dragElem = null
  }
  function onDragOver(event) {
    event.preventDefault()
  }
  function onDragEnter(event) {
    event.preventDefault()
  }
  function run() {

    const taskElems = Array.from(document.querySelectorAll('.task'))
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'))
    taskElems.forEach(taskElem => {
      taskElem.addEventListener('dragstart', onDragStart)
    })
    dropZoneElems.forEach(dropzoneElem => {
      dropzoneElem.addEventListener('drop', onDrop)
      dropzoneElem.addEventListener('dragover', onDragOver)
      dropzoneElem.addEventListener('dragenter', onDragEnter)
    })

  }
  run()
})();
