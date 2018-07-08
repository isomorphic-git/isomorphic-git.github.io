document.addEventListener('DOMContentLoaded', function () {
  let div = document.createElement('div')
  div.style.background = 'rgba(255,229,100)'
  div.style.textAlign = 'center'
  div.style.color = 'black'
  div.style.fontSize = '20px'
  div.style.lineHeight = '2em'
  div.innerHTML = 'The CORS proxy has been temporarily suspended due to excessive bandwidth usage. The online demos will not work as a result. <a style="color: blue; display: inline; text-decoration: underline" href="/blog/2019/07/05/cors-proxy-disabled.html">Read More</a>'
  let parent = document.getElementsByClassName('navPusher')[0]
  parent.insertBefore(div, parent.firstChild)
})