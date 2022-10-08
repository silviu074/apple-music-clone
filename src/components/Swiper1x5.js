import React from 'react'
import '../styles/MainFeed.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const Swiper1x5 = () => {


  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={5}
  >
    <div className=' swiper'>
    <div className='swiper1x5Carousel swiper-wraper' >

      <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name #1</p>
          <p>Playlist creator name #1</p>
          </div>
       </div>
       </SwiperSlide>
       
       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       
       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>

       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>
       
       <SwiperSlide>
      <div className='swiper1x5Element swiper-slide'>
        <img className='swiper1x5Image' src='https://source.unsplash.com/random/300x300' 
          alt='Random cover'></img>
          <div>
          <p>Playlist name</p>
          <p>Playlist creator name</p>
          </div>
       </div>
       </SwiperSlide>
    </div> 

    </div>
    </Swiper>
  )
}
