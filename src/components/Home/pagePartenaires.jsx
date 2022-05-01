import Footer from '../footer';
import { useState } from 'react';

export default function PageSponsor() {
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
            <div className='view lastpage'>
                <h1>NOS PARTENAIRES</h1>
                    <div className='sponsors-container'>
                    {data.map((part, index) => {
                        return (
                            <img src={process.env.PUBLIC_URL + "assets/partenaires/images/" + part.img} key={index} width={50}/>
                        )
                    })}
                </div>
            </div>
            <Footer fullpage={false}/>
        </div>
    );
  }
