import React, { Component } from 'react';

class NewsletterContent extends Component {

  renderItem() {
    if (this.props.latestItem) {
      return (
        <div>
          <div>
            <img src={this.props.latestItem.imageUrl} />
            <h2>{this.props.latestItem.title}</h2>
          </div>
          <p>
            {this.props.latestItem.body} 
          </p>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderItem()}
      </div>
    )
  }
}


export default NewsletterContent;