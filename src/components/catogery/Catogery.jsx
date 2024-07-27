import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Catogery.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import man from '../../images/man.jpg'
import jewellery from '../../images/jewellery.jpg'
import woman from '../../images/cloth3.jpg'
import shoes from '../../images/shoes.jpg'
import bag from '../../images/handbag.jpg'
import perfume from '../../images/perfume.jpg'
import { delay, motion } from "framer-motion"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

export default () => {
  const catogery=useRef(null)
 /**  setInterval(() => {
    catogery.current.style.display='block';
    setTimeout(() => {
      nav.current.style.opacity = 1;
    }, 50)
  }, 4000);**/
  return (
    
    <div ref={catogery} className="catogery">
      <h1> Top <span>Catogery</span></h1>
    <Swiper
      // install Swiper 
    
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{ delay: 1000 }}

     
      
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={jewellery} className='inner' alt="" /><div className="overlay">Jewllery</div></motion.div></SwiperSlide>
      <SwiperSlide><motion.div  animate={{ x: [0, 120, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:7}} className="slide"><img src={woman} className='inner' alt="" /><div className="overlay">Women Cloths</div></motion.div></SwiperSlide>
      <SwiperSlide><motion.div  animate={{ y: [0, 90, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:8}} className="slide"><img src={man} className='inner' alt="" /><div className="overlay">Men cloths</div></motion.div></SwiperSlide>
      <SwiperSlide><motion.div  animate={{ x: [0, 160, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:9}} className="slide"><img src= {shoes}className='inner' alt="" /><div className="overlay">Sneakers</div></motion.div></SwiperSlide>
      <SwiperSlide><motion.div  animate={{ y: [0, 180, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src= {bag}className='inner' alt="" /><div className="overlay">Hand Bags</div></motion.div></SwiperSlide>
      <SwiperSlide><motion.div  animate={{ x: [0, 120, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:7}} className="slide"><img src= {perfume}className='inner' alt="" /><div className="overlay">Fragnances</div></motion.div></SwiperSlide>
      
    </Swiper></div>
  );
};