import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='footer'>
                <div className='footer-container'>
                    <div className='footer-title'>
                        <h3>Suivez-nous</h3>
                    </div>
                    <div className='links'>
                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={ faFacebook } style={{height: 30}} className='icon'/>
                        </a>
                        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
                            <FontAwesomeIcon icon={ faInstagram } style={{height: 30}} className='icon'/>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;