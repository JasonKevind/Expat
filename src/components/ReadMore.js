import '../App.css';
import { useNavigate } from 'react-router-dom';
export const ReadMore=(props)=>{
    const nav=useNavigate();
    return (
        <button onClick={(e)=>{e.preventDefault();
            nav("/Why",{state:{country:props.country}})
            }} className='underline' style={{cursor:'pointer'}}>READ MORE</button>
    )
}