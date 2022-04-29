import { Component } from 'react';
import CustomCarousel from './carousel';
import { FullPage, Slide } from 'react-full-page';
import PagePresentation from './pagePresentation';
import PageSponsor from './pagePartenaires';
import Footer from '../footer';
import CustomNavBar from '../navbar';


class Home extends Component {
    state = {  }
    render() {
        return (
            <FullPage>
                <Slide>
                    <CustomNavBar/>
                    <CustomCarousel />
                </Slide>
                <Slide>
                    <PagePresentation/>
                </Slide>
                <Slide>
                    <PageSponsor/>
                </Slide>
            </FullPage>
        );
    }
}

export default Home;