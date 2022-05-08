import CustomNavBar from '../navbar';
import CustomFooter from '../footer';
import { useState } from 'react';
import $ from "jquery";

export default function PageGalerie() {
    const [data, setData] = useState([]);
    fetch('assets/galerie/galerie.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
    var h = $(window).height();
    var h2 = $(".galerie-container").height();
    var h3 = h2 - h + 196;
      return (
        <div>
          <CustomNavBar />
          <div className="view under-navbar">
            <h1>GALERIE</h1>
            <div className="galerie-container">

            </div>
            <CustomFooter fullpage={false} isSticked={h3 < 0} />
          </div>
        </div>
      );
  }
