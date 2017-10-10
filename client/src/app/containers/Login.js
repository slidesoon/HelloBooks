import React from 'react';
import {Col} from 'react-materialize'
import {Loginform} from '../components/Loginform';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import swal from 'sweetalert2';

class Login extends React.Component {
  submit = data => {
    this
      .props
      .login(data)
      .then((res) => {
        if (res.success) {
          swal('Welcome!', res.message, 'success');
          this
            .props
            .history
            .push('/dashboard');
        } else {

          swal('Oops...', res.error.data.message, 'error');

        }
      })

  }
  render() {

    return (
      <Col s={12} m={8} l={6} offset='l1'>
        <div className='register'>

          <h3>
            Login</h3>
          <Loginform submit ={this.submit}/>

        </div>
      </Col>
    );
  }

}

Login.propTypes = {

  login: PropTypes.func.isRequired

};

export default connect(null, {login})(Login);