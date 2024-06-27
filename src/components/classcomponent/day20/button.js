import React, { Component } from "react";
import Spinners from "./spinner";


class ButtonComponentClass extends Component{
    state={
        text1:"Subscribe",
        text2:"Unsubscribe",
        isSubscribe:true 

    };

    subscribehandler=()=>{
        console.log("buttonclick"); 

        this.setState({
            isSubscribe:!this.state.isSubscribe
        })
    };


    render(){
        return(
            <React.Fragment>
            <button onClick={this.subscribehandler}>{this.state.isSubscribe?this.state.text1:this.state.text2}</button>

            {
                this.state.isSubscribe?
                <>
                <Spinners/>
                <h2>Thanks For Subscribing</h2>
                </>:
                <h2>Welcome to this channel</h2>
            }
            </React.Fragment>
        )
    }  
} 
export default ButtonComponentClass