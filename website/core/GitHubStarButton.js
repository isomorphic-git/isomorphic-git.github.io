
const React = require('react')

const script = `
void async function() {
  console.log('a')
  const response = await fetch('https://api.github.com/repos/isomorphic-git/isomorphic-git', {
    headers: { accept: 'application/vnd.github.v3+json' }
  })
  const data = await response.json()
  document.querySelector('#gitHubStars').textContent = '(' + data.stargazers_count + ' stars)'
}()
`

class GitHubStarButton extends React.Component {
  render() {
    // "Server-side" rendered, so `componentDidMount` wouldn't be called
    return (
      <div>
        <a>GitHub <span id="gitHubStars" /></a>
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </div>
    );
  }
}

module.exports = GitHubStarButton
