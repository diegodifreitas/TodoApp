import React from 'react'
import { Router, Route, Redirect, HashRouter } from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

export default props => (
    <HashRouter>
        <div>
            <Route path='/todo' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todo' />
        </div>
    </HashRouter>
)