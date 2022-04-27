import { Component } from 'react';
import Footer from '../footer';
class PageInfo extends Component {
    state = {  }
    render() {
        return (
            <div className='view under-navbar'>
                <h1>INFOS PRATIQUES</h1>
                <Footer fullpage={false}/>
            </div>
        );
    }
}

export default PageInfo;