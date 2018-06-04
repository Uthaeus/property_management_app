import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signin extends Component {

  renderInput(field) {
    return <input className="formControl" {...field.input} type="field.type" />
  }

  handleFormSubmit(email, password) {
    this.props.signinUser({email, password})
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <label htmlFor="email">Email</label>
        <Field name="email" component={this.renderInput} type="text"/>
        <label htmlFor="password">Password</label>
        <Field name="password" componenet={this.renderInput} type="password"/>

        <button acgtion="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

Signin = reduxForm({form: "signin"})(Signin)

export default connect(mapStateToProps, actions)(Signin);