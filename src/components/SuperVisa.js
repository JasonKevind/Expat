import { useLocation } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
import { Flags } from './Flags';
import { useEffect } from 'react';
export const SuperVisa=()=>{
    const loc=useLocation();
    const data={"canada":<div>
            <h4>Super Visa Visit:</h4>
If you are planning to visit Canada for a short period of time, you will need a Temporary Canada Visa.
Within this category of visas, there are visas dedicated to different purposes of visit. One of these
visas is the Super Visa, which allows parents and grandparents of Canadian citizens or permanent
residents to stay for up to Five years per visit. It provides multiple entries over a validity period of up
to 10 years. To be eligible, you must prove the relationship, undergo a medical exam, and meet
financial criteria. Sponsors must demonstrate the ability to financially support the visitor, and private
medical insurance is mandatory. While processing is generally faster, there is no automatic right to
appeal a refusal, though applicants can reapply. Stay updated on immigration policies through
official channels or seek advice from immigration professionals.
<h4>What is the Canada Super Visa?</h4>
This visa, also known as the Parent Visa in Canada or the Parent and Grandparent Super Visa, falls
under the category of Temporary Resident Visas. It permits close relatives to visit their children and
grandchildren in Canada for a specific duration of time. The individuals receiving the visit must be
either Canadian Permanent Residents or Canadian Citizens.
The Canadian Visitor Visa can help parents and grandparents visit their loved ones in Canada, but the
Super Visa is a better option if they plan to stay for a longer duration. With the Super Visa, parents
and grandparents can stay in Canada for up to 5 years at a stretch, provided they meet the eligibility
criteria. However, during their stay in Canada, they cannot work or enrol in any studies, whether
part-time or full-time. They are also not entitled to Canadian benefits such as health care coverage.
The Super Visa only permits them to spend time with their relatives and explore the country as
tourists.
<h4>What is the Canada Super Visa?</h4>
The Parent and Grandparent Super Visa, also known as the Parent Visa in Canada, is a type of
Temporary Resident Visa that enables close relatives to visit their children and grandchildren in
Canada for a specified period. To be eligible for this visa, the children or grandchildren must be
Canadian Permanent Residents or Citizens.
Although the Canadian Visitor Visa can also be used for this purpose, the Super Visa was specifically
designed to allow parents and grandparents to stay with their loved ones for an extended duration.
The Super Visa permits a maximum stay of up to Five years with their children and grandchildren in
Canada, provided they meet the necessary requirements.
While parents and grandparents are in Canada with the Super Visa, they are not allowed to work or
enroll in any part-time or full-time studies. They are also prohibited from obtaining Canadian
documents or benefits, such as health care coverage, during their stay. Their sole purpose is to visit
their relatives and explore the country.
<h4>How to complete the Super Visa application?</h4>

To apply for a Super Visa, you need to follow these steps:
 Confirm your eligibility for a Super Visa.
 Gather all the required documents and application forms for a Canada Super Visa.
 Submit the Super Visa application.
 Wait for the application to be processed and respond to any additional requests for
information.
 Once your application is approved, send your passport for stamping.
    </div>}
     useEffect(()=>{
        window.scrollTo(0,0);
     },[])
    return (
        <>  <Header />
        {loc.state?
        <div style={{display:'flex',flexDirection:'column',padding:15}}>
          
            <div><h4 style={{textAlign:'center',color:'#333',fontSize:'max(3vh,3vw)'}}>Super Visa for {loc.state.country}</h4></div>
            {data[loc.state.country]}
        </div>:<div>
        <div style={{height:'60vh'}}>
            <Flags/>
        </div>
        </div>
}
        </>
    )
}