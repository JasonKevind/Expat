import { useEffect } from 'react';
import '../App.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
export const Header=()=>{
    const nav=useNavigate();
    useEffect((e)=>{
        window.addEventListener("resize",(ev)=>{
            if(window.innerWidth>=800){
                document.getElementById("Right").style.display="flex";
            }
        },[window.innerWidth])
    },[window.innerWidth])
    return (
        <div className='Header'>
            <div>
                <img loading='lazy' alt='Not found'  src={require("../expat.jpg")}  />
                <GiHamburgerMenu id='ham' size={40} color='#333' onClick={(e)=>{
                    
                    e.preventDefault();
                    document.getElementById("Right").style.display=((document.getElementById("Right").style.display=='none')?"flex":"none");
                }} />

            </div>
            <div id="Right">
                <div onClick={(e)=>{
                    nav("/");
                }}>Home</div>
                <div onMouseEnter={(e)=>
                    {
                        e.preventDefault();
                        document.getElementById("Migrations").style.display="flex";    
                    }
                    }
                    onMouseLeave={(e)=>{
                        e.preventDefault();
                        document.getElementById("Migrations").style.display="none";
                    }}>
                    <p className='Services'>Permanent Residency</p>
                     <div id="Migrations" style={{display:'flex',flexDirection:'column',position:'absolute',display:'none'}}>
                        <a>Canada</a>
                        <a>Australia</a>
                        <a>New Zealand</a>
                        <a>Hong-Kong</a>
                     </div>
                </div>
                <div id="Temporary">
                    <p>Temporary Visa</p>
                    <div>
                        <div>
                            <p>Study Visa</p>
                            <div>
                            <a>Canada</a>
                            <a>Australia</a>
                            <a>New Zealand</a>
                            <a>UK</a>
                            <a>Germany</a>

                            <a>Ireland</a>
                            </div>
                        </div>
                        <div>
                            <p>Visit Visa</p>
                            <div>
                            <a>Canada</a>
                            <a>Australia</a>
                            <a>New Zealand</a>
                            <a>UK</a>
                            <a>Germany</a>
                            <a>Ireland</a>
                            </div>
                        </div>

                    </div>
                </div>
                <div>About Us</div>
                <div>Contact Us</div>
                
            </div>
        </div>
    )
}