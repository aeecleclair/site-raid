import { useState } from 'react';


export default function PagePresentation() {
  const [data, setData] = useState([]);
  fetch('assets/home/pagePresentation/pagePresentation.json')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(
          function(err){
          console.log(err, ' error')
          }
      )
      return (
        <div className='view presentation'>
          <h1>RAID CENTRALE LYON</h1>
          <div className='pres'>
            <div className='video'>
              <div>
                <iframe src={data.url} title="Raid 2021 (Crédit PIXELS)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              {/* <span>
                Raid 2021 (Crédit PIXELS)
              </span> */}
            </div>
            <div/>
            <div className='descr'>
              <h2>Le Raid en quelques mots</h2>
              <h5>
                {data.description}
              </h5>
            </div>
          </div>
        </div>
      );
}
