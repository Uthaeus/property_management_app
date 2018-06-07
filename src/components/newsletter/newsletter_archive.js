import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NewsletterArchive extends Component {

  constructor(props) {
    super(props)
    this.items = []
  }

  renderNewsletterArchiveItem = function(item, index) {
    return (
      <li key={index}>
        <Link to={`/newsletter/detail/${item._id}`}>{item.title}</Link>
        <p></p>
      </li>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.archive) {
      nextProps.archive.map((item, index) => {
        this.items.push(this.renderNewsletterArchiveItem(item, index))
      })
    }
  }

  render() {
    
    return (
      <div>
        <div>Archive</div>
        <ul>
          {
            this.items
          }
        </ul>
      </div>
    )
  }
}


export default NewsletterArchive;