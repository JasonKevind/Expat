import { useLocation } from 'react-router-dom';
import '../App.css';
import { Image } from './Image';
import { MainContent } from './MainContent';
import { Header } from './Header';
import { ReadMore } from './ReadMore';
import { Flags } from './Flags';
import { useEffect } from 'react';
export const Country=()=>{
    const loc=useLocation();
    useEffect((e)=>{
        window.scrollTo(0,0);
    })
    const basic="You can view the details from tourism to educational purposes below...";
    const data={"uk":{headimg:"ukhome.JPG","headinfo":basic,"maincontent":[
                {"main":"mainuk","img":"ukstudy.JPG","head":"Why to study in UK","info":<div>A degree from a UK institution could be a to proficient success. Wherever within the world you select to seek after your career, a degree from a college within the joined together Kingdom is globally regarded and considered quality instruction.....<br></br>
                <ReadMore country={"uk"} link={'Why'} />
                </div>},
                {"main":"requk","img":"uktower.JPG","head":"Basic Requirements for UK","info":"Check you meet the qualification requirements You must have a visa or travel record to enter the UK. It ought to be substantial for the entire of your stay. You must be able to appear that:youll take off from the UK after your visit you’re able to yourself and your dependants on the trip or have financing from somebody else to back you you’re able to pay for your return or ahead journey or have financing from somebody else to pay for the journey you’ll not live within the UK for expanded periods through visit or progressive visits, or make the UK your primary domestic"},
                {"main":"timeuk","img":"ukflag.JPG","head":"Processing time","info":"How long it takes to urge a decision. A choice will ordinarily be made within 8 weeks. You may be able to pay to induce a quicker choice - you’ll be told if you'll be able you apply. After you apply You’ll be reached on the off chance that your application is complex and will take longer, for example, because:your supporting archives ought to be verified you ought to go to an interview of your circumstances (for illustration if you've got a criminal conviction) If you would like to alter something in your application after you’ve sent it contact UK Visas and Migration (UKVI). You can inquire to pull back your application by reaching UKVI. Your charge will as it were be discounted on the off chance that UKVI has not begun handling your application."},              
                {"main":"visitvisauk","img":"toweruk.jpg","head":"Visit Visa Processes","info":<div>The UK visitor visa, also known as a standard visitor visa or UK traveller visa, licenses exterior nationals to visit the UK as a traveller, for commerce, for consideration, and other permitted works out for a brief period of up to 6 months......<br></br>
                <ReadMore country={"uk"} link={'VisitVisa'} />
                </div>}, 
                ]             
            },
            "canada":{headimg:"canada.jpg","headhead":"Canada","headinfo":basic,"maincontent":[{"main":"maincanada","img":"canadasea.jpg","head":"Why to study in Canada","info":<div style={{lineHeight:1.8}}><h4 className='h44'>Economic Opportunities </h4>: Explore Thriving Economic Prospects In Canada.<br></br>
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
            },
            "germany":{
                headimg:"GermanyFlag.jpg",headead:"Germany",headinfo:basic,maincontent:[{main:"maingermany",img:"GFlag.jpg",head:"Why to study in Germany",info:<div>Germany is eminent for its instruction framework that values availability. Most college courses are tuition-free, empowering understudies to seek after their scholastic goals without the monetary burden commonly found in other countries. Indeed private colleges, whereas less in number, have generally lower expenses compared to worldwide counterparts. 
                    <br></br><ReadMore country={"germany"} link={"Why"} /></div>},
            {main:"studyvisagermany",img:"Germanyy.jpg",head:"Study Visa Process",info:<div>
Germany stands tall as a beacon of educational excellence, attracting students from around the globe with its renowned universities, cutting-edge research facilities, and vibrant academic culture. For those aspiring to pursue their academic dreams in this dynamic nation, obtaining a German student visa is the vital first step towards a transformative educational experience. This essay delves into the intricacies of the German student visa process, illuminating the requirements, procedures, and the broader significance of this journey.
<br></br>
<ReadMore country={"germany"} link={"StudyVisa"} />
            </div>},{main:"visitvisagermany",img:"Germany.jpg",head:"Visit Visa Process",info:<div>
            Germany offers diverse immigration services for individuals looking to relocate. The country provides various visa options, including work visas, student visas, and family reunification visas. The German Federal Office for Migration and Refugees (BAMF) is a key authority overseeing immigration matters.
            <br></br>
            <ReadMore country={"germany"} link={"VisitVisa"} />
            </div>}
            ]
            },
            "hongkong":{headimg:"hong.jpg",headead:"HongKong",headinfo:basic,maincontent:[{main:"mainhongkong",img:"hongvisit.jpg",head:"Visit Visa process",info:<div>Germany is eminent for its instruction framework that values availability. Most college courses are tuition-free, empowering understudies to seek after their scholastic goals without the monetary burden commonly found in other countries. Indeed private colleges, whereas less in number, have generally lower expenses compared...<br></br><ReadMore country={"hongkong"} link={"VisitVisa"} /></div>}]
            },
            "USA":{headimg:"usa1.jpg",headead:"USA",headinfo:basic,maincontent:[{main:"mainusa",img:"visitusa.jpg",head:"Visit Visa process",info:<div>Traveling to the United States is a dream for many people around the world, whether for tourism, education, business, or meeting family and friends. However, before you pack your bags and begin your journey, it is important to understand the intricacies of the US visa application process. This article aims to provide....<br></br><ReadMore country={"USA"} link={"VisitVisa"} /></div>},
            {main:"studyvisausa",img:"OIP.jpg",head:"Study Visa Prcoess",info:<div>The US is home to many prestigious universities known for their high-quality education and cutting-edge research....<br></br>
            <ReadMore link={"StudyVisa"} country={"USA"} />
            </div>}]}
        ,"australia":{headimg:"australia.jpg",headed:"Australia",headinfo:basic,maincontent:[{main:"mainaustralia",img:"australiastudy.jpg",head:"Study Visa Process",info:<div>For an Australian student visa (subclass 500) application you must submit these documents:....<br></br><ReadMore country={"australia"} link={"StudyVisa"} /></div>},
            {main:"visitvisaaustralia",img:"australiavisit.webp",head:"Visit Visa Process",info:<div>The documents you must attach to your Australian tourist visa application include:....<br></br><ReadMore country={"australia"} link={"VisitVisa"} /></div>}
        ]},
        "ireland":{headimg:"ire.jpg",headed:"Ireland",headinfo:basic,maincontent:[{main:"mainireland",img:"studyireland.jpg",head:"Study Visa Process",info:<div>Ireland is renowned for its esteemed education system, vibrant culture, and captivating
        landscapes. Whether you seek higher education or language courses, Ireland offers a
        diverse array of academic opportunities. Our proficient team will aid you in obtaining
        student visas, securing university admissions, and acclimating to student life in Ireland....<br></br><ReadMore link={"StudyVisa"} country={"ireland"} /></div>},
        {main:"visitvisaireland",img:"irelandwall.jpg",head:"Visit Visa Process",info:<div>Immerse yourself in the enchantment of Ireland&#39;s rich history, breathtaking scenery, and
        warm hospitality. Whether you are planning a brief vacation or an extended stay, Ireland
        extends a warm welcome to visitors from across the globe.Experience the allure of Ireland with a visit or tourist visa, affording you the opportunity to
immerse yourself in the splendor of this captivating nation. From the rugged cliffs of the
Wild Atlantic Way to the historic thoroughfares of Dublin, Ireland enthralls guests with its
natural grandeur, profound heritage, and gracious hospitality.....<br></br><ReadMore link={"VisitVisa"} country={"ireland"} /></div>}
        ]},
        "france":{headimg:"France.jpg",headed:"France",headinfo:basic,maincontent:[{main:"mainfrance",img:"francestudy.jpg",head:"Study Visa Process",info:<div>High-quality education and research possibilities are available in France, which is home to some of the top universities in the world as well as famous organizations in a variety of sectors....<br></br>
         <ReadMore country={"france"} link={"StudyVisa"} />
        </div>},
        {main:"visitvisafrance",img:"visitfrance.jpg",head:"Visit Visa Process",info:<div>France is one of the world’s top tourist destinations, welcoming millions of visitors each year. Its tourism industry is diverse, offering something for every type of traveler....<br></br>
        <ReadMore country={"france"} link={"VisitVisa"} />
        </div>}]},
        "new zealand":{headimg:"newz.jpg",headed:"New Zealand",headinfo:basic,maincontent:[{main:"mainnewzealand",img:"newzealandstudy.jpg",head:"Study Visa Process",info:<div>New Zealand is a popular destination among international students who are looking for high-quality
        education. The study visa process is specifically designed to help students achieve their academic
        goals in a safe, welcoming, and multicultural society....<br></br><ReadMore link={"StudyVisa"} country={"New Zealand"} /></div>},
        {main:"visitnewzealand",img:"newzeavisit.jpg",head:"Visit Visa Process",info:<div>
            A New Zealand visitor visa allows you to travel to New Zealand for tourism, visiting friends or family, or other short-term non-work activities. The visitor visa typically permits stays of up to 9 months. To apply, you'll need to meet certain eligibility criteria, provide necessary documentation such as proof of funds and a return ticket, and pay the application fee. You can apply online or through a paper application, and processing times vary....<br></br><ReadMore link={"VisitVisa"} country={"New Zealand"} />
        </div>}
        ]}
        }
          
    return(
        <>
            {
                loc.state?
            (<div ><Image country={loc.state.country} img={data[loc.state.country].headimg} head={loc.state.country} info={data[loc.state.country].headinfo}/>
            <MainContent list={data[loc.state.country].maincontent} />
            </div>):
            
               <div><Header/>
               <div style={{height:'60vh'}}>
               <Flags/>
               </div>
               </div>
          
            }
        </>
    )
}