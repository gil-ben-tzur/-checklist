import React, { Component } from 'react';

import {BrowserRouter,Link} from 'react-router-dom'
import Routes from './routes'

import SideBar from './components/SideBar'
import Item from './components/Item'
import './styles/app.scss'
	
export default () => 

<BrowserRouter>
<main className="flex-container">
	<div className="column shrink no-left-padding">
	<SideBar></SideBar>
	</div>
	<div className="column main-content">
		<section className="row new-item-creator">
				<Link to={{
				  pathname: '/add-item',
				  key:1

				}}>gorg</Link>
		</section>
		<section className="items-container">
			<Routes /> 
		</section>
	</div>
	
</main>
</BrowserRouter>;
