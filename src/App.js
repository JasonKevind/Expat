import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Country } from './components/Country';
import { Why } from './components/Why';
import { VisitVisa } from './components/VisitVisa';
import { StudyVisa } from './components/StudyVisa';
import { PR } from './components/PR';
import { SuperVisa } from './components/SuperVisa';
import { About } from './components/About';
import { WorkVisa } from './components/WorkVisa';
import { Contact } from './components/Contact';
import { Register } from './components/Register';
import { Family } from './components/Family';
function App() {
  return (
   <div className="App">
    
     <Routes>
        <Route index path="/" element={<Home flags={true} />} />
        <Route path="/Country" element={<Country />} />
        <Route path='/AboutUs' element={<About/>}  />
        <Route path="/Why" element={<Why/>} />
        <Route path="/WorkVisa" element={<WorkVisa/>} />
        <Route path='/VisitVisa' element={<VisitVisa/>} />
        <Route path='/StudyVisa' element={<StudyVisa />} />
        <Route path='/PR' element={<PR />} />
        <Route path='SuperVisa' element={<SuperVisa/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/FamilyVisa" element={<Family />} />
        <Route path="*" element={<Home/>} />
     </Routes>
      <Footer/>
    </div>
  );
}
export default App;