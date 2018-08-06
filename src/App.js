import React, { Component } from 'react';

import {BrowserRouter, withRouter, Switch, Route, Link } from 'react-router-dom';
import Routes from './routes'

import {provider} from 'react-redux';
import store,{history} from './store';

import SideBar from './components/SideBar'
import Item from './components/Item'
import './styles/app.scss'



class App extends React.Component {

	
	render(){
		const {  } = this.props;

		
		
		return(
			<BrowserRouter>
				<main className="flex-container">
					<div className="column shrink no-left-padding">
					<SideBar></SideBar>
					</div>
					<div className="column main-content">
						<section className="row new-item-creator">
								<Link className="add-item-button"  to="/add-item">Write a note...</Link>
						</section>
						<section className="items-container">
							<Routes /> 
						</section>
					</div>
					
				</main>
				</BrowserRouter>
			)
	};
};

export default App;



