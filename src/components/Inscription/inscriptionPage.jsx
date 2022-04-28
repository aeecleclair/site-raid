import { Component } from 'react';
import Footer from '../footer';

class InscriptionPage extends Component {
    state = {  }
    render() {
        return (
            <div className='view under-navbar'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdyd3Ut2IDkACoa5P4HMfJt4pB6nLYxVHVHN00dagJz8gedbw/viewform?embedded=true" width="640" frameborder="0" marginheight="0" marginwidth="0" title="form" className='form'>Chargement…</iframe>
                <Footer/>
            </div>
        );
    }
}

export default InscriptionPage;