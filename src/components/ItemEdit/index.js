import React from 'react'
import classNames from 'classnames'
import '../../styles/item-edit.scss'
import { withRouter } from 'react-router'
const ItemEdit = (props) => (
	<div className="item">
		<div className="item--header">
			<span className="item--header--title">
				<input type="text" />
			</span>
		</div>
		<div className="label-list">
			<span className="label-list--item">
			 label
			</span>
		</div>
		<div class="item--body"> 
			<div className="item--body--description"> 
			des
			</div>
			<div className="item--body--checklist">
				<ul className="checklist">
				    <legend>Check these out</legend>
    				<li><input id="checkbox1" type="checkbox" /><label for="checkbox1">Checkbox 1</label></li>
   					<li><input id="checkbox2" type="checkbox" /><label for="checkbox2">Checkbox 2</label></li>
    				<li><input id="checkbox3" type="checkbox" /><label for="checkbox3">Checkbox 3</label></li>
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

		
	</div>
	)
export default withRouter(ItemEdit)