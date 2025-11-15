(() => {
  'use strict'

  document.querySelector('#offcanvasNavbarDark').addEventListener('click', () => {
    document.querySelector('.offcanvas-collapse').classList.toggle('open')
  })
})()
