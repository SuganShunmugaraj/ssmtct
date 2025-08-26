'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

interface SuccessStoriesCarouselProps {
  testimonials: Testimonial[];
}

const SuccessStoriesCarousel = ({ testimonials }: SuccessStoriesCarouselProps) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="success-stories-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          }
        }}
      >
        {testimonials.map((story, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl h-[400px] md:h-[450px]">
              <div className="flex flex-col md:flex-row h-full">
                {/* Left Side - Description */}
                <div className="flex-1 p-4 md:p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-3">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold mb-2">{story.name}</h3>
                    <p className="text-gray-300 mb-3 text-xs md:text-sm">{story.role}</p>
                    <p className="text-gray-300 leading-relaxed text-sm line-clamp-4">
                      {story.content}
                    </p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm mt-4 w-fit">
                    Read more
                  </button>
                </div>
                
                {/* Right Side - Image */}
                <div className="flex-1 relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStoriesCarousel;
