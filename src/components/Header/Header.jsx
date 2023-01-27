import React from 'react';
import classes from './Header.module.scss'

const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className="container">
				<div className={classes.headerMain}>
					<h1 className={classes.headerTitle}>{props.title}</h1>
				</div>
			</div>
		</header>
	)
}

export default Header;