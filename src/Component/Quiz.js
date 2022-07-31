import React,{useState,useContext,useEffect} from 'react'
import { Questions } from '../Forhelper/QuestionsBank';
import { QuizContext } from '../Forhelper/Context';
export default function Quiz() {
  const{score,setScore,setQuizState}=useContext(QuizContext);
  const[optionChosen,setOptionChosen] = useState("")
  const [currentQuestion,setCurrentQuestion]=useState(0);
   const finish = ()=>{
    if(Questions[currentQuestion].answer==optionChosen){
      setScore(score+1)
    }
    setQuizState("end")
   };
   console.log(Questions[1])
  const nextQuestion = ()=>{
    if(Questions[currentQuestion].answer==optionChosen){
      setScore(score+1)
    }
    setCurrentQuestion(currentQuestion+1)
  };
  
  const prevQuestion = ()=>{
    setScore(score - 1);
    setCurrentQuestion(currentQuestion - 1);
  };
  

  return (
    <div className='Quiz'>
      <p>
        {""}
        Score {score}/{Questions.length}
      </p>
      <h3>{Questions[currentQuestion].prmpt}</h3>
      <div className='options'>
        <button id='opt_btn1' onClick={()=> setOptionChosen("A") }>
          {Questions[currentQuestion].optionA}</button>
        <button id='opt_btn2' onClick={()=> setOptionChosen("B") }>
          {Questions[currentQuestion].optionB}</button>
        <button id='opt_btn3' onClick={()=> setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}</button>
        <button id='opt_btn4' onClick={()=> setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}</button>
      </div>
      <div className='prenex-btn'>
        {currentQuestion == Questions.length - 1 ? (
          <button onClick={finish}>Completed</button>):
          (<button onClick={nextQuestion}>Next</button>)
        }
        {
          currentQuestion >=  Questions[2] ?(console.log(Questions[2]))
          :(<button onClick={prevQuestion}>Back</button>) 
          
        }
        {/* <button onClick={prevQuestion}>Back</button> */}
        
  
      </div>
    </div>
    
  )
}