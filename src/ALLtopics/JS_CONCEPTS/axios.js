async function data() {
    try{
        const res=await axios.get("https://fakestoreapi.com/products")
        console.log(res.data)
    }
    catch(error){
        console.log(error,"error data");
    }

    
}
data()