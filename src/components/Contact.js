import '../App.css';
import { Header } from './Header';
export const Contact=()=>{
    return (
        <div >
            <Header />
            <div style={{display:'flex',textAlign:'justify',padding:10,flexDirection:'column'}}>
                
            <h4>Why Choose Us?</h4>
<ul> <li><span className='bold'>Expertise:</span> Our team of licensed immigration consultants boasts extensive experience and a
profound understanding of Canadian immigration laws and procedures. Our consultants
have undergone rigorous training and possess the expertise to provide you with reliable
immigration advice tailored to your specific circumstances. We prioritize your satisfaction
and strive to facilitate a smooth and seamless immigration process for you. Rest assured
that you are in capable hands with our knowledgeable and professional team of consultants.
</li><li><span className='bold'>Personalized Service:</span> We take pride in our ability to provide tailored guidance and support
that caters to your unique circumstances and goals. Our team of experts understands the
importance of personalized care, and we are committed to offering you the best possible
service at every step of the way. With our guidance, you can rest assured that you will
receive the support you need to achieve your objectives.
</li><li><span className='bold'> Client-Centric Approach:</span> Our clients&#39; satisfaction is of the utmost priority to us. To ensure a
positive experience, we place a high value on clear communication, timely responses, and
proactive problem-solving. Our steadfast commitment to these principles ensures that our
clients receive the best possible service.</li>
</ul>
<br></br>
<h3 style={{textAlign:'center'}}>The two CONTACTS in footer are given</h3>
            </div>
        </div>
    )
}