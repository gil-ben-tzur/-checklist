import React, { Component } from 'react';
import Routes from './routes'
import SideBar from './components/SideBar'
import Item from './components/Item'
import './styles/app.scss'
	
export default () => 
<main className="flex-container">
	<div className="column shrink">
	<SideBar></SideBar>
	</div>
	<div className="column main-content">
		<section className="row">
			<Item></Item>
		</section>
		<section className="items-container">
			<Routes /> 
		</section>
	</div>
	
</main>;
