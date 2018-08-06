import React , {Component}from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
class _Item extends Component{
_GetKey(){
	return this.props.item.map((data) => {
		return data.id
			
	});
}
_GetItem(){
	return this.props.item.map((data) => {
		return (
			<div className="item" key={data.id}>
					<div className="item--header">
						<span className="item--header--title">
							<Link to={`/edit-item/${data.id,data.title}`}>{data.title}</Link>
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

							<div className="item--body--checklist">
								<ul className="checklist">
								    <legend>Check these out</legend>
				    				<li><input id="checkbox1" type="checkbox" /><label htmlFor="checkbox1">Checkbox 1</label></li>
				   					<li><input id="checkbox2" type="checkbox" /><label htmlFor="checkbox2">Checkbox 2</label></li>
				    				<li><input id="checkbox3" type="checkbox" /><label htmlFor="checkbox3">Checkbox 3</label></li>
				  				</ul>
				  				<div className="progress-bar">
									<div className="progress-bar--status"> 
										<span>5</span> off <span>10</span> complited!
									</div>
									<div className="progress-bar--bg">
										<div className="progress-bar--fill"></div>
									</div>
								</div>
							</div>	
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
			   {this._GetItem()}
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