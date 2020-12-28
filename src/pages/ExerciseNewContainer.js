import React from 'react';

import FatalError from './500'
import ExerciseNew from './ExerciseNew'
import url from '../config'

class ExerciseNewContainer extends React.Component {
    

    state={
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading:false,
        error:null
    }

    handleChange = e => {
        /* console.log(`${e.target.name} : ${e.target.value}`); */
        /* let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState) */
        this.setState({
            form:{
                ...this.state.form,//mantiene el estado antiguo y le suma el nuevo valor
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading:true
        })
        e.preventDefault()
        //console.log(this.state);
        try {
            let config = {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch(`${url}/exercises`, config)
            let json = await res.json()
            //console.log(json);

            this.setState({
                loading:false
            })

            this.props.history.push('/exercise')

        } catch (error) {
            this.setState({
                loading:false,
                error
            })
            
        }
    }

    render(){
        if(this.state.error)
            return <FatalError />
        return (
            <ExerciseNew
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                form={this.state.form}
            />
        )
    }
}
 
export default ExerciseNewContainer;