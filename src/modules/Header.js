import React, { Component } from 'react'
import { IconContext } from "react-icons";
import {MdOutlineHome} from "react-icons/md"
import {MdFaceRetouchingNatural} from "react-icons/md"
import {MdArrowCircleDown} from "react-icons/md"
import {GrStatusPlaceholder} from "react-icons/gr"
import {MdFace} from "react-icons/md"
import LoginC from "authComponents/loginForm.js"
import LogoutC from "authComponents/logoutForm.js"
import SignUpC from "authComponents/signupForm"
import { logOut } from "actions/auth"
import { isExpired, decodeToken } from "react-jwt";
import { connect } from "react-redux";
import "./../styles/header.css"
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
      }
      componentDidMount() {
        console.log(localStorage.getItem("token-access"))
        if (localStorage.getItem("token-access") == null) {
          this.props.dispatch(logOut());
        }
        if (isExpired(localStorage.getItem("token-access")) && isExpired(localStorage.getItem("token-refresh"))) {
          this.props.dispatch(logOut());
        }
      }
      componentDidUpdate(prevProps) {
        if (this.state.isShowed && this.props.isLoggedIn) {
          this.setState({
            isShowed: false,
          })
        }
        if (this.state.isShowedSignUp && this.props.isLoggedIn) {
          this.setState({
            isShowedSignUp: false,
          })
        }
      }
    render() {
        return (
            <header>
            {/* <div className="others"> */}
            <h2>Strona</h2>
            <div className="auth">
                <LoginC isShowed={this.state.isShowed}/>
                <SignUpC isShowed={this.state.isShowedSignUp}/>
                {this.props.isLoggedIn ? <LogoutC /> : <div><button onClick={() => { this.setState({ isShowed: !this.state.isShowed, isShowedSignUp: false }) }}>Login</button><button onClick={() => { this.setState({ isShowedSignUp: !this.state.isShowedSignUp, isShowed: false }) }}>Sign Up</button></div>}
              </div>
            {/* </div> */}
            
            
              
              <div className="Menu">
              <IconContext.Provider value={{ color: "#00EBEB", className: "global-class-name", size:"2.5em" }}>
              
              <Link to="/"><MdOutlineHome /></Link>
              <Link to="/Admin"><MdArrowCircleDown/></Link>
              <Link to="/user_profile"><MdFace/></Link>
              <Link to="/List"><MdFaceRetouchingNatural/></Link>
            <GrStatusPlaceholder/>
            </IconContext.Provider>
              </div>
            </header>
        )
    }
}
function mapStateToProps(state) {
    const { user, isLoggedIn } = state.auth;
    return {
      user,
      isLoggedIn
    };
  }
export default connect(mapStateToProps)(Header);
