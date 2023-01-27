import React from 'react';
import classes from './Button.module.scss';

const Button = ({ children, service }) => {
	const CallToAction = () => {
		alert(`Выбор услуги: ${service.title} \nКатегория: ${service.category}`);
	}

	return (
		<button className={service?.vip ? classes.buttonVip + " " + classes.button : classes.button} onClick={e => CallToAction(e)}>
			{children}
		</button>
	)
}

export default Button;