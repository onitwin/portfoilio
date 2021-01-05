import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'



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
        <img
          className="carousel-image"
          src="Images/me.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>1</h3>
          <p>First SLide Text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="Images/me.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>2</h3>
          <p>Second Slide Text</p>
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
          <p>
            Third Slide Text
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-image"
          src="Images/me.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>4</h3>
          <p>
            Forth Slide Text
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Circuit;
