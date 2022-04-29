import { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import EcheanceItem from './echeanceItem';
import Footer from '../footer';

class Echeance extends Component {
    state = {  }
    render() {
        return (
          <div>
            <div className='view echeance lastpage'>
              <h1>LES ÉCHÉANCES</h1>
              <Timeline position='alternate' className='timeline'>
                <EcheanceItem title="Inscriptions" dateDebut="25/04/2022" dateFin="26/04/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isInverted={false} isFinal={false}/>
                <EcheanceItem title="Validation des dossiers" dateDebut="25/04/2022" dateFin="01/10/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isFinal={false} isInverted={true}/>
                <EcheanceItem title="Raid" dateDebut="08/10/2022" dateFin="09/10/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isFinal={true} isInverted={false}/>
              </Timeline>
            </div>
            <Footer fullpage={true}/>
          </div>
          
        );
    }
}
export default Echeance;