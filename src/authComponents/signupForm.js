import React from 'react';
import { register } from 'actions/auth.js'
import { connect } from "react-redux";
// import "styles/login.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      loading: false
    };
  }
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }
  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  }
  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }
  handleSignUp = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    this.props.dispatch(register(this.state.username, this.state.email, this.state.password))
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
        <form onSubmit={this.handleSignUp} id="signUpForm" method="post">
          <label htmlFor="emails"><b>Email</b></label>
          <br />
          <input onChange={this.onEmailChange} type="text" placeholder="Enter Email" id="emails" name="emails" required />
          <br /><br />
          <label htmlFor="unames"><b>Username</b></label>
          <br />
          <input onChange={this.onUsernameChange} type="text" placeholder="Enter Username" id="unames" name="unames" required />
          <br /><br />
          <label htmlFor="psws"><b>Password</b></label>
          <br />
          <input onChange={this.onPasswordChange} type="password" placeholder="Enter Password" id="psws" name="psws" required />
          <br /><br />
          <button disabled={this.props.isLoggedIn} type="submit">Sign Up</button>
        </form>
      </div>);
  }
}
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}
export default connect(mapStateToProps)(SignUpForm);