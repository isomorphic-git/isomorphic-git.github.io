/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')

class Footer extends React.Component {
  docUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc
  }

  pageUrl (doc, language) {
    const baseUrl = this.props.config.baseUrl
    return baseUrl + (language ? language + '/' : '') + doc
  }

  render () {
    const currentYear = new Date().getFullYear()
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon &&
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='66'
                height='58'
              />}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('quickstart.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('quickstart.html', this.props.language)}>
              Guide
            </a>
            <a href={this.docUrl('alphabetic.html', this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a href='https://gitter.im/isomorphic-git/Lobby'>Project Chat</a>
            <a
              className='github-button'
              href={this.props.config.repoUrl}
              data-icon='octicon-star'
              data-count-href='/isomorphic-git/isomorphic-git/stargazers'
              data-show-count
              data-count-aria-label='# stargazers on GitHub'
              aria-label='Star this project on GitHub'
            >
              Github
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.baseUrl + 'blog'}>Blog</a>
            <a href='https://docusaurus.io/en/'>Created with Docusaurus</a>
          </div>
        </section>
      </footer>
    )
  }
}

module.exports = Footer
