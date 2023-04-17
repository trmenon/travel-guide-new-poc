import React, { useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import kerala_boatrace from '../../../../assets/kerala_boatrace.jpg';
import kerala_katahkali from '../../../../assets/kerala-kathakali.jpg';
import kerala_pooram from '../../../../assets/kerala_pooram.jpg';

const CarouselComponent = ()=> {
    // State
    const [index, setIndex] = useState(0);

    // Event handlers
    const handleSelect = (selectedIndex, e)=> setIndex(selectedIndex);

    // Renderer
    return(
        <React.Fragment>
            <Card style={{ width: '100%', height: '300px', padding: '0px' }}>
            <Carousel fade activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={kerala_boatrace}
                        alt="First slide"
                        width={'100%'}
                        height={'300px'}
                    />
                    <Carousel.Caption>
                        <h1 className="carousel-text-main">KERALA BOAT RACE</h1>
                        <Button>KNOW MORE</Button>
                    </Carousel.Caption>                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={kerala_katahkali}
                        alt="Second slide"
                        width={'100%'}
                        height={'300px'}
                    />
                    <Carousel.Caption>
                        <h1 className="carousel-text-main">KATHAKALI</h1>
                        <Button>KNOW MORE</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={kerala_pooram}
                        alt="Third slide"
                        width={'100%'}
                        height={'300px'}
                    />
                    <Carousel.Caption>
                        <h1 className="carousel-text-main">THRISSUR POORAM</h1>
                        <Button>KNOW MORE</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Card>
        </React.Fragment>
    )
}

export default CarouselComponent;