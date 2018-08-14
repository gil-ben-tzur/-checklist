
import React , {Component}from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import checkToggle from '../actions/checklist-action.js'


class _CheckList extends Component{
	_GetList(){
		return this.props.check.map((data) => {
			return (
				<li key={`itemCheck-${data.id}`}>
					<input onClick={()=>this.props.checkToggle(true)} id={`itemIndex-${data.id}`} type="checkbox" />
					<label htmlFor={`itemIndex-${data.id}`}>{data.listContent}</label>
				</li>
				);	
		});

	}
	//
	 _GetProgress(){
	 	let totalChecklistAmount = this._GetList().length;
	 	let checkedAmount = 0;
	 	
	 	this.props.check.map((data) => {
            if(data.checked === true){
                checkedAmount= checkedAmount + 1;   
        	}
            return checkedAmount;
	 	});

	 	let progressBarLength = checkedAmount * 100 / totalChecklistAmount;

	 	return(
 			<div className="progress-bar">
				<div className="progress-bar--status"> 
				   <span>{checkedAmount}</span> off <span>{totalChecklistAmount}</span> complited!
					<div className="progress-bar--bg">
						<div className="progress-bar--fill" style={{width:`${progressBarLength}` + '%'}}></div>
					</div>
				</div>
			</div>
	 	);
    };
	render (){
       
		return(
			<div className="item--body--checklist" >
				<ul className="checklist">
					{this._GetList()}
			  	</ul>
			   {this._GetProgress()}		
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		check:state.checkListData
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({checkToggle:checkToggle},dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(_CheckList)  				