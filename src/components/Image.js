import '../App.css';
import { IoArrowDownCircle } from "react-icons/io5";
import { Header } from './Header';
export const Image=(props)=>{
    return (
      <div style={{height:"clamp(620px,95vh,1000px)",backgroundImage:`url(../${props.img})`,
      backgroundSize:"cover",backgroundPosition:"center",display:'flex',zIndex:2,
      flexDirection:'column',
      }}>
        <Header />
        <div style={{height:"clamp(500px,100%,900px)",display:"flex",justifyContent:"center",alignItems:'center',width:'100%',
        flexDirection:"column",position:'absolute'}}>
            <div className='Img'>
                <div><p style={{textAlign:'center',color:"rgb(235, 213, 251)",fontSize:"clamp(15px,35%,85px)",
                fontFamily:"system-ui",padding:0,margin:0}}>{props.head}</p></div>
                <div style={{display:'flex',justifyContent:'center',alignItems:"center",textAlign:'center'}}>{props.info}</div>
            </div>
            
            <div id="div1" style={{cursor:'pointer',borderRadius:"30px"
            ,backgroundColor:'#333',display:'flex'
            ,alignItems:'center',justifyContent:'center'}}
            onClick={(e)=>{
              e.preventDefault();
              
              document.getElementById("main"+props.country).scrollIntoView({behavior:"smooth"});
            }}
            >
              <IoArrowDownCircle size={50} color='white'/>
              </div>
        </div>
      </div>
    )
}