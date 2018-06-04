import axios from 'axios';
import histroy from '.../history';

const ROOT_URL = 'https://bottega-property-management.herokuapp.com';


export function signinUser({email, password}) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then(response => {
      console.log(response.data.token);

      history.push('./newsletter');
    })
    .catch(error => {

    })
  }
}