import { Component } from 'react';

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
                    },
                    {
                        "nom": "KAASSIS",
                        "prenom": "Paul",
                        "fonction": "Secrétaire général",
                    },
                    {
                        "nom": "COULON",
                        "prenom": "Jules",
                        "fonction": "Trésorier",
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
                    },
                    {
                        "nom": "LAURENS-BERGE",
                        "prenom": "Rémi",
                        "fonction": "Log-Parcours",
                    },
                    {
                        "nom": "ROUCHER",
                        "prenom": "Maxime",
                        "fonction": "Responsable Sécurité",
                    },
                    {
                        "nom": "BOUSCAILLOU",
                        "prenom": "Gaëtan",
                        "fonction": "VP Parcours",
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
                    },
                    {
                        "nom": "PHILIPPE",
                        "prenom": "Florent",
                        "fonction": "VP Logistique",
                    },
                    {
                        "nom": "ROUX",
                        "prenom": "Xavier",
                        "fonction": "VP Logistique",
                    },
                    {
                        "nom": "SPELLE",
                        "prenom": "Rémy",
                        "fonction": "VP Logistique",
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
                    },
                    {
                        "nom": "ORTALO",
                        "preom": "Théodore",
                        "fonction": "VP Sponsors",
                    },
                    {
                        "nom": "PIOLA",
                        "prenom": "Ugo",
                        "fonction": "VP Sponsors",
                    },
                    {
                        "nom": "POSTEC",
                        "prenom": "Loan",
                        "fonction": "VP Sponsors",
                    },
                ]
            },
            {
                "pole": "Communication",
                "membres": [
                    {
                        "nom": "LINET",
                        "prenom": "Alexandre",
                        "fonction": "VP Communication",
                    },
                    {
                        "nom": "PUJOL",
                        "prenom": "Pierre",
                        "fonction": "VP Communication",
                    }
                ]
            },
        ]
        return (
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
                                                        <img src={'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=350&h=350&fit=crop&crop=faces'} alt={membre.nom} />
                                                    </div>
                                                    <div className='membre-text'>
                                                        <h3>{membre.prenom} {membre.nom}</h3>
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
            </div>
        );
    }
}

export default PageEquipe;