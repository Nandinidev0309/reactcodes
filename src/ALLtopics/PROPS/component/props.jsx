const Props = (prop) => {
    const { names, tool,height,width,border,padding ,textcenter} = prop;
    return (
      <>
        <h2>hello my self {tool}</h2>
        <h5>hey {names}</h5>
        <div style={{height:height,width:width, border:border , padding:padding,textAlign:textcenter}}>
          <h2 >
            {prop.name}
          </h2>
          <button>click me</button>
        </div>
      </>
    );
  };
  export default Props;