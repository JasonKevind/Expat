import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Flags } from './components/Flags';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Country } from './components/Country';
import { Why } from './components/Why';
function App() {
  return (
    <>
    
    <div className="App">
     <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/Country" element={<Country />} />
        <Route path="/Why" element={<Why/>} />
     </Routes>
    </div>
    <Flags />
    <Footer />
    </>
  );
}

export default App;
