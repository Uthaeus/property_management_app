import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class EditNewsletter extends Component {
  renderInput(field) {
    return <input className="formControl" {...field.input} type="field.type" />
  }

  handleFormSubmit(email, password) {
    
  }
  render() {

    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <label htmlFor="title">Title</label>
        <Field name="title" component={this.renderInput} type="text"/>
        <label htmlFor="body">Body</label>
        <Field name="body" componenet={this.renderInput} type="text"/>

        <Link to="/newsletter"><div>Cancel</div></Link>
        <button action="submit" className="btn btn-primary">Save</button>
      </form>
    )
  }
}

EditNewsletter = reduxform({form: "editNewsletter"})(EditNewsletter)


export default EditNewsletter;