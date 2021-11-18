import React  from 'react';
import Moment from 'react-moment';



const Time = () => {
const dateToFormat = '1976-04-19T12:59-0500';
  return (
     <Moment>{dateToFormat}</Moment>
);
}

export default Time;
