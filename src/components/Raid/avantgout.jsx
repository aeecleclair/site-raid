import { Component } from 'react';

class AvantGout extends Component {
    state = {  } 
    render() { 
        return (
            <div className='view  under-navbar'>
                <h1>L'AVANT-GOUT</h1>
                <img src={process.env.PUBLIC_URL + "assets/panorama.jpg"} alt="" className='panorama'/>
                <h4 className="panorama-descr">
                    Voici un petit avant-goût des paysages du Raid 2022.
                </h4>
            </div>
        );
    }
}

export default AvantGout;