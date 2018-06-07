import { 
  FETCH_NEWSLETTER_ARCHIVE,
  FETCH_NEWSLETTER_BY_ID 
} from './types';


import axios from 'axios';
import histroy from '../history';

const ROOT_URL = 'https://bottega-property-management.herokuapp.com';


export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {

      localStorage.setItem('token', response.data.token)

      history.push('./newsletter');
    })
    .catch(error => {

    })
  }
}

export function fetchNewsletterArchive(callback) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/newsletterArchive`, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_NEWSLETTER_ARCHIVE,
          payload: response.data 
        })
        if (callback) { callback() }
      })
  }
}

export function saveNewsletterEdit({title, body}, _id, callback) {
  return function(dispatch) {
    axios.put(`${ROOT_URL}/newsletter/edit/${_id}`, {title, body}, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch(fetchNewsletterArchive( () => {
          callback()
        }))
        
      })
  }
}

export function fetchNewsletterById() {
  return (
    {
      type: FETCH_NEWSLETTER_BY_ID,
      payload: _id
    }
  )
}