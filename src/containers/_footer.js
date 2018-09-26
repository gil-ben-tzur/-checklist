import React from 'react'
import classNames from 'classnames'

const Footer = () => {
	return(
			<div className="item-menu">
					<button className="item-menu--toggle">...</button>
					<ul className="menu-list">
						<li><span className="add-label">add label</span></li>
						<li><span className="label"> label</span></li>
						<li><span className="status on-progress">on progress</span></li>
						<li><span className="status on-hold">on hold</span></li>
						<li><span className="status done">done</span></li>
						<li><span className="delete">delete</span></li>
					</ul>
				</div>
				)
			}


export default Footer;