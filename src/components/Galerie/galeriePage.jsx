import CustomNavBar from "../navbar";
import CustomFooter from "../footer";
import { useState } from "react";
import Gallery from "react-grid-gallery";

export default function PageGalerie() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/galerie/galerie.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched galerie"));
  }
  return (
    <div>
      <CustomNavBar />
      <div className="view under-navbar">
        <h1>GALERIE</h1>
        <div className="galerie-container">
          {data !== [] ? (
            <Gallery
              images={data.map((img, index) => {
                return {
                  src: process.env.PUBLIC_URL + "assets/galerie/images/" + img,
                  thumbnail:
                    process.env.PUBLIC_URL + "assets/galerie/images/" + img,
                  thumbnailWidth: 320,
                  thumbnailHeight: 212,
                };
              })}
              className="image-grid"
              imageCountSeparator=" sur "
              enableImageSelection={false}
            />
          ) : (
            <></>
          )}
        </div>
        <CustomFooter fullpage={false} />
      </div>
    </div>
  );
}
