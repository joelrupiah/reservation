import React, { useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faArrowLeft, faCircleXmark, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0) 
  const [open, setOpen] = useState(false) 

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/194820163.jpg?k=d955cdebf5cf6b81ef572ae9a6e43bc17039cac5412ba98f2eba8cfd882c8904&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/199978820.jpg?k=f034900e94f8f5279d2d0dd7ffe4ee6d257b93e4bfbb70772fc4d8e7581798b3&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106784537.jpg?k=f6ec75fce8c0388a81405b6fa7e975a8a23fa48b2b57d3ff41baf34718001846&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/18592726.jpg?k=ba1c3429e679f2c9c20279d7dbee8465f1f4c570877282015847a85b569cb912&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/180774016.jpg?k=6c02043c7623c6935cde57107c13802e9ecebdde0a29000e841ae32a124343f6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/191262674.jpg?k=6d0a7949d2fb9d53a2e81e382d3a9e5ede270cc3482763a2c94c5398de4457f1&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i)
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber
    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }

    setSlideNumber(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={() => setOpen(false)} />
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={() => handleMove(("l"))} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faArrowRight} className="arrow" onClick={() => handleMove(("r"))} />
        </div>}
        <div className="hotelWrappper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton John driveway</span>
          </div>
          <span className="hotelDistance">Excellent 5500m from cbd</span>
          <span className="hotelPriceHighlight">
            Book a stay and enjoy the best comfort
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Nairobi</h1>
              <p className="hotelDesc">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a night stay</h1>
              <span>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </span>
              <h2>
                <b>$9945</b> (9 nights)
              </h2>
              <button>Reserver or Book Now</button>
            </div>
          </div>
        </div>
        
      </div>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
