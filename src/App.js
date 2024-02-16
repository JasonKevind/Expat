import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Flags } from './components/Flags';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Country } from './components/Country';
import { Why } from './components/Why';
import { VisitVisa } from './components/VisitVisa';
import { StudyVisa } from './components/StudyVisa';
import { PR } from './components/PR';
function App() {
  return (
    <>
    
    <div className="App">
     <Routes>
        <Route index path="/" element={<Home flags={true} />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Why" element={<Why/>} />
        <Route path='/VisitVisa' element={<VisitVisa/>} />
        <Route path='/StudyVisa' element={<StudyVisa />} />
        <Route path='/PR' element={<PR />} />
     </Routes>
    </div>
   
    <Footer />
    </>
  );
}

export default App;
