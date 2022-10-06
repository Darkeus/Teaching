import React from 'react';
import { signIn } from 'actions/auth.js'
import { connect } from "react-redux";
import "styles/login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false
    };
  }
  onUsernameChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    this.props.dispatch(signIn(this.state.email, this.state.password))
      .then(() => {
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  }
  render() {
    return (
      <div className={`${!this.props.isShowed ? "active" : ""} show`}>
        <p className="error">{this.props.message}</p>
        <form onSubmit={this.handleLogin} id="loginForm" method="post">
          <label htmlFor="uname">Email</label>
          <br />
          <input onChange={this.onUsernameChange} type="text" placeholder="Enter Email" id="uname" name="uname" required />
          <br /><br />
          <label htmlFor="psw"><b>Password</b></label>
          <br />
          <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" id="psw" name="psw" required />
          <br /><br />
          <button disabled={this.props.isLoggedIn} type="submit"> <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span><span class="button-text">Login</span></button>
        </form>
      </div>);
  }
}
function mapStateToProps(state, ownProps) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    ...ownProps,
    isLoggedIn,
    message
  };
}
export default connect(mapStateToProps)(LoginForm);