import React from 'react';
import Loading from '../components/Loading'
import FatalError from './500'
import Exercises from './Exercises';
import useFetch from '../hooks/useFetch'
import url from '../config'



const ExercisesContainer = () => {

    const{data, loading , error} = useFetch(`${url}/exercises`)
    

    if(loading)
        return <Loading/>
    if(error)
        return <FatalError/>
    return ( 
        <Exercises
            exercises={data}
        />
    )
}


/*
class ExcercisesContainer extends React.Component {
     //constructor(props) {
       // super(props);
       // this.state = {  
        state={
            data:[],
            loading: true,
            error: null
        }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {

        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()
            this.setState({
                data,
                loading : false 
            })
                  

        } catch (error) {
            this.setState({
                loading: false,
                error
            })
            
        }
    }
    
    render() { 

        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
        return ( 
            <Exercises
                exercises={this.state.data}
            />
         );
    }
}
 */
export default ExercisesContainer;