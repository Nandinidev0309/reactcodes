import { Component } from "react"
import CustomSpinner from "../../functional/customspinner/spinnercustom";

class ProductList extends Component{

    state={
        productListing:[],
        loading:false,
        error:null
    }



    componentDidMount(){
        console.log("componentDidMount invoked......");
       this.fetchData() ; 
    }

    // fetchData =()=>{
    //         this.setState({
    //             loading:true
    //         })

    //     fetch("https://fakestoreapi.com/products")
    //     .then((response)=>response.json())
    //     .then((response)=>{
    //         this.setState({
    //             productListing:response,
    //             loading:false,                                                     

    //         })
    //     })
    // }

    fetchData=async()=>{
        this.setState({
            loading:true
        })
        try{
       const response1=await fetch("https://fakestoreapi.com/products")
        const finalresponse=await response1.json()                                                
            this.setState({
                productListing:finalresponse,
                loading:false,

            })
        } catch(err){
            console.error(err);
           this.setState({
            error:"Server is busy"
           })
        }
        finally{
            this.setState({
                loading:false
            })
        }
    
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
export default ProductList