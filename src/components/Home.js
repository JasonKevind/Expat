import '../App.css';
import { Flags } from './Flags';
import { Image } from './Image';
import { MainContent } from './MainContent';
export const Home=(props)=>{
 return (
    <>
    <Image country={""} img={'cheer.jpg'} head={'Convenient Migrations'} info={<div>Tap on the arrow to see the countries with which we can help you...</div>} />
    <MainContent list={[{'main':"main",'img':"flags.jpg",'head':'Countries We Deal','info':<div>Let it be that you wanna migrate or you wish to study abroad, we can make it possible for you to make to countries like USA, Canada, Germany, Hong-Kong, France, Australia, New Zealand. Details for migration as well as for educational purposes can be viewed by <b>clicking on respective flags below</b> to see the processes involved.</div>}
   ]}/>
   
   <h3 style={{color:"#333",textAlign:'center',textShadow:"1px 2px 4px  black"}}>We will update in fewer days in regards with other countries other than Uk,Canada and Germany</h3>
   <Flags/>
   <div style={{padding:10,lineHeight:2}}>
   Expats Immigration Services is a team of highly skilled professionals who specialize in facilitating
permanent residency for individuals and families in countries such as Canada, Australia, and New
Zealand. Our team of experienced visa immigration consultants will provide comprehensive
assistance throughout the entire process, irrespective of whether you are interested in applying for
temporary residency or seeking to become a permanent resident.<br></br>
At Expats Immigration, we pride ourselves on delivering customer-centric services to clients who
wish to travel, work, or immigrate to a foreign country. Our team of experts will provide you with a
comprehensive understanding of the immigration process, ensuring that you are equipped with
complete knowledge of the procedures involved. Our commitment to delivering legitimate client
service and satisfaction is evident in every aspect of our immigration services in India.
Transparency and honesty are the core values that underpin our success in the field of immigration.
We are dedicated to making the immigration process stress-free for our clients, from selecting the
best country for your family, study, work, or business to receiving the best visa consultancy services.<br></br>
Our ultimate aim is to provide you with personal satisfaction and happiness for you and your family.
Our team of experts will provide assistance through every stage of the immigration process,
ensuring that you receive the highest quality services. We are committed to providing our clients
with complete legal assistance and guidance, ensuring that you have a hassle-free immigration
experience. Our goal is to provide you with a seamless and efficient immigration process, regardless
of your immigration needs.
   </div>
    </>
 )
}