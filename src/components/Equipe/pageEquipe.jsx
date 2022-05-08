import CustomFooter from '../footer';
import CustomNavBar from '../navbar';
import { useState } from 'react';

export default function PageEquipe() {
    const [data, setData] = useState([]);
    fetch('assets/equipe/equipe.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err) {
                console.log(err, ' error')
            }
        )
    return (
        <div>
            <CustomNavBar/>
            <div className='view under-navbar'>
                <h1>L'ÉQUIPE</h1>
                {data.map((pole, index) => {
                        return (
                            <div className='pole' key={index}>
                                <h2>{pole.pole}</h2>
                                <div className='membres'>
                                    {
                                        pole.membres.map((membre, index) => {
                                            return (
                                                <div className='membre' key={index}>
                                                    {/* <div className='headshot headshot-1'>
                                                        <img src={process.env.PUBLIC_URL + "assets/IMG_0591.jpg"} alt={membre.nom} />
                                                    </div> */}
                                                    <div className='membre-text'>
                                                        <h3>{membre.prenom} {membre.nom}</h3>
                                                        <a href={'mailto:' + membre.mail}>{membre.mail}</a>
                                                        <p>{membre.fonction}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <CustomFooter fullpage={false}/>
            </div>
        </div>
    );
}