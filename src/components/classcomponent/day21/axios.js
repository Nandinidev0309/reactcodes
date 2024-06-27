import { Component } from "react"
import CustomSpinner from "../../functional/customspinner/spinnercustom";
import axios from "axios";

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

    fetchData=async()=>{
        this.setState({
            loading:true
        })
        try{
       const response1=await axios.get("https://fakestoreapi.com/products")
               console.log(response1,"response1");
               
               if (response1.status===200){
                this.setState({
                        productListing:response1.data,
                        loading:false,
                })
               }
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
                                <h3 key={each.id}>{each.title}</h3>
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