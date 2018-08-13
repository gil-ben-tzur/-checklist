import React , {Component}from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import _CheckList from './_checklist.js'



class _Item extends Component{
_GetItem(){
	return this.props.item.map((data) => {
		let itemName = data.title.replace(/\s+/g, '-').toLowerCase();
		return (
			<div className="item" key={`item-${itemName}`}>
					<div className="item--header">
						<span className="item--header--title">
							<Link to={`/edit-item/${itemName}`}>{data.title}</Link>
							
						</span>
					</div>
					<div className="label-list">
						<span className="label-list--item">
						 label
						</span>
					</div>
					<div className="item--body"> 
						<div className="item--body--description"> 
						{data.description}
						</div>
						{
							data.isList ?
							<_CheckList itemID={`${data.id}`} />
							:
							null
						}
					</div>
				
			<div className="item--footer">
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
			);	
	});
}

	
	render (){
		return(
			<div className="items" >



			   {this._GetItem()};
			</div>

		);
	}
}

function mapStateToProps(state){
	return{
		item:state.itemData
	}
}
export default connect(mapStateToProps)(_Item)