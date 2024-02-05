import '../App.css';
export const MainContent=(props)=>{
    return(
        <>
        {props.list.map((it)=>(
            <div id={it.main} className='MainContent'>
                <div>
                    <img loading='lazy' src={require(`../${it.img}`)} style={{ width:'clamp(60px,75%,310px)',height:"clamp(70px,77.5%,250px)",
                    borderRadius:"20px",boxShadow:"5px 5px 4px grey"}} /> 
                </div>
                <div>
                    <div>
                        <div style={{fontSize:30,color:"rgba(129, 87, 191)",fontWeight:400}}>{it.head}</div>
                        </div>
                    <div>{it.info}</div>
                </div>        
            </div>  
        )
        )}
        </>
    )
}