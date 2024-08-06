import React, { Component } from 'react'
import Props from './props'

export default class Api extends Component {
    state={
        products:[]
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>this.setState({products:data}))
        .catch(err=>console.log(err,"error"))
    }
  render() {
    return (
      <div>
        {/* <Props data={this.state.products}/> */}         
        {this.state.products.map((each)=>{
            return(
                <>
                <center>
                <h1>{each.id} {each.title}</h1>
                <center>
                <img src={each.image} alt={each.title} height={100} width={100}/>
                </center>
                <button>{each.rating && each.rating.rate}</button> 
        
                </center>
                </>
            )
        })}
      </div>
    )
  }
}
