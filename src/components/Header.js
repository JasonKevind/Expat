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
    },[])
    return (
        <div className='Header'>
            <div>
                <img loading='lazy' alt='Not found'  src={require("../expat.jpg")}  />
                <GiHamburgerMenu id='ham' size={45} color='#333' onClick={(e)=>{
                    
                    e.preventDefault();
                    document.getElementById("Right").style.display=((document.getElementById("Right").style.display==='none')?"flex":"none");
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
                     <div id="Migrations" style={{flexDirection:'column',position:'absolute',display:'none'}}>
                        <p onClick={(e)=>{
                            nav("/PR",{state:{country:e.target.textContent[0].toLowerCase()+e.target.textContent.substring(1,).toLowerCase()}})}}>Canada</p>
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
                             <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"germany"}})
                            }}>Germany</p>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"uk"}})
                            }}>UK</p>
                            </div>
                        </div>
                        <div>
                            <p>Visit Visa</p>
                            <div>
                            <p onClick={(e)=>{nav("/VisitVisa",{state:{country:"canada"}})}}>Canada</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"germany"}})
                            }}>Germany</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"uk"}})
                            }}>UK</p>
                
                            </div>
                        </div>
                        <div>
                            <p>Super Visa</p>
                            <div>
                                <p onClick={(e)=>{nav("/SuperVisa",{state:{country:"canada"}})}}>Canada</p>
                            </div>
                        </div>
                        <div>
                            <p>Work Visa</p>
                            <div>
                                <p onClick={(e)=>{nav("/WorkVisa",{state:{country:"canada"}})}}>Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={(e)=>{e.preventDefault();nav("/AboutUs");}}>About Us</div>
                <div onClick={(e)=>{e.preventDefault();window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'})}} >Contact Us</div>
                
            </div>
        </div>
    )
}