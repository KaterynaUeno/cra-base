import React from 'react';
import Weather from "../../components/Weather"

const Homepage = () => {

	return (
  <div>
    <h3 style={{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      color: 'purple'}}>
      Welcome to home page</h3>
    <Weather />
  </div>)

}


export default Homepage;
