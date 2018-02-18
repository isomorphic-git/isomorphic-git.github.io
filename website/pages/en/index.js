/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react')
const GoHistory = require('react-icons/lib/go/history')
const GoKey = require('react-icons/lib/go/key')
const GoLock = require('react-icons/lib/go/lock')
const GoSettings = require('react-icons/lib/go/settings')
const GoFileBinary = require('react-icons/lib/go/file-binary')
const GoDiffModified = require('react-icons/lib/go/diff-modified')
const GoGitBranch = require('react-icons/lib/go/git-branch')
const GoGitCommit = require('react-icons/lib/go/git-commit')
const GoRepo = require('react-icons/lib/go/repo')
const GoRepoClone = require('react-icons/lib/go/repo-clone')
const GoRepoPush = require('react-icons/lib/go/repo-push')
const GoRepoPull = require('react-icons/lib/go/repo-pull')

const CompLibrary = require('../../core/CompLibrary.js')
const MarkdownBlock = CompLibrary.MarkdownBlock /* Used to read markdown */
const Container = CompLibrary.Container
const GridBlock = CompLibrary.GridBlock

const siteConfig = require(process.cwd() + '/siteConfig.js')

function imgUrl (img) {
  return siteConfig.baseUrl + 'img/' + img
}

function docUrl (doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc
}

function pageUrl (page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page
}

class Button extends React.Component {
  render () {
    return (
      <div className='pluginWrapper buttonWrapper'>
        <a className='button' href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    )
  }
}

Button.defaultProps = {
  target: '_self'
}

const SplashContainer = props => (
  <div className='homeContainer'>
    <div className='homeSplashFade'>
      <div className='wrapper homeWrapper'>{props.children}</div>
    </div>
  </div>
)

const Logo = props => (
  <div className='projectLogo'>
    <img src={props.img_src} />
  </div>
)

const ProjectTitle = props => (
  <h2 className='projectTitle'>
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
)

const PromoSection = props => (
  <div className='section promoSection'>
    <div className='promoRow'>
      <div className='pluginRowBlock'>{props.children}</div>
    </div>
  </div>
)

class HomeSplash extends React.Component {
  render () {
    let language = this.props.language || ''
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('isomorphic-git-logo.svg')} />
        <div className='inner'>
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('browser.html', language)}>
              Getting Started
            </Button>
            <Button href={docUrl('init.html', language)}>
              Interactive Docs
            </Button>
            <Button href='https://github.com/isomorphic-git/isomorphic-git/releases'>Download</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    )
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}
  >
    <GridBlock align='center' contents={props.children} layout={props.layout} />
  </Container>
)

const Features = props => (
  <Block layout='fourColumn'>
    {[
      {
        content: 'Clone repos, create commits, push branches and more in client-side JS.',
        image: 'https://saucelabs.com/browser-matrix/_wmhilton.svg',
        imageAlign: 'top',
        title: 'Works In All Modern Browsers'
      },
      {
        content: 'It uses the same on-disk format as `git` so it works with existing repos.',
        image: imgUrl('nodejs-new-pantone-black.png'),
        imageAlign: 'top',
        title: 'Works on Desktops And Servers'
      }
    ]}
  </Block>
)

const FeatureCallout = props => (
  <div
    className='productShowcaseSection paddingBottom'
    style={{ textAlign: 'center' }}
  >
    <h2>Features</h2>
    <ul className="isomorphic-git-feature-list">
      <li><GoRepoClone size='3em'/> clone repos</li>
      <li><GoRepo size='3em'/> init new repos</li>
      <li><GoGitBranch size='3em'/> list branches and tags</li>
      <li><GoHistory size='3em'/> list commit history</li>
      <li><GoRepoPull size='3em'/>checkout branches</li>
      <li><GoRepoPush size='3em'/> push branches to remotes<a title="via a proxy server">*</a></li>
      <li><GoGitCommit size='3em'/> create new commits</li>
      <li><GoSettings size='3em'/> read & write to .git/config</li>
      <li><GoFileBinary size='3em'/> read & write raw git objects</li>
      <li><GoLock size='3em'/> sign commits</li>
      <li><GoKey size='3em'/> verify signed commits</li>
      <li><GoDiffModified size='3em'/> working file status</li>
    </ul>
  </div>
)

const LearnHow = props => (
  <Block background='light'>
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('isomorphic-git-logo.svg'),
        imageAlign: 'right',
        title: 'Learn How'
      }
    ]}
  </Block>
)

const TryOut = props => (
  <Block id='try'>
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('isomorphic-git-logo.svg'),
        imageAlign: 'left',
        title: 'Try it Out'
      }
    ]}
  </Block>
)

const Description = props => (
  <Block background='dark'>
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('isomorphic-git-logo.svg'),
        imageAlign: 'right',
        title: 'Description'
      }
    ]}
  </Block>
)

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
        </a>
      )
    })

  return (
    <div className='productShowcaseSection paddingBottom'>
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by:</p>
      <div className='logos'>{showcase}</div>
      <div className='more-users'>
        <a className='button' href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  )
}

class Index extends React.Component {
  render () {
    let language = this.props.language || ''

    return (
      <div>
        <HomeSplash language={language} />
        <div className='mainContainer'>
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    )
  }
}

module.exports = Index
