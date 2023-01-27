import React from 'react';
import Button from './Button/Button';

const Service = ({ service }) => {
	return (
		<div className='services__service service'>
			<h4 className={service?.vip ? 'service__category service__category-vip' : 'service__category'}>{service.category}</h4>
			{
				service.image
					?
					<div className="service__background" style={{ backgroundImage: `url(${service.image})` }}>
					</div>
					:
					<div className="service__background" style={{ backgroundColor: service.background }}></div>
			}
			<p className={service?.vip ? 'service__author service__author-vip' : 'service__author'}>{service.author}</p>
			<h3 className='service__title'>{service.title}</h3>
			<p className='service__description'>{service.description}</p>
			<Button service={service}>Call to action</Button>
		</div >
	)
}

export default Service;