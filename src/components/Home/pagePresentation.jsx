import { Component } from 'react';

class PagePresentation extends Component {
    state = {  }
    render() {
        return (
          <div className='view presentation'>
            <h1>RAID CENTRALE LYON</h1>
            <div className='pres'>
              <div className='video'>
                <div>
                  <iframe src="https://www.youtube.com/embed/Z9evFRJPXts?start=7&rel=0&amp;autoplay=1&mute=1" title="Raid 2021 (Crédit PIXELS)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                {/* <span>
                  Raid 2021 (Crédit PIXELS)
                </span> */}
              </div>
              <div/>
              <div className='descr'>
                <h2>Le Raid en quelques mots</h2>
                <h5>
                  Odit aliquid ipsum excepturi tempore rem adipisci facilis. Corporis distinctio laboriosam velit qui blanditiis voluptatibus explicabo.
                  Qui quia quisquam quisquam.
                  <br/>
                  Harum molestiae et. Pariatur magnam mollitia ipsa dolorem tenetur nisi magnam eius dolorem. Et quis nostrum.
                  <br/>
                  Ipsam magnam sapiente. Vero ut eum accusamus eligendi in libero perferendis similique quia. Hic reiciendis debitis qui magnam ipsa autem. Magni voluptas autem et nobis vel natus. Voluptas laborum numquam inventore praesentium expedita. Nemo est suscipit laboriosam.
                </h5>
              </div>
            </div>
          </div>
        );
    }
}
export default PagePresentation;
