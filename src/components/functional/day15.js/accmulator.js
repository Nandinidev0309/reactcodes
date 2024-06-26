import "./button.css"

const Arrayofobject=()=>{
    const iplteam=[
        {
            name:"CHENNAI SUPER KINGS",
            batters:["Ruturaj Gaikwad","Devon Conway","MS Dhoni"],
            bowlers:["Ravindra Jadeja","Moeen Ali","Ajay Mandal"],
            winnings:[2010,2011,2018,2021,2023],
            won:4,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68XI8snHCKTU4aIFBOoajst2U9Vh0gd9XuA&s"
        },
        {
            name:"ROYAL CHALLENGERS BENGALURU",
            batters:["Virat Kohli","Will Jacks","Anuj Rawat"],
            bowlers:["Glenn Maxwell","Karn Sharma","Manoj Bhandage"],
            winnings:[2016],
            won:5,
            image:"https://www.shutterstock.com/image-vector/sun-risers-wings-emblem-icon-260nw-2321553247.jpg"
        }
    ]
    
    
    function filterData(iplteam){
        const newteam=iplteam.filter((eachplayer)=>eachplayer.won>=3)
        return newteam
    } 
    
    function totalcount(iplteam){
        const newteamcount=iplteam.reduce((acc,eachplayer)=>{return acc+eachplayer.won
        },0)
        return newteamcount 
    } 

    return(
        <>
       <h3>Total Count Of Matches{totalcount(iplteam)}</h3>
        {
          filterData(iplteam).map((eachplayer,index)=>{
            return(
                <div className="mystyles">
                     
                <h3>{index+1}{eachplayer.name}</h3>
                <img src={eachplayer.image} width={100} height={100}/> 
                {
                   eachplayer.batters.map((each,)=>{
                    return(
                        <>
                        <ol>
                        <li >{each}</li>
                        </ol>
                        </>
                    )
                   })
                }
                {
                   eachplayer.bowlers.map((eachpl,)=>{
                    return(
                        <>
                        <ul>
                        <li  >{eachpl}</li>
                        </ul>
                        </>
                    )
                   })
                }
                {
                   eachplayer.winnings.map((eachpl)=>{
                    return(
                        <>
                        <li>{eachpl}</li>
                        </>
                    )
                   })
                }
                
                </div>
            )
          })  
        }
        </>
    )
}
export default Arrayofobject