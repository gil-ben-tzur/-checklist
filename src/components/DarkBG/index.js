import React, {component}from 'react'
import classNames from 'classnames'
import '../../styles/dark-bg.scss'
import { withRouter } from 'react-router'


class DarkBG extends React.Component{

	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this); 
	}
	goBack(){
	    this.props.history.goBack();
	}

	render(){
		let { children } = this.props;
		return(
			<div className="dark-bg">
				<div className="dialog-container">
					 <button className="close-btn" onClick={this.goBack}>x</button>
					 {children}
				</div>
			</div>
			)
	};
}
	
export default withRouter(DarkBG)