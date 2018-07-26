import React from 'react'
import { NavLink,withRouter } from 'react-router-dom'
import Label from '../Label'
import '../../styles/side-bar.scss'

const SideBar = (props) => (

	<div className="side-bar">
		<div className="side-bar--top-items">
			<NavLink to="/notes" className="nav-item" activeClassName="active" exact>Notes</NavLink>
			<NavLink to="/checklists" className="nav-item" activeClassName="active" exact>Checklists</NavLink>
			<Label />
		</div>
		
		<div className="side-bar--bottom-items">
			<NavLink to="/on-progress" className="nav-item" activeClassName="active" exact>On Progress</NavLink>
			<NavLink to="/on-hold" className="nav-item" activeClassName="active" exact>On Hold</NavLink>
			<NavLink to="/done" className="nav-item" activeClassName="active" exact>Done</NavLink>

			
		</div>
	</div>
	)
export default withRouter(SideBar)