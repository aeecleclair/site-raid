import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';

class PagePartenaires extends Component {
    state = {  }
    render() {
        const parts = [
            {
                "nom": "Au Vieux Campeur",
                "img": "/assets/Sponsors/278932931_362582042494783_2952660439822873755_n.png",
                "descr": "Autem doloremque temporibus unde labore quia inventore nemo esse aut. Voluptatem facere vitae amet provident similique et molestiae totam ratione. Fugit ipsam aspernatur dolorem qui vel maiores et. Nemo delectus eius non rerum quo facilis. Voluptates aut dolores sint aperiam ratione harum quisquam rem.",
                "url": "https://www.auvieuxcampeur.fr/",
                "edition": [
                    "2019",
                    "2018",
                ]
            },
            {
                "nom": "ISOstéo",
                "img": "/assets/Sponsors/278745350_825237028432975_5550152447747670606_n.png",
                "descr": "Autem doloremque temporibus unde labore quia inventore nemo esse aut. Voluptatem facere vitae amet provident similique et molestiae totam ratione. Fugit ipsam aspernatur dolorem qui vel maiores et. Nemo delectus eius non rerum quo facilis. Voluptates aut dolores sint aperiam ratione harum quisquam rem.",
                "url": "https://www.isosteo.fr/",
                "edition": [
                    "2019",
                ]
            },
            {
                "nom": "MARCHÉ DE GROS LYON-CORBAS",
                "img": "/assets/Sponsors/278915745_2227423080750332_8204296722146432036_n.png",
                "descr": "Autem doloremque temporibus unde labore quia inventore nemo esse aut. Voluptatem facere vitae amet provident similique et molestiae totam ratione. Fugit ipsam aspernatur dolorem qui vel maiores et. Nemo delectus eius non rerum quo facilis. Voluptates aut dolores sint aperiam ratione harum quisquam rem.",
                "url": "https://www.marchedegros-lyoncorbas.com/",
                "edition": [
                    "2017",
                    "2016",
                ]
            },
            {
                "nom": "MICHELIN",
                "img": "/assets/Sponsors/278934105_662754328136477_2257120266721942580_n.png",
                "descr": "Autem doloremque temporibus unde labore quia inventore nemo esse aut. Voluptatem facere vitae amet provident similique et molestiae totam ratione. Fugit ipsam aspernatur dolorem qui vel maiores et. Nemo delectus eius non rerum quo facilis. Voluptates aut dolores sint aperiam ratione harum quisquam rem.",
                "url": "https://www.michelin.fr/",
                "edition": []
            },
            {
                "nom": "PWC",
                "img": "/assets/Sponsors/278780462_4539496889484575_5383846851727519249_n.png",
                "descr": "Autem doloremque temporibus unde labore quia inventore nemo esse aut. Voluptatem facere vitae amet provident similique et molestiae totam ratione. Fugit ipsam aspernatur dolorem qui vel maiores et. Nemo delectus eius non rerum quo facilis. Voluptates aut dolores sint aperiam ratione harum quisquam rem.",
                "url": "https://www.pwc.fr/",
                "edition": []
            },
        ]
        return (
            <div>
                <CustomNavBar/>
                <div className='view under-navbar'>
                    <h1>PARTENAIRES</h1>
                    <div className='partenaire-container'>
                        {parts.map((part, index) => {
                            return (
                                <div className='partenaire-image'>
                                    <img src={process.env.PUBLIC_URL + part.img} alt="" height={100} width={"auto"}/>
                                    <div className='partenaire-descr'>
                                        <h3>{part.nom}</h3>
                                        {part.edition.length > 0 ? <h6>Editions : {part.edition.join(', ')}</h6> : <h6>Nouveau partenaire !</h6>}
                                        <h6>{part.descr}</h6>
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
}

export default PagePartenaires;