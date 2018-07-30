import React from 'react'
import classNames from 'classnames'
import '../../styles/item.scss'

import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
const Item = ({match}) => {
	console.log(match.url);
	return(
		<Link to={`${match.url}/gil123`}>
			<div className="item">
			<div className="item--header">
				<span className="item--header--title">
					title
				</span>
			</div>
			<div className="label-list">
				<span className="label-list--item">
				 label
				</span>
			</div>
			<div className="item--body"> 
				<div className="item--body--description"> 
				des
				</div>
				<div className="item--body--checklist">
					<ul className="checklist">
					    <legend>Check these out</legend>
	    				<li><input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">Checkbox 1</label></li>
	   					<li><input id="checkbox2" type="checkbox" /><label htmlFor="checkbox2">Checkbox 2</label></li>
	    				<li><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">Checkbox 3</label></li>
	  				</ul>
				</div>

				

				<div className="progress-bar">
					<div className="progress-bar--status"> 
						<span>5</span> off <span>10</span> complited!
					</div>
					<div className="progress-bar--bg">
						<div className="progress-bar--fill"></div>
					</div>
				</div>

			</div>

			<div className="item--footer ">
				<button className="btn btn-create">
				create
				</button>
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
			</div>
		    </div>
		</Link>
		);
};
export default withRouter(Item);