import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import CustomNavBar from './components/navbar';
import RaidPage from './components/Raid/RaidPage';
import PageEquipe from './components/Equipe/pageEquipe';
import InfoPage from './components/Info/infoPage';
import PageGalerie from './components/Galerie/galeriePage';
import PagePartenaires from './components/Partenaires/partenairePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomNavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/raid" element={<RaidPage/>}/>
            <Route path="/partenaires" element={<PagePartenaires/>}/>
            <Route path="/equipe" element={<PageEquipe/>}/>
            <Route path="/infos" element={<InfoPage/>}/>
            <Route path="/galerie" element={<PageGalerie/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
