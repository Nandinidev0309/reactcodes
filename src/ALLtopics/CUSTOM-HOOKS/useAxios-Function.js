import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (URL="https://fakestoreapi.com/products") => {
  const [data, setData] = useState([]);
  const[error,setError]=useState(null)
  const[loading,setLoading]=useState(true)

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      // const { status, res } = await axios.get(URL);
      // if (status === 200) {
      //   setData(res);
      // }

      const res=await axios.get(URL)
      if(res.status===200){
        setData(res.data)
      }
    } 
    catch (err) {
        setError(err)
      console.log(err, "error");
    }
    finally{
        setLoading(false)
    }
  };

  return[data,error,loading]
};
export default useAxios;
