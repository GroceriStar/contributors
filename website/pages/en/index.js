/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('docusaurus.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={docUrl('doc1.html', language)}>Example Link</Button>
            <Button href={docUrl('doc2.html', language)}>Example Link 2</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} alt={user.caption} title={user.caption} />
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Who's Using This?"}</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};
const TableOfContents = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Table of contents</h2>
        <div className = "tableofcontents">

          <ul>
  <li><a href="/contributors/docs/questions-answers/questions-answers.html">Q&amp;A</a>
  <ul>
  <li><a href="/contributors/docs/questions-answers/qa1.html">Q&amp;A [What we’re doing here] [part 1]</a></li>
  <li><a href="/contributors/docs/questions-answers/qa2.html">Q&amp;A[what we’re doing here][part 2]</a></li>
  <li><a href="/contributors/docs/questions-answers/qa3.html">Tech stack that we’re using at Groceristar</a></li>
  <li><a href="/contributors/docs/questions-answers/qa4.html">Q&amp;A[common questions, that I asked frequently][part3]</a></li>
  </ul></li>
  <li><a href="/contributors/docs/search-plus-search-result/search-plus-search-result.html">Search + Search result</a></li>
  <li><a href="/contributors/docs/sub-project/sub-project.html">Sub project</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/technology/technology.html">Technology</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/technology/react/react.html">React</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/technology/react/recipe-app.html">recipe app</a></li>
  <li><a href="/contributors/docs/sub-project/technology/react/frontend-pages.html">frontend pages</a></li>
  <li><a href="/contributors/docs/sub-project/technology/react/landing-pages.html">landing pages</a></li>
  <li><a href="/contributors/docs/sub-project/technology/react/shopping-list.html">shopping list</a></li>
  <li><a href="/contributors/docs/sub-project/technology/react/meal-calendar.html">meal calendar</a></li>
  <li><a href="/contributors/docs/sub-project/technology/react/recipe-components.html">recipe components</a></li>
  </ul></li>
  </ul></li>
  <li><a href="/contributors/docs/sub-project/type/type.html">Type</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/type/backend/backend.html">Backend</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/type/backend/recipe-api-server.html">recipe api server</a></li>
  <li><a href="/contributors/docs/sub-project/type/backend/recipe-search-api-server.html">recipe search api server</a></li>
  <li><a href="/contributors/docs/sub-project/type/backend/groceristar-api.html">groceristar api</a></li>
  <li><a href="/contributors/docs/sub-project/type/backend/graphql-instances.html">graphql instances</a></li>
  </ul></li>
  <li><a href="/contributors/docs/sub-project/type/js-only/js-only.html">Js-only</a>
  <ul>
  <li><a href="/contributors/docs/sub-project/type/js-only/types.html">types</a></li>
  <li><a href="/contributors/docs/sub-project/type/js-only/groceristar-fetch-plugin.html">groceristar-fetch plugin</a></li>
  </ul></li>
  </ul></li>
  </ul></li>
  <li><a href="/contributors/docs/team/team.html">Team</a></li>
  <li><a href="/contributors/docs/testimonials/testimonials.html">Testimonials</a></li>
  <li><a href="/contributors/docs/work/work.html">Work</a></li>
  </ul>
      </div>


  </div>
);
class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        {/* <HomeSplash language={language} /> */}
        <div className="mainContainer">
          <TableOfContents />
          {/* <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
