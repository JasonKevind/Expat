import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { Image } from './Image';
import { MainContent } from './MainContent';
import { Header } from './Header';
import { ReadMore } from './ReadMore';
export const Country=()=>{
    const loc=useLocation();
    const nav=useNavigate();

    const data={"uk":{headimg:"ukhome.JPG","headhead":"UK","headinfo":"dndjnjs sionos osjdkn","maincontent":[
                {"main":"main","img":"uktower.JPG","head":"Why to study in UK","info":<div>A degree from a UK institution could be a to proficient success. Wherever within the world you select to seek after your career, a degree from a college within the joined together Kingdom is globally regarded and considered quality instruction.....<br></br>
                <ReadMore country={"uk"} />
                </div>},
                {"main":"requsa","img":"ukstudy.JPG","head":"Basic Requirements for UK","info":"Check you meet the qualification requirements You must have a visa or travel record to enter the UK. It ought to be substantial for the entire of your stay. You must be able to appear that:youll take off from the UK after your visit you’re able to yourself and your dependants on the trip or have financing from somebody else to back you you’re able to pay for your return or ahead journey or have financing from somebody else to pay for the journey you’ll not live within the UK for expanded periods through visit or progressive visits, or make the UK your primary domestic"},
                {"main":"timeusa","img":"ukflag.JPG","head":"Processing time","info":"How long it takes to urge a decision. A choice will ordinarily be made within 8 weeks. You may be able to pay to induce a quicker choice - you’ll be told if you'll be able you apply. After you apply You’ll be reached on the off chance that your application is complex and will take longer, for example, because:your supporting archives ought to be verified you ought to go to an interview of your circumstances (for illustration if you've got a criminal conviction) If you would like to alter something in your application after you’ve sent it contact UK Visas and Migration (UKVI). You can inquire to pull back your application by reaching UKVI. Your charge will as it were be discounted on the off chance that UKVI has not begun handling your application."}]               
            },

        }
    
    return(
        <>
            {
                loc.state?
            (<div><Image img={data[loc.state.country].headimg} head={data[loc.state.country].headhead} info={data[loc.state.country].headinfo}/>
            <MainContent list={data[loc.state.country].maincontent} />
            </div>):
            (<div><Header /></div>)
            }
        </>
    )
}