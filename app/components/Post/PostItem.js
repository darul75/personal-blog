// LIBRARY
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import _ from 'lodash';

// FLUX
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import connectToStores from 'alt/utils/connectToStores';

// DEPENDENCY
import PostItemSectionMenu from './PostItemSectionMenu';

let prism = require('prismjs');

let { PropTypes } = React;

if (process.env.BROWSER) {
  require('./_PostItem.scss');
  require('../../../assets/js/prism/prism.css');
}

let postItem = class PostItem extends React.Component {
  constructor(props) {
    super(props);
    this.propsTypes = {
      post: PropTypes.object.isRequired
    };
    this.state = {
      menu: false
    };
    this.titles = undefined;
  }

  componentDidMount() {
    setTimeout(() => {
      prism.highlightAll(() => {});

      if (this.props.params) {
        /*eslint-disable */
        let disqus_shortname = 'darul';
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        /*eslint-enable */

        let postId = this.props.params.postId;
        let posts = PostItem.getPropsFromStores().posts;
        // find by permalink
        let post = _.find(posts, function(item) {
          return item.permalink === postId;
        });

        const matchTitles = post.body.match(/<(h2|h3) (\S+)=(["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?)/g);
        let titles = [],
        current;

        if (matchTitles) {
          matchTitles.forEach((tag) => {
            const h2 = tag.match(/<h2 id="(\S*)"/);
            const h3 = tag.match(/<h3 id="(\S*)"/);
            if (h2) {
              current = {
                h2: h2[1],
                h3: []
              };
              titles.push(current);
            }
            else if (h3 && h3) {
              current.h3.push({h3: h3[1]});
            }
          });
        }

        if (titles !== undefined && titles.length) {
          titles.forEach((elt) => {
            let tinyMenuButton =
              <span>{elt.h2.replace(/\-/g, ' ')}
                <button className='c-hamburger tiny menu' onClick={this._onClick.bind(this)} title='see sections'>
                  <span>menu</span>
                </button>
              </span>;
            React.render(tinyMenuButton, document.getElementById(elt.h2));
            if (elt.h3) {
              elt.h3.forEach((elt1) => {
                let tinyMenuButton2 = <span>{elt1.h3.replace(/\-/g, ' ')}
                  <button className='c-hamburger tiny menu' onClick={this._onClick.bind(this)} title='see sections'>
                    <span>menu</span>
                  </button>
                </span>;
                React.render(tinyMenuButton2, document.getElementById(elt1.h3));
              });
            }
          });
        }
      }
    });
  }

  componentDidUpdate() {
    setTimeout(() => {
      prism.highlightAll(() => {
      });
    });
  }

  render() {
    let post = this.props.post,
        disqusMarkup = '',
        markdownClass = 'markdown-body highlight preview',
        markdownMenu = '',
        moreButton = '',
        backButton = '',
        time = '',
        editUrl = '',
        helmetMarkup = '',
        editButtonMarkup = '';

    if (post) {
      moreButton = <Link className='buttonize small' to={'/post/' + post.permalink}>Continue reading →</Link>;
    }

    const fullDisplayClass = this.props.params ? 'full' : '';

    if (this.props.params) {
      markdownClass = 'markdown-body highlight';
      // from store
      let posts = PostItem.getPropsFromStores().posts;
      let postId = this.props.params.postId;
      let title = PostItem.getPropsFromStores().config.helmet.title;
      // find by permalink
      post = _.find(posts, function(item) {
        return item.permalink === postId;
      });

      // build menu
      markdownMenu = <PostItemSectionMenu body={post.body} />;

      time = <time dateTime={post.date.toString()}>{post.date}</time>;
      let homepage = PostItem.getPropsFromStores().packagejson.homepage;
      editUrl = homepage + '/edit/master/posts/2015/' + post.filename;
      editButtonMarkup = <div className='post-buttons'>
        <button className='c-hamburger menu' onClick={this._onClick.bind(this)} title='see sections'>
          <span>menu</span>
        </button>
        <a href={editUrl} target='_blank' title='edit me'>
          <button className='c-hamburger edition' href={editUrl} target='_blank'>
            <span>edition</span>
          </button>
        </a>
      </div>;
      let templateTitle = '%s | ' + post.title;
      let postTitle = title + ' | ' + post.title;
      helmetMarkup = <Helmet title={title} titleTemplate={templateTitle} meta={[
        {'name': 'description', 'content': postTitle},
        {'property': 'og:type', 'content': 'article'}
      ]} />;

      disqusMarkup = <div id='disqus_thread'></div>;
      backButton = <Link className='buttonize small' to={'/'}>Home</Link>;

      //previewClass = '';

      // if (!post) {
      //   todo redirect
      // }
    }
    // param
    let postPermalink = '/post/' + post.permalink;
    let articleContainerClass = 'post ' + fullDisplayClass;

    //post.body = post.body.replace('</h2>', '</h2>' + markDown);

    const showClass = this.state.menu ? 'show' : '';
    let menuPositionStyle = {};
    if (this.state.menu) {
      menuPositionStyle.top = this.state.menuPageY - this.state.menuH - 400;
    }

    const body = this.props.params ? post.body : post.bodyNoImg;

    let contentMarkup = <div className={markdownClass} dangerouslySetInnerHTML={{__html: body}} itemProp='articleBody'></div>;

    if (!this.props.params) {
      contentMarkup = <div className={markdownClass}><summery dangerouslySetInnerHTML={{__html: body}} itemProp='articleBody'></summery></div>;
    }

    return (
      <section>
        <article className={articleContainerClass} itemScope itemType='http://schema.org/BlogPosting'>
          <div id='post-menu' ref='postmenu' style={menuPositionStyle} className={showClass} onMouseLeave={this._onMouseLeave.bind(this)}>
            {markdownMenu}
          </div>
          <div className='markdown-body'>
            {time}
          </div>
          {editButtonMarkup}
          <h1 itemProp='headline'>
            <Link to={postPermalink}>{post.title}</Link>
          </h1>
          {contentMarkup}
          <div className='buttons'>
            {moreButton}
            {backButton}
          </div>
          {helmetMarkup}
          {disqusMarkup}
          <meta itemProp='datePublished' content={new Date(post.date).toISOString()}/>
          <meta itemProp='image' content={post.bodyImage}/>
        </article>
      </section>
    );
  }

  _onClick(e) {
    AppActions.showPostMenu(true);
    this.setState({
      menu: true,
      menuPageY: e.pageY,
      menuH: this.refs.postmenu.getDOMNode().offsetHeight
    });
  }

  _onMouseLeave() {
    AppActions.hidePostMenu(true);
    this.setState({menu: false});
  }

  static getSectionMenu(body, titlesInfo) {
    const matchTitles = body.match(/<(h2|h3) (\S+)=(["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?)/g);
    let titles = [],
      current,
      menu = [];

    if (matchTitles) {
      matchTitles.forEach((tag) => {
        const h2 = tag.match(/<h2 id="(\S*)"/);
        const h3 = tag.match(/<h3 id="(\S*)"/);
        if (h2) {
          current = {
            h2: h2[1].replace(/\-/g, ' '),
            h3: []
          };
          titles.push(current);
        }
        else if (h3 && h3) {
          current.h3.push({h3: h3[1].replace(/\-/g, ' ')});
        }
      });

      titlesInfo.info = titles;

      // build html
      titles.forEach((title, idx) => {
        let subMenu = [];
        if (title.h3) {
          title.h3.forEach((title3, idx2) => {
            const key = 'subMenu-' + idx2;
            const subtarget = '#' + title3.h3;
            subMenu.push(<ul key={key}>
              <li className='title'>
                <a href={subtarget}>
                  {title3.h3}
                </a>
              </li>
            </ul>);
          });
        }
        const target = '#' + title.h2;
        menu.push(<ul key={idx}>
          <li className='title'>
            <a href={target}>
              {title.h2}
            </a>
            {subMenu}
          </li>
        </ul>);
      });

      return <div>{menu}</div>;
    }
  }

  static getStores() {
    return [AppStore];
  }

  static getPropsFromStores() {
    return {
      config: AppStore.getState().config,
      posts: AppStore.getState().posts,
      packagejson: AppStore.getState().packagejson,
      menu: AppStore.getState().menu
    };
  }
};

postItem.prototype.displayName = 'PostItem';

export default connectToStores(postItem);
