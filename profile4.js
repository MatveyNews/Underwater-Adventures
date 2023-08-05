var dialog = document.querySelector('dialog')

document.querySelector('#open').onclick = function () {
  dialog.showModal()
}

document.querySelector('#close').onclick = function () {
  dialog.close() 
}