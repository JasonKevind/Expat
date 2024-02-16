import { useLocation } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
export const Why=()=>{
    const loc=useLocation();
    const data={
     
    }
    return (
        <>
        <Header />
        {loc.state?(
            <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div><h4 style={{color:'#333',fontSize:'max(3vh,3vw)'}}>Why choose to study in {loc.state?loc.state.country:"Country"}</h4></div>
            <div>{loc.state?data[loc.state.country]:"Go to home"}</div>
        </div>
        ):
        (<div></div>)
        }
        </>
    )
}