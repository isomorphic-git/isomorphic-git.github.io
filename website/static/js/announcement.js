document.addEventListener('DOMContentLoaded', function () {
  let div = document.createElement('div')
  div.style.background = 'rgba(255,229,100)'
  div.style.textAlign = 'center'
  div.style.color = 'black'
  div.style.fontSize = '20px'
  div.style.lineHeight = '2em'
  div.innerHTML = 'The CORS proxy has been re-enabled but only for isomorphic-git.github.io. <a style="color: blue; display: inline; text-decoration: underline" href="/blog/2019/07/08/cors-proxy-origin-limited.html">Read More</a>'
  let parent = document.getElementsByClassName('navPusher')[0]
  parent.insertBefore(div, parent.firstChild)
})