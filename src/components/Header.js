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
                        <p onClick={(e)=>nav("/PR",{state:{country:"canada"}})}>Canada</p>
                        <p>Australia</p>
                        <p>New Zealand</p>
                        <p>Hong-Kong</p>
                     </div>
                </div>
                <div id="Temporary">
                    <p>Temporary Visa</p>
                    <div>
                        <div>
                            <p>Study Visa</p>
                            <div>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"canada"}})
                            }}>Canada</p>
                            <p>Australia</p>
                            <p>New Zealand</p>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"uk"}})
                            }}>UK</p>
                            <p>Germany</p>

                            <p>Ireland</p>
                            </div>
                        </div>
                        <div>
                            <p>Visit Visa</p>
                            <div>
                            <p onClick={(e)=>{nav("/VisitVisa",{state:{country:"canada"}})}}>Canada</p>
                            <p>Australia</p>
                            <p>New Zealand</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"uk"}})
                            }}>UK</p>
                            <p>Germany</p>
                            <p>Ireland</p>
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