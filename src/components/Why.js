import { useLocation } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
export const Why=()=>{
    const loc=useLocation();
    const data={
        "uk":<div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:15,letterSpacing:2.5,lineHeight:2.25}}>
            <div>A degree from a UK institution could
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
</div>
 <p>Here are five great reasons for understudies to consider the UK.</p>
<div>
    <ul>
<li>Strongest Economy</li>
<li>High Standard of Living</li>
<li>Great Working Environment</li>
<li>Longer Paid holidays</li>
<li>Free Healthcare facilities</li>
<li>Good wages</li>
<li>Learn to be individual</li>
<li>Getting to know unused people</li>
<li>Traveling through Europe is</li>
<li>Easy and affordable</li>
<li>Improving your English</li>
<li>Communication skills</li>
    </ul>
</div>
<div>
There are numerous reasons why worldwide understudies ought to think about within
the UK. One of the reasons is that the UK has one of the foremost diverse and
comprehensive situations that fosters lifelong companionship and exceptional social
experiences. Numerous educational courses that are instructed within the UK education
framework are shorter, more viable & concentrated which suggests that the
understudies will graduate sooner than as well without compromising on quality. An
undergrad program within the UK can be completed in as little as 3 a long time and a
few postgraduate programs can be completed in just 1 year. Understudies can moreover
seek short-term certificate confirmation& programs to obtain specialized skills and
information in a shorter length, upgrading their employability and growing their career
openings within the UK. The essential stress for universal understudies emerges when
they must apply for a UK understudy visa. Usually where Worldwide Openings, a driving
abroad instruction consultancy in India, comes in, advertising a team of experienced
counsellors committed to helping understudies in effectively get their visas and
accomplish their ponder overseas goals. We offer assistance to understudies within
the UK considering visa handles by carefully investigating their UK understudy visa
applications.
</div>
</div> 
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