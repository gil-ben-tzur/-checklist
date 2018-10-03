import React from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Button from './Button'
import DarkBG from './DarkBG'
import '../styles/item.scss'

class Item extends React.Component{
    
    handleClick(id, status) {
	  this.props.setStatus(id, status)
	}
	handleDelete(id) {
		let conf = window.confirm("Are you sure you want to delete"+" "+ '"' +this.props.title+ '"' +"?");
	  if (conf){
	  	this.props.deleteItem(id)
	  }

	}


	render(){
		const {title,description,itmurl,status,setStatus,id,itemStatus} = this.props;
		let currntStatus = status.replace("-"," ");
		return(
			<li className={classNames("item",status)}>
				  <button className="delete" onClick={this.handleDelete.bind(this,id)}>X</button>
				  <header>
				  	<span className="item--header--title">{title}</span>
				  	{/*<Link className="edit-link" to={`/edit-item/${itmurl}`}>
				  		  		<img className="edit-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAESSURBVGhD7ZjBCQIxEEW3Am1I79YheBY7sAI92YIXS/Aoakke9X9MQGKMSQxkRubBgyWQJY8lCexgGIY6RnAHr3DJAY2M4RneX9xAVTDiAl8j1MWkIrwqYhYwtvhQFTFrGFt86F/FrKAIuCcmz8c3cmK4n7rjN/YNzjgQ4VsM75muhKdTTQzvGb6nG5+O2JIYzhcZ4c2JER/hTcXMoYoIbyqmG6URXlExtRFexkxhV36NoJyvak/EtIgWWITTIlpgEU4REeEvm1ItogUW4bSIFliEs3sEOcDY4nIVEUFOMLbAHPklRUSQ2hBREaQmRFwEKQ0RGUFKQsRGkNwQ0REkJ0R8BNnCY8I9FB9hGIYhkWF4ADptAfbA0wiOAAAAAElFTkSuQmCC" />
				  		  	</Link>*/}
				  </header>
				  <div className="item--body">
				  	<div className="item--body--description"> <pre>{description}</pre></div>
				  </div>
				  <footer>
				  	  <div className="item-menu">
				  	  		<button className="btn item-menu--toggle">{currntStatus}</button>
				  	  		<ul className={classNames("menu-list",status)}>
								<li><span className="status on-progress" onClick={this.handleClick.bind(this,id,itemStatus[0])}>on progress</span></li>
								<li><span className="status on-hold" onClick={this.handleClick.bind(this,id,itemStatus[1])}>on hold</span></li>
								<li><span className="status done" onClick={this.handleClick.bind(this,id,itemStatus[2])}>done</span></li>
								
				  	  		</ul>

				  	  </div>
					  
				  </footer>
			  </li>
			)
	}
}


export default Item