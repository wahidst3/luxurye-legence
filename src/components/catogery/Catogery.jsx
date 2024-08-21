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
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const catogery=useRef(null)
 /**  setInterval(() => {
    catogery.current.style.display='block';
    setTimeout(() => {
      nav.current.style.opacity = 1;
    }, 50)
  }, 4000);**/
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 400);
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 400);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    
    <div ref={catogery} className="catogery">
      <h1> Top Catogery</h1>
    <Swiper
      // install Swiper 
    
      modules={[ Pagination, A11y]}
      spaceBetween={isMobileView ?20:50}
    slidesPerView={isMobileView ?2:3}
      autoplay={{ delay: 1000 }}

     
      
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='slides'
    >
    <SwiperSlide> <Link to='/j'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={jewellery} className='inner' alt="" /><div className="overlay">Jewllery</div></motion.div></Link></SwiperSlide>
    <SwiperSlide> <Link to='/women'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={woman} className='inner' alt="" /><div className="overlay">Women Dresses</div></motion.div></Link></SwiperSlide>
    <SwiperSlide> <Link to='/men'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={man} className='inner' alt="" /><div className="overlay">Men Dresses</div></motion.div></Link></SwiperSlide>
    <SwiperSlide> <Link to='/bage'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={bag} className='inner' alt="" /><div className="overlay">Bags </div></motion.div></Link></SwiperSlide>
    <SwiperSlide> <Link to='/shoes'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={shoes} className='inner' alt="" /><div className="overlay">Shoes</div></motion.div></Link></SwiperSlide>
    <SwiperSlide> <Link to='/perfume'> <motion.div  animate={{ y: [0, 110, 0] }} transition={{ repeat: 1,repeatType: "reverse",duration: 1,delay:6}} className="slide"><img src={perfume} className='inner' alt="" /><div className="overlay">Perfumes</div></motion.div></Link></SwiperSlide>
      <div   className="slide"><img src={woman} className='inner' alt="" /><div className="overlay">Women Cloths</div></div>
      <div   className="slide"><img src={man} className='inner' alt="" /><div className="overlay">Men cloths</div></div>
      <div  className="slide"><img src= {shoes}className='inner' alt="" /><div className="overlay">Sneakers</div></div>
      <div  className="slide"><img src= {bag}className='inner' alt="" /><div className="overlay">Hand Bags</div></div>
      <div    className="slide"><img src= {perfume}className='inner' alt="" /><div className="overlay">Fragnances</div></div>
      
    </Swiper></div>
  );
};