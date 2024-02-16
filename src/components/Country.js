import { useLocation } from 'react-router-dom';
import '../App.css';
import { Image } from './Image';
import { MainContent } from './MainContent';
import { Header } from './Header';
import { ReadMore } from './ReadMore';
export const Country=()=>{
    const loc=useLocation();
    const data={"uk":{headimg:"ukhome.JPG","headhead":"UK","headinfo":"dndjnjs sionos osjdkn","maincontent":[
                {"main":"mainuk","img":"uktower.JPG","head":"Why to study in UK","info":<div>A degree from a UK institution could be a to proficient success. Wherever within the world you select to seek after your career, a degree from a college within the joined together Kingdom is globally regarded and considered quality instruction.....<br></br>
                <ReadMore country={"uk"} link={'Why'} />
                </div>},
                {"main":"requk","img":"ukstudy.JPG","head":"Basic Requirements for UK","info":"Check you meet the qualification requirements You must have a visa or travel record to enter the UK. It ought to be substantial for the entire of your stay. You must be able to appear that:youll take off from the UK after your visit you’re able to yourself and your dependants on the trip or have financing from somebody else to back you you’re able to pay for your return or ahead journey or have financing from somebody else to pay for the journey you’ll not live within the UK for expanded periods through visit or progressive visits, or make the UK your primary domestic"},
                {"main":"timeuk","img":"ukflag.JPG","head":"Processing time","info":"How long it takes to urge a decision. A choice will ordinarily be made within 8 weeks. You may be able to pay to induce a quicker choice - you’ll be told if you'll be able you apply. After you apply You’ll be reached on the off chance that your application is complex and will take longer, for example, because:your supporting archives ought to be verified you ought to go to an interview of your circumstances (for illustration if you've got a criminal conviction) If you would like to alter something in your application after you’ve sent it contact UK Visas and Migration (UKVI). You can inquire to pull back your application by reaching UKVI. Your charge will as it were be discounted on the off chance that UKVI has not begun handling your application."},              
                {"main":"visitvisauk","img":"ukstudy.JPG","head":"Visit Visa Processes","info":<div>The UK visitor visa, also known as a standard visitor visa or UK traveller visa, licenses exterior nationals to visit the UK as a traveller, for commerce, for consideration, and other permitted works out for a brief period of up to 6 months......<br></br>
                <ReadMore country={"uk"} link={'VisitVisa'} />
                </div>}]          
                
            },
            "canada":{headimg:"canada.jpg","headhead":"Canada","headinfo":"dndjnjs sionos osjdkn","maincontent":[{"main":"maincanada","img":"canadasea.jpg","head":"Why to study in Canada","info":<div style={{lineHeight:1.8}}><h4 className='h44'>Economic Opportunities </h4>: Explore Thriving Economic Prospects In Canada.<br></br>
            <h4 className='h44'>Quality Of Life </h4>: Understand Why Canada Is Renowned For Its High Quality Of Life.<br></br>
            <h4 className='h44'> Inclusive Society </h4>: Experience The Inclusivity Of Canadian Society.<br></br>
            <h4 className='h44'>Healthcare And Education </h4>: Access World-Class Healthcare And Education In Canada.<br></br>
           <h4 className='h44'> Our Team </h4>: &quot;Meet Our Dedicated Team Of Immigration Consultants, Each Committed To Providing
            You With The Best Possible Guidance And Support Throughout Your Canadian PR Journey.&quot;
            </div>},{"main":"studyvisacanada","img":"maincanada.jpg","head":"Study Visa Process","info":<div>At Expats Immigration, we understand the complexities of the Canadian education and immigration
            landscape. Our team of seasoned consultants possesses extensive knowledge and expertise, which
            enables us to provide you with expert guidance and support throughout the application process.<br></br>
            <ReadMore country={"canada"} link={"StudyVisa"} />
            </div>},{"main":"visitvisacanada","img":"toronto.jpg","head":"Visitor Visa Process","info":<div>If someone wishes to visit Canada for a limited duration, generally less than six months, they need to
            obtain a Temporary Resident Visa (TRV). There are various types of TRVs available, depending on the
            purpose of the visit. One of these categories is the Canadian Visitor Visa, which is commonly referred
            to as a Tourist Visa for Canada.<br></br>
            <ReadMore country={"canada"} link={"StudyVisa"} />
            </div>}]
            }
        }
    return(
        <>
            {
                loc.state?
            (<div ><Image country={loc.state.country} img={data[loc.state.country].headimg} head={data[loc.state.country].headhead} info={data[loc.state.country].headinfo}/>
            <MainContent list={data[loc.state.country].maincontent} />
            </div>):
            (<div><Header /></div>)
            }
        </>
    )
}