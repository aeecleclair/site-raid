import { Component } from 'react';
import Timeline from '@mui/lab/Timeline';
import EcheanceItem from './echeanceItem';

class Echeance extends Component {
    state = {  }
    render() {
        return (
          <div className='view echeance'>
            <h1>LES ÉCHÉANCES</h1>
            <div style={{height: 100}}></div>
            <Timeline position='alternate'>
              <EcheanceItem title="Inscriptions" date="01/06/2022 - 01/07/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isInverted={false} isFinal={false}/>
              <EcheanceItem title="Validation des dossiers" date="01/07/2022 - 01/10/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isFinal={false} isInverted={true}/>
              <EcheanceItem title="Raid" date="08/10/2022 - 09/10/2022" description="Unde omnis error dicta et. Tenetur autem est voluptatum debitis rerum. Qui hic aut illum neque dolore quia occaecati id. Asperiores eius fuga." isFinal={true} isInverted={false}/>
            </Timeline>
          </div>
        );
    }
}
export default Echeance;