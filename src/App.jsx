import {useState} from "react";
import "./App.css";
import questions from "./contants/questions";
import Question from './cmponents/question';

import Result from  "./cmponents/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  // Keep all of the logic in App.jsx

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <div className="App">
      <h1>World Quiz</h1>

      {/* Questions Component */}
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}
      {currentQuestion === questions.length && (
     <Result resetQuiz={resetQuiz}  userAnswers={userAnswers}   questions={questions}  />)}



    </div>
  );
}

export default App;