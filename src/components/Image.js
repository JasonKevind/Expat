import '../App.css';
import { Header } from './Header';
export const Image=(props)=>{
    return (
      <div style={{height:"clamp(620px,95vh,1000px)",backgroundImage:`url(../${props.img})`,
      backgroundSize:"cover",backgroundPosition:"center",display:'flex',zIndex:2,
      flexDirection:'column',justifyContent:'space-between'     }}>
       <Header />
        <div style={{display:"flex",alignItems:'center',width:'100%',
        flexDirection:"column",justifyContent:'center',height:"20%"}}>
        </div>
      </div>
    )
}