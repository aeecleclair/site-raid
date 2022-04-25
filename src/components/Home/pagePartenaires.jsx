import { Component } from 'react';

class PageSponsor extends Component {
  state = {  }
  render() {
    const imgs = ["/assets/Sponsors/278745350_825237028432975_5550152447747670606_n.png",
                    "/assets/Sponsors/278915745_2227423080750332_8204296722146432036_n.png",
                    "/assets/Sponsors/278932931_362582042494783_2952660439822873755_n.png",
                    "/assets/Sponsors/278934105_662754328136477_2257120266721942580_n.png",
                    "/assets/Sponsors/278780462_4539496889484575_5383846851727519249_n.png",]
    return (
        <div className='view last-page'>
            <h1>NOS PARTENAIRES</h1>
                <div className='sponsors-container'>
                {imgs.map((img, index) => {
                    return (
                        <div className='sponsors-image'>
                            <img src={process.env.PUBLIC_URL + img} alt="" height={100} width={"auto"}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
  }
}

export default PageSponsor;