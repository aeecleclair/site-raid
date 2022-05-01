import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

export default function Footer() {
    const [data, setData] = useState([]);
    fetch('assets/partenaires/partenaires.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
    var c = this.props.fullpage ? "footer1": "footer2";
    return (
        <div className={c}>
            <div className='footer-container'>
                <div className='footer-title'>
                    <h3>Suivez-nous</h3>
                </div>
                {/* https://codepen.io/dsyncerek/pen/zzqpEx */}
                <div className='links social-buttons'>
                    <a href={data.facebook} target='_blank' rel='noopener noreferrer' className="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                            <FontAwesomeIcon icon={ faFacebookF } style={{height: 30}}/>
                    </a>
                    <a href={data.instagram} target='_blank' rel='noopener noreferrer' className="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
                        <FontAwesomeIcon icon={ faInstagram } style={{height: 30}}/>
                    </a>
                </div>
            </div>
            <div className='footer-container2'>
                <div className='footer-title'>
                    <h3>Contact</h3>
                </div>
                <div className='links'>
                    <a href={'mailto:' + data.mail}>{data.mail}</a>
                </div>
            </div>
        </div>
    );
}