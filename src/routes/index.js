import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Item from './Item'
export default ()=> (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/item" component={Item} />
		    </Switch>
		</BrowserRouter>
	);