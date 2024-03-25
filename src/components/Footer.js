import '../App.css';
export const Footer=()=>{
    return (
        <div className='Footer'>
            <div>
            <div>
            <div style={{width:'100px',height:'80px'}}>
            <img loading='lazy' style={{width:'100%',height:'100%'}} alt='Not found' src={require("../LOGO PNG.png")}  />
            </div>
            </div>
            <div>
                <div><h3>Contact US</h3></div>
                <div><a href='tel:9884727688'>+919884727688</a></div>
                <div><a href='tel:6383707737'>+916383707737</a></div>
            </div>
            </div>
            <div style={{display:'flex',justifyContent:'center',fontSize:10}}>
                @All CopyRights are Reserved
            </div>
        </div>
    )
}