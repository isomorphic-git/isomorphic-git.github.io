document.addEventListener('DOMContentLoaded', function () {
  let div = document.createElement('div')
  div.style.background = 'rgba(255,229,100)'
  div.style.textAlign = 'center'
  div.style.color = 'black'
  div.style.fontSize = '20px'
  div.style.lineHeight = '2em'
  div.innerHTML = ''
  let parent = document.getElementsByClassName('navPusher')[0]
  parent.insertBefore(div, parent.firstChild)
})