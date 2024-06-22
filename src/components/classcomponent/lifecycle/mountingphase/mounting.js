import { Component } from "react";
import { Card } from "react-bootstrap";





class Mounting extends Component{
    constructor(){
        console.log("constructor");
        super()
        this.state={
            message:"Good Morning",
            products:[]
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(name=>this.setState({
            products:name
        }))

    }

    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
        return null

    }
render(){
    console.log("render");
    return(
        <>
        <h2>Mounting Phase</h2>
        {
            this.state.products.length>0
            ?this.state.products.map(eachproduct=>{
                const{title}=eachproduct
                return(
                    <>
                    <Card product={eachproduct}/>
                    {/* <h3>{title}</h3> */}
                    </>
                )
            }):false
        }
        </>
    )
}
}
export default Mounting