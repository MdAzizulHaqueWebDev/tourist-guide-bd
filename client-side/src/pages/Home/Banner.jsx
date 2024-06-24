/** @format */

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper max-h-96"
			>
				<SwiperSlide>
					<img
						src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/ahsan-manz-slide_2-2020-07-12-5f0ae04a08ea0.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/ratargul-s-slide_3-2020-06-17-5ee9b20e0687c.jpg"
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/slide/sonadia-is-slide_1-2020-06-19-5eed138f0bc14.jpg"
						alt=""
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
