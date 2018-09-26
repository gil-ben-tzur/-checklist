import React from 'react'
import classNames from 'classnames'
import { render } from 'react-dom';
import { withRouter } from 'react-router'
class NoMatch extends React.Component{
	render(){
		return
				<div>404 NoMatch</div>
			  
	}
}

export default withRouter(NoMatch)
