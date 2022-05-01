import { useState } from 'react';
import { Carousel } from 'react-bootstrap';

export default function CustomCarousel() {
    const [data, setData] = useState([]);
    fetch('assets/home/carousel/carousel.json')
        .then(res => res.json())
        .then(json => setData(json))
        .catch(
            function(err){
            console.log(err, ' error')
            }
        )
    return (
        <Carousel className='view under-navbar'>
            {data.map((d, index) => {
                return (
                    <Carousel.Item>
                        <img className="d-block w-100 image600" src={d.img} alt={d.title}/>
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