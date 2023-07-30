import React, { Component } from "react"
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends Component{

    constructor(props){
        super(props);

        this.state = {
            message:"Hello, Guest!",
            buttonText: "Log in"
        }

    }

    handleClick(){
        console.log("clicked")
        this.setState({
            message:this.state.message === "Hello, Guest!" ? "Welcome back, User!": "Hello, Guest!",
            buttonText:this.state.buttonText === "Log in" ? "Log out": "Log in",
        })
    }

    render(){
        return <div className = {css.NavBar}>
           <h1>My Gallery</h1> 
           <span>{this.state.message}</span>
           <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>    
        
        </div>
}

}

export default NavBarSimple;
