import React, {Component} from "react";
import FormUserDetails from "./FormUserDetails";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
  }

  nextStep = () => {
    let { step } = this.state;
    this.setState({
      step: step++
    });
  }

  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step--
    });
  }

  handleChange = input => event => {
    this.setState({[input]: event.target.value});
  }
  render(){
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city } = this.state;
    const values = { firstName, lastName, email, occupation, city }

    switch(step){
      case 1:
        return (
          < FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>
        )
        case 2:
          return (
            <h1>FormPersonalDetails</h1>
          )
          case 3:
            return (
            <h1>Confirm</h1>
          )
          case 4:
            return (
            <h1>Success</h1>
          )
          default:
            return (
              <h2>Default</h2>
            )
    }
  }
}


export default UserForm;
