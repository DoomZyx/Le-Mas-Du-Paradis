import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import image from "../../../data/Caroussel/caroussel";
import "./_caroussel.scss";

function Carousel() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const burgerMenu = document.querySelector(".layout-burger");
    if (burgerMenu) {
      burgerMenu.style.display = isOpen ? "none" : "flex"; 
    }
  }, [isOpen]);


  return (
    <>
      <Swiper
        className="swiper"
        modules={[Pagination, Navigation]}
        slidesPerView={3}
        breakpoints={{
          1025: {
            slidesPerView: 3, 
          },
          768: {
            slidesPerView: 2, 
          },
          0: {
            slidesPerView: 1, 
          },
        }}
        spaceBetween={70}
        navigation
      >
        {image.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt="Le Mas Du Paradis Bleu"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={image.map((src) => ({ src }))}
          index={photoIndex}
        />
      )}
    </>
  );
}

export default Carousel;
