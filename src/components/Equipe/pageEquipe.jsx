import React, { useState, useEffect } from 'react';
import CustomFooter from '../footer';
import CustomNavBar from '../navbar';

export default function PageEquipe() {
    const [cached, setCached] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!cached) {
            fetch('assets/equipe/equipe.json')
                .then((res) => res.json())
                .then((json) => setData(json))
                .catch(function (err) {
                    console.log(err, " error");
                })
                .then(() => setCached(true))
                .then(() => console.log("data fetched equipe"));
        }
    }, [cached]);

    return (
        <div>
            <CustomNavBar />
            <div className='view under-navbar'>
                <h1>L'ÉQUIPE</h1>
                {data.map((pole, index) => {
                    const nbMembres = pole.membres.length;

                    return (
                        <div className='pole' key={index}>
                            <h2>{pole.pole}</h2>
                            <div className='membres' style={{ 
                                display: 'flex', 
                                flexWrap: 'wrap', 
                                justifyContent: 'center', 
                                gap: '20px' 
                            }}>
                                {
                                    pole.membres.map((membre, index) => {
                                        const flexBasis = 'calc(25% - 20px)'; 
                                        
                                        const forceBreak = (nbMembres === 5 || nbMembres === 6) && index === 2;

                                        return (
                                            <React.Fragment key={index}>
                                                <div className='membre' style={{
                                                    flex: `0 0 ${flexBasis}`, 
                                                    maxWidth: flexBasis,
                                                    minWidth: '230px' // Sécurité pour que ça reste joli sur mobile/tablette
                                                }}>
                                                    {
                                                        membre.img
                                                            ? <div className='headshot headshot-1'>
                                                                <img src={process.env.PUBLIC_URL + "assets/equipe/images/" + membre.img} alt={membre.nom} style={{ maxWidth: '100%', height: 'auto' }} />
                                                            </div>
                                                            : <></>
                                                    }
                                                    <div className='membre-text'>
                                                        <h3>{membre.prenom} {membre.nom}</h3>
                                                        <a href={'mailto:' + membre.mail}>{membre.mail}</a>
                                                        <p>{membre.fonction}</p>
                                                    </div>
                                                </div>
                                                
                                                {}
                                                {forceBreak && <div style={{ flexBasis: '100%', height: 0 }}></div>}
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })}
                <CustomFooter fullpage={false} />
            </div>
        </div>
    );
}