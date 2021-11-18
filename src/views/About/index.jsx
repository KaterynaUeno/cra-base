import React, {useState} from 'react';
import AlertDialog from '../../components/AlertDialog/AlertDialog';
import questionsData from "../../components/Questions/questionsData";
import SingleQuestion from "../../components/Questions/SingleQuestion"

const About = () => {
const [questions, setQuestions ]= useState(questionsData)
	return <>
  <div className="container" style={{display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"80px"}}>
    <AlertDialog/>
     </div>;
    <main>
      <div className="container">
        <h2>Questions about login</h2>
        <section className="info">
          {questions.map((question)=>{
          return <SingleQuestion key={question.id} {...question}/>
          })}
        </section>
      </div>
    </main>

  </>
}



export default About;
