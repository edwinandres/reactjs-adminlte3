import React from 'react';
import Wellcome from '../components/Wellcome'
import AddButton from '../components/AddButton'
import ExerciseList from '../components/ExerciseList'


const Exercises = ({exercises}) => {
    return(
        <React.Fragment>
                <Wellcome
                    username="Edwin"
                />
                <ExerciseList 
                    exercises={exercises}
                />
                <AddButton/>
                
                
                
            </React.Fragment>
    )
}

export default Exercises