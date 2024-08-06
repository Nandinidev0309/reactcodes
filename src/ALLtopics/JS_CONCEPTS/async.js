const code=async()=>{   
    try{
        const response=await fetch("https://fakestoreapi.com/products")
        const result=await response.json()
        console.log(result);
    }
    catch (error){
        console.log(error,"error data");
    }
     
}  



