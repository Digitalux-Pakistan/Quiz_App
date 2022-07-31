import React, { useContext } from 'react';
import { QuizContext } from '../Forhelper/Context';
import { Questions } from '../Forhelper/QuestionsBank';
export default function EndScreen() {
  const {score,setScore,setQuizState}=useContext(QuizContext)
  const restartQuiz=()=>{
    setScore(0);
    setQuizState("menu");
  }
  return (
    <div className='EndScreen'>
      {""}
      <h1>Quiz Finished</h1>
      <h3>
        {""}
        {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}
