import { Image } from "./image"; 

import { Heading1, } from "./heading"; 
import { Orderlist,Unorderlist } from "./listitems";  
import Buttons from "./button";
export const Cardss=()=>{
    return(
        <>
        <Heading1/>
        <Orderlist/> 
        <Image/> 
        <Unorderlist/>
        <Buttons/>
        </>
    )
}