import React, { Component } from 'react'
import './../styles/home.css';
import { connect } from "react-redux";
import { Routes, Route, Link, Navigate,useRoutes } from 'react-router-dom';
import instance from 'interceptors'
import "./../styles/account.css"



class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user_id:this.props.user.user_id,
          email:this.props.user.email,
          username:null,
          description:null,
          role:null,
          tags:["python","css"],
          editing:false,
          possible_tags:[],
        };
      }
      componentDidMount=()=> {
        instance.get("/user_profile/"+this.state.user_id+"/").then((response) => {
          // console.log(response.data)
          this.setState({
            username:response.data.user.username,
            role:response.data.role,
            description:response.data.description,
            tags:response.data.tags
          });
        })
        instance.get("/tags/").then((response) => {
          console.log(response.data.results)
          this.setState({
            possible_tags:response.data.results
          });
        })
      }
      profile =()=> {
        if (this.state.username){
          return(
            <div className="profile">
               <h2>{this.state.username}</h2>
               <p>{this.state.role?this.state.role:"Nieprzypisany"}</p>
               <span>Opis:</span><p>{this.state.description?this.state.description:"Brak opisu"}</p>
               <div className="tags">{this.state.tags.map((tag)=><p className="tag">{tag}</p>)}</div>
               <button type="submit" onClick={()=>{this.setState({editing:true})}}>Edit</button>
            </div>
         
          )
        }
        
      }
      editProfile =()=> {
        var description=this.state.description
        var role=this.state.role
        return(
          <div className="profile">
            

            <span>Rola:<select onBlur={event => role=event.target.value}>
              <option value="TEACHER">Teacher</option>
              <option value="STUDENT">Student</option>
              <option value="BOTH">BOTH</option>

            </select> </span>
            <span>Opis:<input type="text" onBlur={event => description=event.target.value}/></span>

            <div className="tags">{this.state.tags.map((tag,index)=><input className="tagInput" key={index} type="text" list="tags-list" defaultValue={tag}/>)}</div>
            <datalist id="tags-list">
            {this.state.possible_tags.map((tag)=><option value={tag.name}/>)}
            </datalist>
            <button onClick={()=>this.goddammit()}>+</button>
            <button type="submit" onClick={()=>this.save(description,role)}>Save</button>
          </div>
        )
      }
      goddammit=()=>{
        let temptags=this.state.tags
        temptags.push("") 
        this.setState({tags:temptags})
      }
      save=(description,role)=>{
        if(description){
        let inputs=document.getElementsByClassName("tagInput")
        let i=0;
        let temptags=[]
        while(inputs[i]){
          var temp=this.state.possible_tags.find(item =>item.name=inputs[i]).id
          temptags.push(temp)
          i++
        }
        console.log({"role":role,"description":description })
        instance.put("/user_profile/"+this.state.user_id+"/", {"role":role,"description":description,"tags":[{
          "id": 4,
          "name": "react"
      }] }).then((e)=>{
          console.log(e)
        })
        this.setState({tags:temptags,editing:false,description:description,role:role})

      }
      else alert("Podaj opis")
    }
    
    render() {
      
      //   this.props.dispatch(Account(this.state.email, this.state.password))
      // .then(() => {
      // })
     
        return (
            <div className="home">
           
            {!this.state.editing?this.profile():this.editProfile()}
            
            </div>
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
  export default connect(mapStateToProps)(Account);