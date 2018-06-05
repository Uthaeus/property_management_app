import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class NewsletterDetail extends Component {
  componentDidMount() {
    this.props.fetchNewsletterById(this.props.match.params._id)
  }

  renderFetchedItem() {
    if (this.props.fetchedItem) {
      return (
        <div>
          <div>
            <img src={this.props.fetchedItem.imageUrl} />
            <h2>{this.props.fetchedItem.title}</h2>
          </div>
          <p>
            {this.props.fetchedItem.body} 
          </p>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="col-md-2" style={{width: '200px', height: '200px', backgroundColor: 'skyblue'}}>
            02 jan 18
          </div>
          <div className="col-md-10">
            
          </div>
        </div>
        <div className="col-md-9">
          {this.renderFetchedItem()}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchedItem: state.newsletter.fetchedItem
  }
}


export default connect(mapStateToProps, actions)(NewsletterDetail);