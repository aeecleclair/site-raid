import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';
import { useState } from 'react';

export default function PagePartenaires() {
    const [data, setData] = useState([]);
    fetch('assets/partenaires/partenaires.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
    return (
        <div>
            <CustomNavBar/>
            <div className='view under-navbar'>
                <h1>NOS PARTENAIRES</h1>
                <div className='partenaire-container'>
                    {data.map((part, index) => {
                        return (
                            <div className='partenaire-image'>
                                <img src={process.env.PUBLIC_URL + "assets/partenaires/images/" + part.img} alt="" height={100} width={"auto"}/>
                                <div className='partenaire-descr'>
                                    <h3>{part.nom}</h3>
                                    {part.edition.length > 0 ? <h6>Editions : {part.edition.join(', ')}</h6> : <h6>Nouveau partenaire !</h6>}
                                    <h6>{part.description}</h6>
                                    <div className='partenaire-url'>
                                        <h6>En savoir plus : </h6>
                                        <a href={part.url} target="_blank" rel="noopener noreferrer">
                                            <h6>{part.url}</h6>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Footer fullpage={false}/>
            </div>
        </div>
    );
}