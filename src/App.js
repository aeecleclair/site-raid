import './App.css';
import CustomNavBar from './components/navbar';
import CustomCarousel from './components/carousel';
import { FullPage, Slide } from 'react-full-page';
import PagePresentation from './components/pagePresentation';
import Formule from './components/formule';
import Echeance from './components/echeance';

function App() {
  return (
    <div className="App">
      <CustomNavBar />
      <FullPage>
        <Slide>
          <CustomCarousel />
        </Slide>
        <Slide>
          <PagePresentation/>
        </Slide>
        <Slide>
          <Formule/>
        </Slide>
        <Slide>
          <Echeance/>
        </Slide>
      </FullPage>
    </div>
  );
}

export default App;
