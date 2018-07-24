document.addEventListener('DOMContentLoaded', function () {
  let div = document.createElement('div')
  div.style.background = 'rgba(255,229,100)'
  div.style.textAlign = 'center'
  div.style.color = 'black'
  div.style.fontSize = '20px'
  div.style.lineHeight = '2em'
  div.innerHTML = 'The CORS proxy is fully operational again, thanks to Clever Cloud! <a style="color: blue; display: inline; text-decoration: underline" href="/blog/2018/07/23/isomorphic-git-dot-org-corporate-sponsors-and-a-new-CORS-proxy">Read More</a>'
  let parent = document.getElementsByClassName('navPusher')[0]
  parent.insertBefore(div, parent.firstChild)
})