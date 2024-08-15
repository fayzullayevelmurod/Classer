import React from 'react'
import './buttons.scss';

export const Button = ({className, label}) => {
	return (
		<button className={`${className} orange-btn`}>{label}</button>
	)
}
