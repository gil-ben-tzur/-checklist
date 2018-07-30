import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './Home'
import Item from './Item'
import NoMatch from './NoMatch'
import AddItem from './AddItem'
export default ()=> (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/item/" component={Item} />
				<Route path="/add-item/" component={AddItem} />
				<Route exact path="/lists/" component={Home} />
				<Route exact path="/notes/" component={Home} />
				<Route exact path="/on-progress/" component={Home} />
				<Route exact path="/on-hold/" component={Home} />
				<Route exact path="/done/" component={Home} />
				<Route  component={NoMatch} />
		    </Switch>
	);