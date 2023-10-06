import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'

const Hero = () => {
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState(data[0])
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(item => setData(item))
  }, [])

  const handleSlideChange = (swiper) => {
    setActiveData(data[activeIndex]);

  }

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  const handleNext = () => {
    swiperRef.current.swiper.slideNext()
  }
  
  return (
    <div className='flex'>
      <div className='flex-grow'>
       
      </div>
      <div className='w-[50vw]'>
        {/* slider */}
        <Swiper
          ref={swiperRef}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation?.update()
          }}
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}  //i have change this line
          autoplay
        >
          {data.map((item, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div>
                  {idx == activeIndex ? 'active' : 'deactive'}
                  <img className='h-[350px] w-[350px] mx-2 object-cover rounded-xl' src={item.image} alt='' />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className='flex gap-3 mt-4'>
          <div onClick={handlePrev} className='flex items-center justify-center bg-white h-[40px] w-[40px] text-black rounded-full'>
            <BsArrowLeftShort className='text-2xl'></BsArrowLeftShort>
          </div>
          <div onClick={handleNext} className='flex items-center justify-center bg-white h-[40px] w-[40px] text-black rounded-full'>
            <BsArrowRightShort className='text-2xl'></BsArrowRightShort>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
