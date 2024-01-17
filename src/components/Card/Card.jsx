import { Container } from "../../views/Container/Container";
import { API_URL } from "../../const";
import { useState } from "react";
import _ from "./Card.module.scss";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useParams } from "react-router-dom";

export const Card = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  console.log("productId: ", productId);

  return (
    <section className={_.card}>
      <Container className={_.container}>
        <h2 className={_.title}>Кресло с подлокотниками</h2>
        <div className={_.picture}>
          <div className={_.sliderMain}>
            <Swiper
              modules={[Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avmb6b67hjo.jpg`} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avni8tmdk7b.jpg`} alt="slide2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avonopodqpt.jpg`} alt="slide3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avo4oh0452l.jpg`} alt="slide4" />
              </SwiperSlide>
              <button onClick={() => mainSwiper.slideNext()} className={_.next}>
                next
              </button>
              <button onClick={() => mainSwiper.slidePrev()} className={_.prev}>
                prev
              </button>
            </Swiper>
          </div>
          <div className={_.sliderThubnails}>
            <Swiper
              modules={[Navigation, Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress
              spaceBetween={14}
              slidesPerView={4}
              freeMode>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avmb6b67hjo.jpg`} alt="slide1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avni8tmdk7b.jpg`} alt="slide2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avonopodqpt.jpg`} alt="slide3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={`${API_URL}img//1hb44avo4oh0452l.jpg`} alt="slide4" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className={_.info}>
          <p className={_.price}>{"5000".toLocaleString()}&nbsp;₽</p>
          <p className={_.artical}>арт. 84348945757</p>
          <div className={_.characteristic}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};
