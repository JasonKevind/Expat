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
            else{
                document.getElementById("Right").style.display="none"; 
            }
        },[window.innerWidth])
    },[])
    return (
        <div className='Header'>
            <div >
                <img loading='lazy' alt='Not found' src={require("../LOGO PNG.png")}  />
                <GiHamburgerMenu id='ham' size={45} color='#333' onClick={(e)=>{
                    
                    e.preventDefault();
                    document.getElementById("Right").style.display=((document.getElementById("Right").style.display==='none')?"flex":"none");
                }} />

            </div>
            <div id="Right">
                <div onClick={(e)=>{
                    nav("/");
                }}>Home</div>
                  <div>
                    <div >
                Permanent Residency
                <div >
                    <p onClick={(e)=>nav("/PR",{state:{country:"ireland"}})}>Ireland</p>
                    <p onClick={(e)=>{nav("/PR",{state:{country:"canada"}})}}>Canada</p>
                </div>
                </div></div>
                <div id="Temporary">
                   <div style={{padding:0}}> 
                    <p>Temporary Visa</p>
                    <div style={{width:'max-content',marginLeft:15}} >
                        <div style={{display:'flex',width:'max-content'}}>
                            <p>Study Visa</p>
                            <div id="study">
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"australia"}})
                            }}>Australia</p>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"canada"}})
                            }}>Canada</p>
                             <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"germany"}})
                            }}>Germany</p>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"uk"}})
                            }}>UK</p>
                            <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"france"}})
                            }}>France</p>
                             <p onClick={(e)=>{
                                nav("/StudyVisa",{state:{country:"ireland"}})
                            }}>Ireland</p>
                            </div>
                        </div>
                        <div >
                            <p>Visit Visa</p>
                            <div id="visit">
                            <p onClick={(e)=>{nav("/VisitVisa",{state:{country:"canada"}})}}>Canada</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"germany"}})
                            }}>Germany</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"uk"}})
                            }}>UK</p>
                  <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"hongkong"}})
                            }}>HongKong</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"usa"}})
                            }}>USA</p>
                             <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"australia"}})
                            }}>Australia</p>
                            <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"france"}})
                            }}>France</p>
                             <p onClick={(e)=>{
                                nav("/VisitVisa",{state:{country:"ireland"}})
                            }}>Ireland</p>
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
                        <div>
                            <p>Family Visa</p>
                            <div>
                                <p onClick={(e)=>{nav("/FamilyVisa",{state:{country:"ireland"}})}}>Ireland</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div onClick={(e)=>{e.preventDefault();nav("/AboutUs");}}>About Us</div>
                <div onClick={(e)=>{e.preventDefault();nav("/Contact");}} >Contact Us</div>
                
            </div>
        </div>
    )
}