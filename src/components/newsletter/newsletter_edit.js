import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class EditNewsletter extends Component {

  componentDidMount() {
    this.props.fetchNewsletterById(this.props.match.params._id)
  }

  renderInput(field) {
    return (
      <div>
        <label htmlFor={field.input.name}>{field.input.name}</label>
        <input className="form-control" {...field.input} />
      </div>
    )
  }

  handleFormSubmit(title, body) {
    
  }
  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <Field name="title" component={this.renderInput} type="text"/>
        <Field name="body" componenet={this.renderInput} type="textarea"/>

        <Link to="/newsletter"><div>Cancel</div></Link>
        <button action="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { initialValues: state.newsletter.fetchedItem }
}

EditNewsletter = reduxForm(
  {
    form: "editNewsletter",
    enableReinitialize: true
  }
)(EditNewsletter)



export default connect(mapStateToProps, actions)(EditNewsletter);