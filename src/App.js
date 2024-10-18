
// import RecipeTask from "./My-Practise/RecipeTask/RecipeTask";
//  import CountryTask from "./My-Practise/CountryTask/CountryTask";
// import CurrencyTask from "./My-Practise/CurrencyTask/CurrencyTask";
// import WeatherTask from "./My-Practise/WeatherTask.js/WeatherTask";



import Stack from "./My-Practise/Merge/Stack";

//  import Navlink from "./My-Practise/Merge/Navigation/Navlink";



// ......................................
// export const UserContext=createContext()
// import Components from "./ALLtopics/LIFE-CYCLE/Components"

// import { createContext } from "react";
// export const Store=createContext()
// .................................



// import CountriesApi from "./COUNTRY/Country.js";
// import { Recipe } from "./RECIPE/Recipe.js";





// import { createContext, useState } from "react";


// export const store = createContext();
const App = () => {
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
  // const [data, setData] = useState([
  //   {
  //     id: 1,
  //     brand: "Nokia",
  //   },
  //   {
  //     id: 2,
  //     brand: "Realme",
  //   },
  //   {
  //     id: 3,
  //     brand: "one-plus",
  //   },
  //   {
  //     id: 4,
  //     brand: "i-phone",
  //   },
  //   {
  //     id: 5,
  //     brand: "samsung",
  //   },
  // ]);
 
  return (
    <div>
      {/* <store.Provider value={[data, setData]}>
         <Count />
        <Display />
      </store.Provider> */}
      {/* <button onClick={()=>setData(data+1)}>Increment</button> */}

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
      }  */}

      {/* <Greetingcomponent>
        <>
         <Imagecomponent ps={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgocFKL7nrTQ6SDRjVIIexUKXiye1Vc0YGA&s"}/>
        <h1>hello gm</h1>
        <h1>hw ru</h1>
        </>
      </Greetingcomponent> */}

      {/* {fake.map((value,)=>{
             const {id,title,price,description,category,image}=value
            return(
                <Fakeapi ps={id} title={title} price={price} description={description} category={category} image={image} />
            )
         })}
       */}
      {/* <Bootcomponent/> */}
      {/* <Boot/> */}

      {/* <Customlist list={["apple","banana","grapes","pineapple"]}></Customlist>
       <Customlist list={["sunny","bunny","grapy","mummy"]}></Customlist> */}

      {/* <Images pc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHgocFKL7nrTQ6SDRjVIIexUKXiye1Vc0YGA&s" width="100" height="100" alt="shirt"/> */}
      {/* <Updatingphase favColor={"red"}/> */}

      {/* <h1 className="text-3xl font-bold underline">
      Hello world!
     </h1> */}

      {/* <ControlledForm/>
       */}

      {/* <Stack/> */}

      {/* <ButtonUseCallback onPress="onclick" text="nandini" width="100px" height="20px" margin="10px" bgcolor="red"></ButtonUseCallback> */}
      {/* <UseCallback/> */}

      {/* <UserContext.Provider value="TELUGU SKILLHUB">
    <ComponentC/>
    </UserContext.Provider> */}
      {/* <Props data="bunny">
  
  </Props> */}
  {/* <Counter/> */} 

 {/* <Fetch/> */}
 {/* <CustomHooks/> */}
 {/* <Navbar/> */}
{/* <Todolist/> */}


{/* <Todoslist/> */}
{/* <Todopage/> */}
{/* <CountriesApi/> */}
{/* <Recipe/> */}



{/* ................ */} 

{/* <RecipeTask/> */}
{/* <CountryTask/> */}
{/* <WeatherTask/> */}
{/* <CurrencyTask/> */}
{/* <Stack/> */}
{/* <Navlink/> */}
<Stack/>

    </div>
  );
};
export default App;
