import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import NewsletterArchive from './newsletter_archive';

class Newsletter extends Component {

  componentDidMount() {
    this.props.fetchNewsletterArchive();
  }

  render() {
    return (
      <div>
        <div>
          <div>
            02 jan 18
          </div>
          <NewsletterArchive />
        </div>
        <div>
          main content. the latest newsletter 
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { archive: state.newsletter.archive }
}

export default connect(mapStateToProps, actions)(Newsletter);