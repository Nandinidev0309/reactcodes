const Card=(props)=>{
    console.log(props);
    return(
        <>
        <div className="card" style={{width:200}}>
        <div className="card-body">
            <>
            <h4 className="card-title">John Doe</h4>
            <p className="card-text">some example text.</p>
            <a href="#" className="btn btn-primary">see profile</a>
            </>
        </div>
        </div>
        </>
    )
}
export default Card