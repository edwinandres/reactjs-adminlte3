import React from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'

const Aplication = () => (
    <Router>
        <Switch>
            <Route exact path="/exercise" component={ExercisesContainer}/>
            <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
        
    </Router>
)

/* function Aplication() {
    return (
        <Router>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExerciseNew}/>
                <Route component={NotFound}/>
            </Switch>
            
        </Router>
    )
} */

export default Aplication