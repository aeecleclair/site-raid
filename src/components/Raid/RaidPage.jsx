import { Component } from 'react';
import { FullPage, Slide } from 'react-full-page';
import Formule from './formule';
import Echeance from './echeance';
import AvantGout from './avantgout';
import Footer from '../footer';
import CustomNavBar from '../navbar';

class Home extends Component {
    state = {  }
    render() {
        return (
            <FullPage>
                <Slide>
                    <CustomNavBar/>
                    <AvantGout/>
                </Slide>
                <Slide>
                    <Formule/>
                </Slide>
                <Slide>
                    <Echeance/>
                </Slide>
            </FullPage>
        );
    }
}

export default Home;