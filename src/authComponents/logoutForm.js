import React from 'react';
import { logOut } from 'actions/auth.js'
import { connect } from "react-redux";
class LogoutForm extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLogout = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(logOut());
  }
  render() {
    return (<button type="button" onClick={this.handleLogout}>Logout</button>);
  }
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}
export default connect(mapStateToProps)(LogoutForm);