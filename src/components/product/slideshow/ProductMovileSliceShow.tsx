'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Pagination } from 'swiper/modules';
import React from "react";
import Image from "next/image";
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './styles.css'

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export default function SliceShowMovil({ images, title, className }: Props) {
  return (
    <div className={className}>
      <Swiper
        style={{
          width: '100vw',
          height: '500px'
        }}
        pagination
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper2"
        modules={[FreeMode, Autoplay, Pagination]}
        >
          {
            images.map(image => (
              <SwiperSlide key={image}>
                <Image width={600} height={500} src={`/products/${image}`} alt={title} className="object-fill" />
              </SwiperSlide>
            ))
          }
      </Swiper>

    </div>
  )
}