// ------------- Компонент футера страницы со слайдером SWIPER -------------
import React from 'react';
import classes from './Footer.module.scss'
import services from '../../js/servisesList';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/css/navigation';
import Service from '../Service';
import { Navigation } from 'swiper';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className="container">
				<Swiper
					modules={[Navigation]}
					navigation={{
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					}}
					spaceBetween={30}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						576: {
							slidesPerView: 2,
						},
						1200: {
							slidesPerView: 3,
						}
					}}>
					<div className="footer__services services">
						{services.map(service => (
							<SwiperSlide>
								<Service key={service.id} service={service} />
							</SwiperSlide>
						))}
					</div>
				</Swiper>
				<div className="swiper-button">
					<div className='swiper-button-prev'></div>
					<div className='swiper-button-next'></div>
				</div>
			</div>
		</footer >
	)
}

export default Footer;