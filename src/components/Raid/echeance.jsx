import Timeline from '@mui/lab/Timeline';
import EcheanceItem from './echeanceItem';
import Footer from '../footer';
import { useState } from 'react';

export default function Echeance() {
    const [data, setData] = useState([]);
    fetch('assets/Raid/echeances/echeance.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
      return (
        <div>
          <div className='view echeance lastpage'>
            <h1>LES ÉCHÉANCES</h1>
            <Timeline position='alternate' className='timeline'>
              {data.map((echeance, index) => (
                <EcheanceItem
                  key={index}
                  title={echeance.nom}
                  dateDebut={echeance.dateDebut}
                  dateFin={echeance.dateFin}
                  description={echeance.description}
                  isInverted={index % 2 !== 0}
                  isFinal={index === data.length - 1}
                />
              ))}
              </Timeline>
          </div>
          <Footer fullpage={true}/>
        </div>
      );
  }