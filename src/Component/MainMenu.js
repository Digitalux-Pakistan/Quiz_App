import React,{useContext} from 'react'

import { QuizContext } from '../Forhelper/Context'
import "../App.css"
export default function MainMenu() {
    const {quizState,setQuizState}=useContext(QuizContext);
  return (
    
    <div className='Menu'>
        <button className='menu-btn'
        onClick={()=>{
            setQuizState("quiz")
        }}>Start Quiz

        </button>
    </div>
  )
}
