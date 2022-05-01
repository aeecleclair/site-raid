import { Component } from 'react';
import Footer from '../footer';
import CustomNavBar from '../navbar';
class PageGalerie extends Component {
    state = {  }
    render() {
        return (
            <div>
                <CustomNavBar/>
                <div className='view under-navbar'>
                    <h1>Galerie</h1>
                    <Footer fullpage={false}/>
                </div>
            </div>
        );
    }
}

export default PageGalerie;