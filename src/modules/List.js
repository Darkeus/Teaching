import React, { Component } from 'react'
import instance from 'interceptors'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
       
    }
    componentDidMount=()=>{
        instance.get("/user_profile/").then((response) => {
            console.log(response.data.results)
            let teachers = response.data.results
            this.setState({list: teachers})
        })
    }
    render() {
        return (
            <div className="lista">
                <h2>Lista naszych nauczycieli</h2>
                <div className="nauczyciele">
                    {this.state.list.map((item)=> item.role !="STUDENT"?<div className="miniProfile"><h4>{item.email}</h4><p>{item.description}</p></div>:"")}
                </div>
            </div>
        )
    }
    
}
