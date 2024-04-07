import { useState } from 'react';
import '../App.css';
import { Header } from './Header';
export const Register=()=>{
    const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };
    return (
        <>
        <Header/>
        <div id="form">
        <div >
           <span style={{fontWeight:600,fontSize:'20px',color:'purple',marginLeft:'40px'}}>Reach out for <span style={{fontWeight:800,color:'#333'}}>QUERIES</span></span>
        </div>
        <div>
        
            <div>
           <div>Name </div>
           <div><input type="email" id="email" /></div>
           </div>
           <div>
           <div>Contact Number </div>
           <div><input type="number" id="number" /></div>
           </div>
           <div>
           <div>Mail ID  </div>
           <div><input type='email' id="mail" /></div>
           </div>
           <div>
           <div>Query </div>
  
      
           
           <div className="text-area-container">
      <textarea
        className="text-area"
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
      />
     
    </div>         
        </div>
        </div>
        <div>
           <button style={{height:'30px'}}>Submit</button>
        </div>
     </div>
     </>
    )
}