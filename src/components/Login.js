import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.scss';
import sideImg from '../assets/images/sideImg.png';
import { connect } from 'react-redux';
import { loginFail } from '../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: '',
    }
  }
 
  handleInputChanges = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value      
    })
  }
  formHandler = (evt) => {
    this.setState({
      email: '',
      password: '',   
    })
    evt.preventDefault();
    const { users } = this.props.user;
    const check = users.find(user => user.email === this.state.email && user.password === this.state.password)
    if (check) {
      this.props.history.push('/home')
      return localStorage.setItem('user', check.username) 
    }     
    document.getElementById('unused').innerHTML = '';
    return this.props.loginFail('Invalid credentials')   
  }
  handleSocialLogin = (url) => {
    window.location.href = `http://localhost:5000/${url}`;    
  }
  render () {
    return (
      <div>
        <div className="container">
          <div className="formShape">
            <div className="login">
            <form action="" onSubmit={this.formHandler}> 
            {/* <h5>{this.props.user.error}</h5>  */}
            <h2 id="unused">Login</h2>
              <label htmlFor="email">Email</label>
              <input type="email" required onChange={this.handleInputChanges} value={this.state.email} name="email" id="email"/>
              <label htmlFor="password">Password</label>
              <input type="password" required onChange={this.handleInputChanges} value={this.state.password} autoComplete="off" name="password" id="password"/>              
              <button type="submit"  >Sign in</button>
              <div className="socialLogin">
              <span>OR</span>
              <Link to="" onClick={() => this.handleSocialLogin('api/auth/google')}><button className="google"><i className="smallIbtn">G </i>Signin with Google </button></Link>
              <Link to="" onClick={() => this.handleSocialLogin('api/auth/facebook')}><button className="facebook"><i className="smallIbtn">f </i>Signin with Facebook</button></Link> 
              </div>
            </form>
            <div className="sideImg">
            <img src={sideImg} alt="Login"/>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginFail: (error) => { dispatch (loginFail(error)) }
  }
}
export default Login;
