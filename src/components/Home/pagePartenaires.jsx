import CustomFooter from '../footer';
import { useState } from 'react';
import Marquee from "react-fast-marquee";

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
            <div className='view lastpage full-page'>
                <h1>NOS PARTENAIRES</h1>
                {
                    data.length > 3
                    ? <Marquee className='sponsors-container' speed={100}>
                        {data.map((part, index) => {
                            return (
                                <img src={process.env.PUBLIC_URL + "assets/partenaires/images/" + part.img} key={index} alt="" className="sponsors-image"/>
                            )
                        })}
                    </Marquee>
                : data.map((part, index) => {
                        return (
                            <img src={process.env.PUBLIC_URL + "assets/partenaires/images/" + part.img} key={index} alt="" className="sponsors-image static"/>
                        )
                    })
                }
            </div>
            <CustomFooter fullpage={false}/>
        </div>
    );
  }
