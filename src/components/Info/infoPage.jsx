import { Component } from 'react';
import Footer from '../footer';
class PageInfo extends Component {
    state = {  }
    render() {
        const qa = [
            {
                "question": "Dolores ipsam deleniti aperiam nam pariatur.",
                "reponse": "Quibusdam deserunt quasi sed voluptatem sapiente sint. Et sed unde. Dolor sint qui quia molestiae impedit sapiente. Neque sint labore. Voluptatem iste aliquid aliquam. Ut et minima natus reprehenderit."
            },
            {
                "question": "Qui quia quisquam quisquam.",
                "reponse": "Quibusdam deserunt quasi sed voluptatem sapiente sint. Et sed unde. Dolor sint qui quia molestiae impedit sapiente. Neque sint labore. Voluptatem iste aliquid aliquam. Ut et minima natus reprehenderit."
            },
            {
                "question": "Qui quia quisquam quisquam.",
                "reponse": "Quibusdam deserunt quasi sed voluptatem sapiente sint. Et sed unde. Dolor sint qui quia molestiae impedit sapiente. Neque sint labore. Voluptatem iste aliquid aliquam. Ut et minima natus reprehenderit."
            },
        ]
        return (
            <div className='view under-navbar'>
                <div className='info-container'>
                    <h1>INFOS PRATIQUES</h1>
                    <div className='info-content'>
                        <h2>Questions fréquentes</h2>
                        <div className='info-content-item-content'>
                            {qa.map((q, index) => {
                                return (
                                    <div className='info-content-item-content-item'>
                                        <h3>{q.question}</h3>
                                        <h5>{q.reponse}</h5>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer fullpage={false}/>
            </div>
        );
    }
}

export default PageInfo;