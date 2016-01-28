// LIBRARY
/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
/*eslint-enable no-unused-vars*/

let postItemSectionMenu = class PostItemSectionMenu extends Component {
  constructor() {
    super();
  }

  render() {
    let body = this.props.body;
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
            h2: {
              text: h2[1].replace(/\-/g, ' '),
              anchor: h2[1]
            },
            h3: []
          };
          titles.push(current);
        }
        else if (h3 && h3) {
          current.h3.push(
            {
              h3: {
                text: h3[1].replace(/\-/g, ' '),
                anchor: h3[1]
              }
            }
          );
        }
      });

      // build html
      titles.forEach((title, idx) => {
        let subMenu = [];
        if (title.h3) {
          title.h3.forEach((title3, idx2) => {
            const key = 'subMenu-' + idx2;
            const subtarget = '#' + title3.h3.anchor;
            subMenu.push(<ul key={key}>
              <li className='title'>
                <a href={subtarget}>
                  {title3.h3.text}
                </a>
              </li>
            </ul>);
          });
        }
        const target = '#' + title.h2.anchor;
        menu.push(<ul key={idx}>
          <li className='title'>
            <a href={target}>
              {title.h2.text}
            </a>
            {subMenu}
          </li>
        </ul>);
      });

      return (
        <div>
          {menu}
        </div>
      );
    }
    return (<div></div>);
  }
};

postItemSectionMenu.prototype.displayName = 'PostItemSectionMenu';

export default postItemSectionMenu;
