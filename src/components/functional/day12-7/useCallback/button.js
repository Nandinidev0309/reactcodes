import React from 'react'

function ButtonUseCallback(props) {

    console.log("child rendering");
    const{onPress,text,height,width,margin,bgcolor}=props

   
  return (
    <div>
        <button onClick={onPress} style={{height:height, width:width, margin:margin,backgroundColor:bgcolor}}>{text}</button>
    </div>
  )
}

export default React.memo(ButtonUseCallback )

