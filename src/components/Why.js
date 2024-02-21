import { useLocation } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
import { Flags } from './Flags';
import { useEffect } from 'react';
export const Why=()=>{
    const loc=useLocation();
    const data={
     "uk":<div>
        Why consider within the Joined Together Kingdom? A degree from a UK institution could
be a to proficient success. Wherever within the world you select to seek after your
career, a degree from a college within the joined together Kingdom is globally regarded
and considered quality instruction. This impression is sponsored by the numbers, with
the UK creating 14% of the world’s most cited scholastic papers and 5% of the world’s
logical research. These figures are all the more noteworthy considering the nations that
contain Joined together Kingdom are domestic to a fair 1% of the world’s populace. The
UK’s colleges have a notoriety for cultivating virtuoso over a variety of disciplines, with
lights such as Ernest Rutherford (the father of atomic material science) to Oscar Wilde
(acclaimed Irish essayist and writer) graduating from striking UK tertiary institutions.
Choosing to consider overseas at a UK college has numerous budgetary, social and
social points of interest as well. A shorter, more intensive course structure implies you’ll
be able to fast-track your career and limit your living costs while you ponder. The Joined
Together Kingdom moreover incorporates a run of programs planned to supply
understudies with rebates and get to cheap open transport and think about essentials.
Here are five great reasons for understudies to consider the UK.<br></br>
•Strongest Economy<br></br>
•High Standard of Living<br></br>
•Great Working Environment<br></br>
•Longer Paid holidays<br></br>
•Free Healthcare facilities<br></br>
•Good wages<br></br>
•Learn to be individual<br></br>
•Getting to know unused people<br></br>
•Traveling through Europe is<br></br>
•Easy and affordable<br></br>
•Improving your English<br></br>
•Communication skills<br></br>
There are numerous reasons why worldwide understudies ought to think about within
the UK. One of the reasons is that the UK has one of the foremost diverse and
comprehensive situations that fosters lifelong companionship and exceptional social
experiences. Numerous educational courses that are instructed within the UK education
framework are shorter, more viable & concentrated which suggests that the
     </div>,
    "germany":<div>
        <h4>1)Moo Educational cost Fees:</h4> Germany is eminent for its instruction framework that values availability. Most college courses are tuition-free, empowering understudies to seek after their scholastic goals without the monetary burden commonly found in other countries. Indeed private colleges, whereas less in number, have generally lower expenses compared to worldwide counterparts.
         <h4>2)Top-Ranked Universities:</h4> German colleges reliably rank among the world’s best, gloating remarkable guidelines, investigate fabulousness, and a steady learning environment. With over 400 open higher instruction educate, counting 106 colleges, understudies have a plenty of choices to select from, guaranteeing a high-quality education. 
         <h4>3)Incalculable Degree Courses:</h4> Germany caters to a wide run of scholarly interface, advertising assorted degree programs. Whereas designing remains a highlight, colleges exceed expectations in areas such as pharmaceutical, drug store, and developing disciplines. The adaptability and advancement in course offerings make Germany an perfect goal for understudies with shifted scholarly pursuits. 
         <h4>4)Top-Notch Consider Programs:</h4> German colleges are committed to giving high-quality instruction that adjusts with worldwide standards. The educational programs is frequently overhauled to reflect the most recent progressions, permitting understudies to secure important aptitudes and knowledge. Graduates hold universally recognized degrees, upgrading their employability on an worldwide scale. 
         <h4>5)Cheap Fetched of Living:</h4> Germany gives an reasonable fetched of living for worldwide understudies, particularly in rural areas. Whereas urban ranges can be pricier, shrewd budgeting and way of life alterations can keep costs reasonable. Choices like sharing lodging with roommates offer assistance diminish the budgetary burden related with renting. 
         <h4>6 Work Openings for Universal Students:</h4> German law permits worldwide understudies to work part-time, giving important work involvement and budgetary support. With over 60% of universal understudies holding part-time employments, openings flourish in areas like coaching, bartending, organization, and looking after children. The work involvement picked up upgrades future work prospects. 
         <h4>7)Social and Authentic Heritage:</h4> Germany’s wealthy and complex history is woven into the texture of its cities. From memorable points of interest to galleries, understudies have the opportunity to inundate themselves in a culture that has altogether impacted worldwide history. Examining in Germany may be a to investigate these social gems and make enduring memories. 
         <h4>8)Opportunity to Memorize a Modern Language:</h4> Learning German opens entryways to various openings. As a major player within the worldwide economy, Germany’s local dialect is broadly talked in Europe. Familiarity in German not as it were boosts employability but moreover permits understudies to lock in with a worldwide group of onlookers and investigate unused places with ease. 
         <h4>9)Worldwide Acknowledgment and Esteemed Degrees:</h4> CA_NEWLINE_CA Degrees earned from German colleges are all inclusive recognized and profoundly esteemed by employers. The accentuation on inquire about, down to earth involvement, and comprehensive instruction plans graduates to explore the challenges of the worldwide work advertise, making them looked for after by bosses worldwide. Suggested Read: 9 Steps To Choosing The Proper College To Think about Abroad. 
         <h4>10)Post-Study Work Opportunities:</h4> Germany offers differing post-study work openings, counting work look, Discretionary Viable Preparing (Select), Work Searcher Visa, and the Blue Card for exceedingly gifted professionals. These roads, coupled with the plausibility of lasting residency, give worldwide understudies with a consistent move into the proficient world.
    </div>
    }
    useEffect(()=>{
        window.scrollTo(0,0);
     },[])
    return (
        <>
        <Header />
        {loc.state?(
            <div style={{display:'flex',flexDirection:'column',lineHeight:2,padding:20,alignItems:'center'}}>
            <div><h4 style={{color:'#333',fontSize:'max(3vh,3vw)'}}>Why choose to study in {loc.state?loc.state.country:"Country"}</h4></div>
            <div>{loc.state?data[loc.state.country]:"Go to home"}</div>
        </div>
        ):
        (<div>
             <div style={{height:'60vh'}}>
               <Flags/>
               </div>
        </div>)
        }
        </>
    )
}