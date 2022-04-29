import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';
class PageEquipe extends Component {
    state = {  }
    render() {
        const poles = [
            {
                "pole": "Bureau",
                "membres": [
                    {
                        "nom": "MAILLARD",
                        "prenom": "Chloé",
                        "fonction": "Presidente",
                        "mail": "chloe.maillard@ecl21.ecl-lyon.fr"
                    },
                    {
                        "nom": "KAASSIS",
                        "prenom": "Paul",
                        "fonction": "Secrétaire général",
                        "mail": "paul.kaassis@ecl21.ec-lyon.fr"
                    },
                    {
                        "nom": "COULON",
                        "prenom": "Jules",
                        "fonction": "Trésorier",
                        "mail": "jules.coulon@ecl21.ec-lyon.fr"
                    },
                ]
            },
            {
                "pole": "Parcours",
                "membres": [
                    {
                        "nom": "GATEUIL",
                        "prenom": "Corentin",
                        "fonction": "Responsable Parcours",
                        "mail": "corention.gateuil@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "ROUCHER",
                        "prenom": "Maxime",
                        "fonction": "Responsable Sécurité",
                        "mail": "maxime.roucher@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "LAURENS-BERGE",
                        "prenom": "Rémi",
                        "fonction": "VP Log-Parcours",
                        "mail": "remi.laurens-berge@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "BOUSCAILLOU",
                        "prenom": "Gaëtan",
                        "fonction": "VP Parcours",
                        "mail": "gaetan.bouscaillou@ecl21.ec-lyon.fr",
                    }
                ]
            },
            {
                "pole": "Logistique",
                "membres": [
                    {
                        "nom": "DKAKI",
                        "prenom": "Zakaria",
                        "fonction": "Responsable Logistique",
                        "mail": "zakaria.dkaki@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "PHILIPPE",
                        "prenom": "Florent",
                        "fonction": "VP Logistique",
                        "mail": "florent.philippe@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "ROUX",
                        "prenom": "Xavier",
                        "fonction": "VP Logistique",
                        "mail": "xavier.roux@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "SPELLE",
                        "prenom": "Rémy",
                        "fonction": "VP Logistique",
                        "mail": "remy.spelle@ecl21.ec-lyon.fr",
                    },
                ]
            },
            {
                "pole": "Sponsors",
                "membres": [
                    {
                        "nom": "BRAULT",
                        "prenom": "Corentin",
                        "fonction": "Responsable Sponsors",
                        "mail": "corentin.brault@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "ORTALO",
                        "prenom": "Théodore",
                        "fonction": "VP Sponsors",
                        "mail": "theodore.ortalo@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "PIOLA",
                        "prenom": "Ugo",
                        "fonction": "VP Sponsors",
                        "mail": "ugo.piola@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "POSTEC",
                        "prenom": "Loan",
                        "fonction": "VP Sponsors",
                        "mail": "loan.postec@ecl21.ec-lyon.fr",
                    }
                ]
            },
            {
                "pole": "Communication",
                "membres": [
                    {
                        "nom": "LINET",
                        "prenom": "Xavier",
                        "fonction": "VP Communication",
                        "mail": "xavier.linet@ecl21.ec-lyon.fr",
                    },
                    {
                        "nom": "PUJOL",
                        "prenom": "Pierre",
                        "fonction": "VP Communication",
                        "mail": "pierre.pujol@ecl21.ec-lyon.fr",
                    }
                ]
            },
        ]
        return (
            <div>
                <CustomNavBar/>
                <div className='view under-navbar'>
                    <h1>L'ÉQUIPE</h1>
                    {poles.map((pole, index) => {
                            return (
                                <div className='pole' key={index}>
                                    <h2>{pole.pole}</h2>
                                    <div className='membres'>
                                        {
                                            pole.membres.map((membre, index) => {
                                                return (
                                                    <div className='membre' key={index}>
                                                        <div className='headshot headshot-1'>
                                                            <img src={process.env.PUBLIC_URL + "assets/IMG_0591.jpg"} alt={membre.nom} />
                                                        </div>
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
                    <Footer fullpage={false}/>
                </div>
            </div>
        );
    }
}

export default PageEquipe;