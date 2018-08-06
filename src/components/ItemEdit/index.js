import React, {component}from 'react'
import classNames from 'classnames'

import DarkBG from '../DarkBG'
import '../../styles/item-edit.scss'
import createBrowserHistory from 'history/createBrowserHistory'
import { withRouter } from 'react-router'



class ItemEdit extends React.Component {

	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this); 
	}
	goBack(){
	    this.props.history.goBack();
	}
	render(){

		return(
			<DarkBG>
				<div className="add-item">
					<div className="add-item--header">
						<span className="add-item--header--title">
							<input type="text" placeholder="Title"/>
						</span>
					</div>
					<div className="label-list">		
					</div>
					<div className="add-item--body"> 
						<div className="add-item--body--description"> 
						<textarea placeholder="description"/>
						</div>
					</div>

					<button className="btn">Create</button>
					
				</div>
				</DarkBG>
			)
	};
	
	}
export default withRouter(ItemEdit)