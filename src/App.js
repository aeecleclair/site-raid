import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import CustomNavBar from './components/navbar';
import RaidPage from './components/Raid/RaidPage';
import PageEquipe from './components/Equipe/pageEquipe';
import InfoPage from './components/Info/infoPage';
import PageGalerie from './components/Galerie/galeriePage';
import PagePartenaires from './components/Partenaires/partenairePage';
import DevenirPage from './components/devenirPart/devenirPage';
import InscriptionPage from './components/Inscription/inscriptionPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <CustomNavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/raid" element={<RaidPage/>}/>
            <Route path="/nos-partenaires" element={<PagePartenaires/>}/>
            <Route path="/devenir-partenaire" element={<DevenirPage/>}/>
            <Route path="/equipe" element={<PageEquipe/>}/>
            <Route path="/infos-pratiques" element={<InfoPage/>}/>
            <Route path="/galerie" element={<PageGalerie/>}/>
            <Route path="/inscription" element={<InscriptionPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/* TODO:
        Accueil : (photo) / style page video + (text) / (liste sponso)
        Equipe : (photo) + mail + cas 5 pers
        inscription : embed formulaire + (text)
        Admin : regrouper tt text ds 1 fichier + photo + video + pdf + ...
        Raid 22 : (text) + (date échéances) + (style avec tps)
        partenaires : (liste sponso) + (logo) + (date) + (text) + (text devenir partenaire)
        info pratiques : (liste question - réponse) + (autres caté) ?
        galerie : (photo) + (video) + (text)
*/
