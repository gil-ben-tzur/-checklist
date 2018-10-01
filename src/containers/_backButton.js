import React, {component}from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'


class BackButton extends React.Component{

	constructor(props){
	   super(props);
	   this.goBack = this.goBack.bind(this); 
	}
	goBack(){
	    this.props.history.goBack();
	}

	render(){
		let { children,btnClass } = this.props;
		return(
			<button className={btnClass} onClick={this.goBack}>{children}</button>
			)
	};
}
	
export default withRouter(BackButton)