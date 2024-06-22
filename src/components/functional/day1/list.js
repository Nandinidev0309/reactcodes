
const Listcomponent=()=>{

    const lists=["Banana","Apple","Grapes","Promo","kiwi","dragon","orange"]
    // const obj={
    //     name:"nandini",
    //     age:"21",
    //     role:"developer"
    //     course={
    //         name:"sanvi"
    //     }

    // } 

    const obj=[
        {
            name:"nandini",
            age:21,
            totalscore:1000,
            teamplayers:["virat","dk","rohit","maxwell"]
        },
        {
            name:"Sanvi",
            age:21,
            totalscore:600,
            teamplayers:["virat","dk","rohit","siraj"]
        }
    ]
    return(
        <>

        {
            obj.map((value,index)=>{

                const{totalscore,name,teamplayers} =value
                return(
                    totalscore>800 &&
                   <>
                   <h3>{index+1}.{name}</h3>
                  {
                    teamplayers.map((players)=>{
                        return(
                           <>
                           <p>{players}</p>
                           </>
                        )
                    })
                  }
                   </>  
                )
            })
        }

        {/* <ul type="circle">
        <li>Html</li>
        <li>css</li>
        
    </ul>
    <ol type="a" start="4">
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
    </ol>
    <dl>
        <dt>HTML</dt>
        <dd>HTML stands for Hyper Text Markup Language
        </dd>
        <dt>CSS</dt>
        <dd>CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the look and formatting of a document written in a markup language, such as HTML. CSS separates the content of a web page from its presentation, allowing developers to control the layout, colors, fonts, and other visual aspects of a website. The "cascading" in CSS refers to the way styles are applied, with rules from different sources being combined and prioritized to determine the final presentation of elements on a webpage.</dd>
    </dl>

    <ul>
        <li>{lists[0]}</li>
        <li>{lists[1]}</li>
        <li>{lists[2]}</li>
        <li>{lists[3]}</li>
    </ul> */}

    <hr/>

        </>
    )
}
export default Listcomponent