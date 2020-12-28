import React from "react";
import "./styles/Card.css";
import imagen from "../images/exercise.png";
import circulos from "../images/circles.png"
import emptyImg from '../images/empty.png'


const Card = ({img, title, description, leftColor, rightColor}) => (

  <div className="card mx-auto Fitness-Card" 
    style={{
        backgroundImage:`url(${circulos}), linear-gradient(to right, ${leftColor || '#56ccf2'}, ${rightColor || '#2f80ed'})`
    }}
    >
    <div className="card-body">
      <div className="row center">

        <div className="col-6">
          <img src={img || emptyImg} className="float-right"/>
        </div>
        <div className="col-6 Fitness-Card-Info">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

      </div>
    </div>
  </div>

)

/* 
class Card extends React.Component {

    // constructor(props){
     //   super(props)
     //   this.state = {
     //       image:'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
     //   }

   // } 

  render() {
    const{img, title, description, leftColor, rightColor} = this.props

    return (
      <div className="card mx-auto Fitness-Card" 
        style={{
            backgroundImage:`url(${circulos}), linear-gradient(to right, ${leftColor || '#56ccf2'}, ${rightColor || '#2f80ed'})`
        }}
        >
        <div className="card-body">
          <div className="row center">

            <div className="col-6">
              <img src={img || emptyImg} className="float-right"/>
            </div>
            <div className="col-6 Fitness-Card-Info">
              <h1>{this.props.title}</h1>
              <p>{this.props.description}</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
 */
export default Card;
