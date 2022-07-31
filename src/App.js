import EndScreen from './Component/EndScreen';
import Quiz from './Component/Quiz';
import MainMenu from './Component/MainMenu';
import React,{useState,useContext} from 'react';
import {QuizContext} from "../src/Forhelper/Context"
import "./App.css"
function App() {
  const [score,setScore]=useState(0);
  const [quizState,setQuizState]= useState("menu")
  return (
    <div className="App">
      <h1>Quiz-App</h1>
      <QuizContext.Provider value={{quizState,setQuizState,score,setScore}}>
      {quizState==="menu" && <MainMenu/>}
      {quizState==="end" && <EndScreen/>}
      {quizState==="quiz" && <Quiz/>}
      </QuizContext.Provider>
    </div>
    
  );
}

export default App;
