import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faMountain } from '@fortawesome/free-solid-svg-icons';

class Formule extends Component {
    state = {  }
    render() {
        return (
          <div className='view'>
            <h1>LES FORMULES</h1>
            <div className="formuleContainer">
                <div className="formule">
                    <div className="formule-title">
                        <h1>Découverte</h1>
                    </div>
                    <div className="formule-content">
                        <span>
                            Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. At repellat aut officia earum inventore nisi velit cumque dolor. Autem unde necessitatibus animi sit omnis exercitationem est dolorum quidem. Fugiat temporibus est.
                        </span>
                    </div>
                    <div className='formule-data'>
                        <div className='km'>
                            <FontAwesomeIcon icon={faMapLocationDot} style={{height: 40}}/>
                            <span>
                                5 km
                            </span>
                        </div>
                        <div className='d'>
                            <FontAwesomeIcon icon={faMountain} style={{height: 40}}/>
                            <span>
                                D+ 120m
                            </span>
                            <span>
                                D- 80m
                            </span>
                        </div>
                    </div>
                </div>
                <div className="formule">
                    <div className="formule-title">
                        <h1>Sportif</h1>
                    </div>
                    <div className="formule-content">
                        <span>
                            Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. Consequuntur distinctio quo suscipit aut. Rem ad temporibus repellendus et. Dolor a et nihil repudiandae alias ducimus ab. Esse quia dolore temporibus dolore dolore incidunt. Earum aut consequatur libero eligendi aut consequatur rerum. Voluptas expedita possimus nisi quis quaerat ut.
                        </span>
                    </div>
                </div>
                <div className="formule">
                    <div className="formule-title">
                        <h1>Expert</h1>
                    </div>
                    <div className="formule-content">
                        <span>
                            Doloribus qui velit id et dolore est. Laborum fugiat quam optio eveniet. Consequatur quia adipisci culpa atque repellendus. Porro tempora et. Non incidunt velit assumenda. Iure repudiandae et provident reprehenderit eaque excepturi molestiae. Quibusdam necessitatibus deserunt pariatur laboriosam architecto sit est.
                        </span>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
export default Formule;