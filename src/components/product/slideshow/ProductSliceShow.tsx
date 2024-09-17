'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperObject} from "swiper";
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import React, { useState } from "react";
import Image from "next/image";
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css'

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export default function SliceShow({ images, title, className }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        >
          {
            images.map(image => (
              <SwiperSlide key={image}>
                <Image width={1024} height={800} src={`/products/${image}`} alt={title} className="rounded-lg object-fill" />
              </SwiperSlide>
            ))
          }
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-lg object-fill"
      >
          {
            images.map(image => (
              <SwiperSlide key={image}>
                <Image width={450} height={300} src={`/products/${image}`} alt={`Image-${title}`} />
              </SwiperSlide>
            ))
          }
      </Swiper>

    </div>
  )
}