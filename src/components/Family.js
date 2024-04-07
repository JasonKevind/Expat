import { useLocation } from 'react-router-dom';
import '../App.css';
import { Header } from './Header';
import { Flags } from './Flags';
export const Family=()=>{
    const loc=useLocation();
    const data={"ireland":
        <div>Reuniting with family members in Ireland is facilitated through the family visa program,
specifically designed to enable the immigration of family members of Irish citizens or legal
residents. Whether the intention is to join a spouse, parent, child, or other relatives, Ireland
warmly embraces families seeking reunion.
The family visa application process typically necessitates the provision of evidence
establishing the familial relationship, documentation demonstrating financial support, and
confirmation of accommodation arrangements in Ireland. Upon successful approval, you
and your family can relish invaluable moments together, forging new memories amidst
Ireland&#39;s captivating landscapes and vibrant communities.
Whether contemplating a brief visit or a permanent resettlement, the family visa offers a
conduit for fortifying familial bonds and establishing a shared future in Ireland.
    <br></br>
   <h4> About Ireland Family Visa:</h4>
The Ireland Family Visa enables individuals to join their family members who are already
living in Ireland. Its purpose is to promote family reunification and allows various family
members to be reunited under specific conditions.
<h4>Benefits of Ireland Family Visa:
</h4><ul>
<li> Family Reunification: The visa facilitates the reunion of family members already
residing in Ireland.
</li><li>Access to Services: Visa holders have access to public services such as healthcare and
education.
</li><li> Work Opportunities: Depending on the visa type, certain family members may be
eligible to work in Ireland.
</li><li> Long-Term Stay: The visa allows for a prolonged stay in Ireland, enabling families to
live together and create lasting memories.
</li></ul>
<h4>Eligibility Criteria:</h4>
<ul>To be eligible for an Ireland Family Visa, applicants typically need to meet the following
criteria:
<li> Relationship Requirement: Applicants must have a family member who is either an
Irish citizen or a lawful resident in Ireland.
</li><li> Financial Support: The sponsor in Ireland must demonstrate the ability to financially
support the applicant.
</li><li> Accommodation: Evidence of suitable accommodation arrangements for the
applicant must be provided.
</li><li> Health Insurance: Applicants may be required to have health insurance coverage
during their stay in Ireland.
</li><li> Good Character: Applicants must prove they have no criminal record and are of good
character.</li>
</ul>
<h4>Cost Breakdown:</h4>
<ul>The cost associated with the Ireland Family Visa process may include:
<li> Visa application: Fees vary based on the type of visa and the applicant&#39;s nationality.
</li><li> Biometric Residence Permit (BRP) Fee: If applicable, there may be a fee for the BRP,
which allows individuals to reside in Ireland for a specified period.
</li><li> Translation and Documentation Costs: Fees associated with translating documents
into English or obtaining necessary certifications may apply.
</li><li> Health Insurance: The cost of health insurance coverage for the duration of the stay
in Ireland.
</li><li>Miscellaneous Expenses: Additional expenses such as travel to the visa application
center or any other incidental costs.
</li></ul>
<h4>Other Supported Information:</h4>
<ul>
<h4>Supplementary information and resources pertaining to the Ireland Family Visa process
may encompass:</h4>
<h4>Application Process:</h4>
<li> A comprehensive, step-by-step manual elucidating the application procedure for the
Ireland Family Visa, encompassing the requisite documentation and forms.
</li><li> Processing Times: Projections of the processing durations for visa applications and
variables that may impact the processing pace.
</li><li> Frequently Asked Questions (FAQs): Kindly direct your queries concerning the Ireland
Family Visa, eligibility stipulations, and application protocols to our team for prompt
resolution.</li>
By furnishing exhaustive details on the Ireland Family Visa, our objective is to aid applicants
in effectively navigating the visa process and expediting family reunification in Ireland. For
further assistance and inquiries, please do not hesitate to reach out to Expats Immigration
Services Services Services Services Services Services Services Services for tailored support.
   </ul> 
    </div>}
    return(
        <>
       <Header />
        {
            loc.state?
        <div style={{display:'flex',gap:15,flexDirection:'column',alignItems:'justify',padding:20,lineHeight:2.5}}>
        <div style={{textAlign:"center"}}><h3>Family Visa Process of {loc.state.country[0].toUpperCase()+loc.state.country.substring(1,)}</h3></div>
        {data[loc.state.country]}
        </div>:
        <div style={{height:'100vh'}} >
        <Flags />
        </div>
        }
        </>
    )
}