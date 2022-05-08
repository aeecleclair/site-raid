import { Component } from 'react';
import Formule from './formule';
import Echeance from './echeance';
import AvantGout from './avantgout';
import CustomNavBar from '../navbar';
import ReactPageScroller from "react-page-scroller";

class Home extends Component {
    state = {  }
    render() {
        return (
            <ReactPageScroller>
                <div className='full-page'>
                    <CustomNavBar/>
                    <AvantGout/>
                </div>
                <Formule/>
                <Echeance/>
            </ReactPageScroller>
        );
    }
}

export default Home;