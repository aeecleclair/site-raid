import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
                    {/* https://codepen.io/dsyncerek/pen/zzqpEx */}
                    <div className='links social-buttons'>
                        <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' class="social-buttons__button social-button social-button--facebook" aria-label="Facebook">
                             <FontAwesomeIcon icon={ faFacebookF } style={{height: 30}}/>
                        </a>
                        <a href='https://www.instagram.com/raid_centrale_lyon/' target='_blank' rel='noopener noreferrer' class="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
                            <FontAwesomeIcon icon={ faInstagram } style={{height: 30}}/>
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