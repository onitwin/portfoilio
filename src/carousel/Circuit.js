import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import items from "../data";



const Circuit=()=>{
  const [index, setIndex] = useState(0);

  const handleSelect=(selectedIndex,e)=>{
    setIndex(selectedIndex)
  }


  return (
    <div className="circuit-container">
    <div className="carousel-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <div className="carousel-internal-block">
        <img
          className="carousel-image"
          src="Images/scroller.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>1</h3>
          <p className="carousel-text">Scroller</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image spaceX"
          src="Images/SpaceX.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>2</h3>
          <p className="carousel-text">SpaceX Launch Tracker</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="Images/me.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>3</h3>
          <p className="carousel-text">
            ISS Tracker
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </div>
    <div className="carousel-descriptor-container">
    <div className="carousel-descriptor" >
    <h2>These are some of the projects I have been working on recently</h2>
    </div>
    </div>
    </div>
  )
}

export default Circuit;
