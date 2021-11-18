import React, {useState} from 'react'
import {FiZap, FiZapOff} from "react-icons/fi"
import "./questions.css";

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn-circle" onClick={()=> setShowInfo(!showInfo)}>
          {showInfo ? <FiZapOff /> : <FiZap />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
      {/* if show info is true then show info */}
    </article>
  )
}

export default SingleQuestion;
