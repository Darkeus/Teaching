import {Navigate} from "react-router-dom";
export const LoginPage=(props)=> {
  
    if (props.isLoggedIn){
        return <Navigate to="/user_profile" replace />;
    }else{
        return (
        <div className="home">
          <p>You must log in to see this page</p>
        </div>
      );}
    
    
  }