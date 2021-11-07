import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TextField from "material-ui/TextField";
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetails extends Component {
  continue = event => {
    event.preventDefault();
    this.props.nextStep();
  }
  render() {
    const { values, handleChange } =this.props;
    return (
     <MuiThemeProvider>
       <React.Fragment>
         <TextField
         hintText="Enter your first name"
         floatingLabelText="First name"
         onChange={handleChange('firstName')}
         defaultValue={values.firstName} />
         <TextField
         hintText="Enter your last name"
         floatingLabelText="Last name"
         onChange={handleChange('lastName')}
         defaultValue={values.lastName} />
         <TextField
         hintText="Enter your email"
         floatingLabelText="email"
         onChange={handleChange('email')}
         defaultValue={values.email} />
         <RaisedButton
         label="Continue"
         primary={true}
         style={styles.button}
         onClick={this.continue} />
       </React.Fragment>
     </MuiThemeProvider>
    )
  }
}
const styles = {
  button: {
    margin: 15
  }
}
export default FormUserDetails;
