
import React , {Component}from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'



class _CheckList extends Component{
	_GetList(){
		return this.props.check.map((data) => {
			return (
				<li key={`itemCheck-${data.id}`}>
						<input id={`itemIndex-${data.id}`} type="checkbox" />
						<label htmlFor={`itemIndex-${data.id}`}>{data.listContent}</label>
				</li>
				);	
		});

	}
	//
	
	render (){

		return(
			<div className="item--body--checklist" >
			   <ul className="checklist">
			   	{this._GetList()}

			   </ul>
			   <div className="progress-bar">
					<div className="progress-bar--status"> 
						<span>5</span> off <span>10</span> complited!
						
						<div className="progress-bar--bg">
							<div className="progress-bar--fill"></div>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		check:state.checkListData
	}
}
export default connect(mapStateToProps)(_CheckList)  				