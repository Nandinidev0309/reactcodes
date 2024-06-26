import ButtonComponentClass from "./components/classcomponent/day20/button"





const App = ()=>{
  // const buttonArray=[
  //   {
  //     text:"Login",
  //     bgcolor:"purple",
  //     width:200,
  //     height:200,
  //     color:"white",
  //     paddin:10,
  //     margin:10,
  //     id:1
  //   },
  //   {
  //     text:"Signup",
  //     bgcolor:"red",
  //     width:200,
  //     height:200,
  //     color:"white",
  //     paddin:10,
  //     margin:10,
  //     id:2
  //   }
  //   ,
  //   {
  //     text:"ClickMe",
  //     bgcolor:"green",
  //     width:200,
  //     height:200,
  //     color:"white",
  //     paddin:10,
  //     margin:10,
  //     id:3
  //   }
  //   ,
  //   {
  //     text:"Entry",
  //     bgcolor:"yellow",
  //     width:200,
  //     height:200,
  //     color:"black",
  //     paddin:10,
  //     margin:10,
  //     id:4
  //   }
  //   ,
  //   {
  //     text:"Exit",
  //     bgcolor:"black",
  //     width:200,
  //     height:200,
  //     color:"white",
  //     paddin:10,
  //     margin:10,
  //     id:5
  //   }
  //   ,
  //   {
  //     text:"GetOut",
  //     bgcolor:"orange",
  //     width:200,
  //     height:200,
  //     color:"white",
  //     padding:10,
  //     margin:10,
  //     id:6
  //   }

  // ]

 
  
  return(
    <div>
      
      {/* <ButtonDay3 text={"Login"} bgcolor={"purple"} buttonproperties={{width:200,height:200}} color={"white"} padding={10} margin={10}/>
      <ButtonDay3 text={"Click Me"} bgcolor={"red"} buttonproperties={{width:200,height:200}} color={"black"} padding={10} margin={10}/>
      <ButtonDay3 text={"Submit"} bgcolor={"blue"} buttonproperties={{width:200,height:200}} color={"white"} padding={10} margin={10}/> */}
      {/* {
        buttonArray.map((value)=>{
          const {text,bgcolor,width,height,color,padding,margin,id}=value
          return(
             <ButtonDay3 key={id} text={text} bgcolor={bgcolor} buttonproperties={{width:width,height:height}}  color={color} padding={padding} margin={margin} />
          )
        })
      } */}
      {/* <Greetingcomponenet>
        <>
        <Imagecomponent ps={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgocFKL7nrTQ6SDRjVIIexUKXiye1Vc0YGA&s"}/>
        <h1>hello gm</h1>
        <h1>hw ru</h1>
        </>
      </Greetingcomponenet> */}
      
        {/* {fake.map((value,)=>{
            const {id,title,price,description,category,image}=value
            return(
                <Fakeapi ps={id} title={title} price={price} description={description} category={category} image={image} />
            )
        })} */}
      
      {/* <Bootcomponent/> */}
      {/* <Boot/> */} 

     
      {/* <Customlist list={["apple","banana","grapes","pineapple"]}></Customlist>
      <Customlist list={["sunny","bunny","grapy","mummy"]}></Customlist> */}

    {/* <Images pc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgocFKL7nrTQ6SDRjVIIexUKXiye1Vc0YGA&s" width="100" height="100" alt="shirt"/> */}
      <ButtonComponentClass/>
      </div>
  )
} 
export default App   

