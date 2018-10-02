import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from './Button'
import '../styles/item.scss'

class Item extends React.Component{
    
    handleClick(id, status) {
	  this.props.setStatus(id, status)
	}
	render(){
		const {title,description,itmurl,status,setStatus,id,itemStatus} = this.props;
		return(
			<li className="item">
				  <header>
				  	<span className="item--header--title">{title}</span>
				  	{/*<Link className="edit-link" to={`/edit-item/${itmurl}`}>
				  		  		<img className="edit-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVGhD7ZjBCQIxEEW3Am1I79YheBY7sAI92YIXS/Aoakke9X9MQGKMSQxkRubBgyWQJY8lCexgGIY6RnAHr3DJAY2M4RneX9xAVTDiAl8j1MWkIrwqYhYwtvhQFTFrGFt86F/FrKAIuCcmz8c3cmK4n7rjN/YNzjgQ4VsM75muhKdTTQzvGb6nG5+O2JIYzhcZ4c2JER/hTcXMoYoIbyqmG6URXlExtRFexkxhV36NoJyvak/EtIgWWITTIlpgEU4REeEvm1ItogUW4bSIFliEs3sEOcDY4nIVEUFOMLbAHPklRUSQ2hBREaQmRFwEKQ0RGUFKQsRGkNwQ0REkJ0R8BNnCY8I9FB9hGIYhkWF4ADptAfbA0wiOAAAAAElFTkSuQmCC" />
				  		  	</Link>*/}
				  </header>
				  <div className="item--body">
				  	<div className="item--body--description"> <pre>{description}</pre></div>
				  </div>
				  <div className={classNames('item-status',status)}>
				  	  	 <Button onClick={this.handleClick.bind(this,id,itemStatus[0])}>on progress</Button>
				  	  	 <Button onClick={this.handleClick.bind(this,id,itemStatus[1])}>on hold</Button>
				  	  	 <Button onClick={this.handleClick.bind(this,id,itemStatus[2])}>done</Button>
				  	  </div>
			  </li>
			)
	}
}


export default Item