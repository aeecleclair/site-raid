import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import RaidPage from './components/Raid/RaidPage';
import PageEquipe from './components/Equipe/pageEquipe';
import InfoPage from './components/Info/infoPage';
import PageGalerie from './components/Galerie/galeriePage';
import PagePartenaires from './components/Partenaires/partenairePage';
import DevenirPage from './components/devenirPart/devenirPage';
import InscriptionPage from './components/inscription/inscriptionPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/raid" element={<RaidPage/>}/>
            <Route path="/equipe" element={<PageEquipe/>}/>
            <Route path="/galerie" element={<PageGalerie/>}/>
            <Route path="/infos-pratiques" element={<InfoPage/>}/>
            <Route path="/inscription" element={<InscriptionPage/>}/>
            <Route path="/devenir-partenaire" element={<DevenirPage/>}/>
            <Route path="/nos-partenaires" element={<PagePartenaires/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/* TODO:
        coder hover -> click
        responsive (Home : pres / partenaires, Raid 22: Formule / Echéance, Equipe)
        verif page inscr avec Klavyh
        image nette + assombrisst PXL

        inscription : formulaire d'inscription
        Raid 22 : text / date échéances
        Accueil : photo / text / liste sponso
        Equipe : photo
        partenaires : liste sponso / logo / date / text / text devenir partenaire
        info pratiques : liste question - réponse / autres caté ?
        galerie : photo
*/
