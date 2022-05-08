import { Component } from 'react';
import CustomCarousel from './carousel';
import PagePresentation from './pagePresentation';
import PageSponsor from './pagePartenaires';
import CustomNavBar from '../navbar';
import ReactPageScroller from "react-page-scroller";



class Home extends Component {
    state = {  }
    render() {
        return (
            <ReactPageScroller>
                <div className='full-page'>
                    <CustomNavBar/>
                    <CustomCarousel />
                </div>
                <PagePresentation/>

                <PageSponsor/>
            </ReactPageScroller>
        );
    }
}

export default Home;