import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function CustomCarousel() {
  const [cached, setCached] = useState(false);
  const [data, setData] = useState([]);
  if (!cached) {
    fetch("assets/Home/carousel/carousel.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(function (err) {
        console.log(err, " error");
      })
      .then(() => setCached(data !== undefined))
      .then(() => console.log("data fetched carousel"));
  }
  return (
    <Carousel className="view under-navbar">
      {data.map((d, index) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 image600"
              src={
                process.env.PUBLIC_URL + "assets/Home/carousel/images/" + d.img
              }
              alt={d.title}
            />
            <Carousel.Caption>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
