import React from 'react'
import bannerImage from '../../assets/images/Rectangle 1.png';
import Nav from '../../Component/Nav/Nav';
import Hero from '../../Component/Hero/Hero';
import MySwiper from '../../Component/Hero/myswiper';

const Home = () => {
  return (
    <div className='max-w-[1660px] mx-auto'>
      <div className='relative'>
        <img className='h-screen w-full object-cover z-0' src={bannerImage} alt="" />
        <div className=' z-40 absolute top-0 bg-black h-full opacity-40 w-full'></div>

        <div className='z-50 absolute top-0 text-white w-full'>
          {/* Content will go here */}
          <Nav></Nav>
          <Hero></Hero>
          {/* <MySwiper></MySwiper> */}
        </div>
      </div>
    </div>
  )
}

export default Home
