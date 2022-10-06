import { React, Component } from 'react';
import { connect } from "react-redux";
import Header from "./modules/Header.js"
import Footer from "./modules/Footer.js";
import Account from "./modules/Account.js";
import List from "./modules/List.js";
import Home from "./home/home.js";
import {
  BrowserRouter,
  Routes, 
  Route,
  Navigate
} from "react-router-dom";
import { LoginPage } from 'authComponents/LoginPage.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    console.log(localStorage.getItem('token-access'))

    return (
    <div className="App">
    <BrowserRouter>
        <Header/>
        
      <Routes>
        <Route exact path="/" element={<Home />} />
      
      
        <Route path="/Admin" element={<h1>Admin</h1>} />
        <Route path="/Login" element={<LoginPage isLoggedIn={this.props.isLoggedIn}/>} />
        <Route path="/List" element={<List/>} />

      
        <Route path="/user_profile" element={<ProtectedRoute user={this.props.user}>
              <Account/>
            </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
        <Footer/>
    </div>
    );
  }
}
function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn
  };
}
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};
export default connect(mapStateToProps)(App);