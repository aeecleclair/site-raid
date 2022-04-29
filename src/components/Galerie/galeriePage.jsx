import { Component } from 'react';
import Footer from '../footer';
import { FullPage, Slide } from 'react-full-page';
import CustomNavBar from '../navbar';
import CustomCarousel from '../Home/carousel';
import PagePresentation from '../Home/pagePresentation';
import PageSponsor from '../Home/pagePartenaires';
class PageGalerie extends Component {
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
                    {/* <Footer fullpage={true}/> */}
                </Slide>
            </FullPage>
        );
    }
}

export default PageGalerie;