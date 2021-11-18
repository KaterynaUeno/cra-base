import React from 'react';
import Weather from "../../components/Weather"
import Card from "../../components/Card/Card";
// import Time from "../../components/Card/Time/Time"


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
      <div className="container"
      style={{
        backgroundColor: "#BCCCDC"
      }}>
        <Card/>
      </div>
  </div>)

}


export default Homepage;
