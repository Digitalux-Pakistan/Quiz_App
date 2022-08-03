import React,{useState,useContext,useEffect} from 'react'
import { Questions } from '../Forhelper/QuestionsBank';
import { QuizContext } from '../Forhelper/Context';
export default function Quiz() {
  const{score,setScore,setQuizState}=useContext(QuizContext);
  const[optionChosen,setOptionChosen] = useState("")
  const [currentQuestion,setCurrentQuestion]=useState(0);
  const [sec,setsec]=useState(0);
  var timer;
  useEffect(()=>{
    timer=setInterval(() => {
      setsec(sec+1);
      if(sec === 59){
        setCurrentQuestion(currentQuestion+1)
      };

    }, 1000);
    
  })
  const finish = ()=>{
    if(Questions[currentQuestion].answer==optionChosen){
      setScore(score+1)
    }
    setQuizState("end")
   };
   console.log(Questions[1])
   
  const nextQuestion = ()=>{
    setsec(0);
    if(Questions[currentQuestion].answer==optionChosen){
      setScore(score+1)
    }
   
    setCurrentQuestion(currentQuestion+1)
  };
  
  const prevQuestion = ()=>{
    setsec(0);
    setScore(score - 1);
    setCurrentQuestion(currentQuestion - 1);
  };
  

  return (
    <div className='Quiz'>
      <h3 className='Timer'>Timer : {sec<10? "0"+sec:sec}</h3>
      <p>
        {""}
        Score {score}/{Questions.length}
      </p>
      <h3>{Questions[currentQuestion].prmpt}</h3>
      <div className='options'>
      {/* //for the correct option changes backgroud color to green
      // and fr wrong changes background opption to red bu using the ternary operaor in className */}
        <button id='opt_btn1' onClick={()=> setOptionChosen("A")  } className={ `${Questions[currentQuestion].answer==optionChosen? "correct":"wrong"}`} >
          {Questions[currentQuestion].optionA}</button>
        <button id='opt_btn2' onClick={()=> setOptionChosen("B") } className={ `${Questions[currentQuestion].answer==optionChosen? "correct":"wrong"}`}>
          {Questions[currentQuestion].optionB}</button>
        <button id='opt_btn3' onClick={()=> setOptionChosen("C")} className={ `${Questions[currentQuestion].answer==optionChosen? "correct":"wrong"}`}>
          {Questions[currentQuestion].optionC}</button>
        <button id='opt_btn4' onClick={()=> setOptionChosen("D")} className={ `${Questions[currentQuestion].answer==optionChosen? "correct":"wrong"}`}>
          {Questions[currentQuestion].optionD}</button>
      </div>
      <div className='prenex-btn'>
        {currentQuestion == Questions.length - 1 ? (
          <button onClick={finish}>Completed</button>):
          (<button onClick={nextQuestion}>Next</button>)
        }
        {
          currentQuestion >=  currentQuestion[2] ?(console.log(Questions[2]))
          :(<button onClick={prevQuestion}>Back</button>) 
          
        }
        {/* <button onClick={prevQuestion}>Back</button> */}
        
  
      </div>
    </div>
    
  )
}
