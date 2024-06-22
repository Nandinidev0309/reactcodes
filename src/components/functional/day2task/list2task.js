const Day2task=()=>{
    const obj=[
        {
            name:"CHENNAI SUPER KINGS",
            batters:["Ruturaj Gaikwad","Devon Conway","MS Dhoni"],
            bowlers:["Ravindra Jadeja","Moeen Ali","Ajay Mandal"],
            winnings:[2010,2011,2018,2021,2023]
        },
        {
            name:"ROYAL CHALLENGERS BENGALURU",
            batters:["Virat Kohli","Will Jacks","Anuj Rawat"],
            bowlers:["Glenn Maxwell","Karn Sharma","Manoj Bhandage"],
            winnings:[2016]
        }
    ]
    return(
        <>
        {
            obj.map((value,index)=>{
                return(
                   <>
                   <h3>{index+1}.{value.name}</h3>
                   <h3>{index+1}.Batters</h3>
                   {
                    value.batters.map((players)=>{
                        return(
                            <>
                            <p>{players}</p>
                            </>
                        )
                    })
                   }
                   <h3>{index+1}.Bowlers</h3>
                   {
                    value.bowlers.map((bowl)=>{
                        return(
                            <>
                            <p>{bowl}</p>
                            </>
                        )
                    })
                   }
                   <h3>Winnings</h3>
                   {
                    value.winnings.map((win)=>{
                        return(
                            <>
                            <p>{win}</p>
                            </>
                        )
                    })
                   }


                   </>
                )
            })
        }
        </>
    )
}
export default Day2task