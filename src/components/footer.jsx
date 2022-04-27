import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    state = {  }
    render() {
        var c = this.props.fullpage ? "footer1": "footer2";
        return (
            <div className={c}>
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
                <div className='footer-container2'>
                    <div className='footer-title'>
                        <h3>Contact</h3>
                    </div>
                    <div className='links'>
                        <a href='mailto: eclraid@gmail.com'>eclraid@gmail.com</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;