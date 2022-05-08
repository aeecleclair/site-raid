import FormuleItem from './formuleItem';
import { useState } from 'react';

export default function Formule() {
    const [data, setData] = useState([]);
    fetch('assets/Raid/formule/formule.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
      return (
        <div className='view full-page'>
          <h1>LES FORMULES</h1>
          <div className='formule-container'>
              {data.map((formule, index) => (
                  <FormuleItem key={index} title={formule.nom} content={formule.description} km={formule.km} dPlus={formule.dp} dMinus={formule.dm}/>
              ))}
          </div>
        </div>
      );
  }