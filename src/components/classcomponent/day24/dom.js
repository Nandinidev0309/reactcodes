import { Component } from "react"
import CustomSpinner from "../../functional/customspinner/spinnercustom";

class Lifecycle extends Component{

    
 
    constructor(){
        super();
        this.state={
            productListing:[],
            loading:false,
            error:null,
            additional:{
                one:"One"
            }
        }
    }


    componentDidMount(){
        console.log("componentDidMount invoked......");
       this.fetchData() ; 
    }

    fetchData =()=>{
            this.setState({
                loading:true
            })

        fetch("https://fakestoreapi.com/products")
        .then((response)=>response.json())
        .then((response)=>{
            this.setState({
                productListing:response,
                loading:false,                                                     

            })
        })
    }


    render(){
        console.log("render invoked......");
        return(
            <>
            <h2>Product Listing page</h2>
            {
                this.state.loading?
                <>
                <h3>please wait until loading...</h3>
                <CustomSpinner/>
                </>
                :
                <div>
                    {
                        this.state.productListing.map((each)=>{
                            return(
                                <>
                                <h3>{each.title}</h3>
                                </>
                            )
                        })
                    }
                </div>
            }
            </>
        )
    }
}
export default Lifecycle