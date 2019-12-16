import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import RadioButton from './RadioButton'
import dataQuiz from '../data-quiz'

function Quiz(props) {
  const [question, setQuestion] = useState(0);
  const [currentAnswer, setAnswer] = useState(0);
  const [correctAnswer, answerCorrect] = useState(false);

  let btnClass = classNames(
    'question-btn',
    {'disabled': !correctAnswer}
  );


  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }
  
  const nextQuestion = () => {
    answerCorrect(false)
    dataQuiz.splice(question, 1)
    if(dataQuiz.length === 0) {
      props.startQuiz(false)
      props.openModal('finish')
    }
    shuffle(dataQuiz)
  }

  const handleInputChange = (event, i) => {
    setAnswer(event.target.value)
    if(i + 1 === dataQuiz[question].correct) {
      answerCorrect(true)
    } else {
      props.startQuiz(false)
      shuffle(dataQuiz)
      props.openModal('restart')
    }
    console.log('correctAnswer',correctAnswer)
  }

  return (
    <div className="question-wrapper">
      <h3 className="question">
        {dataQuiz[question].text}
      </h3>
      <div className="group-answers">
        {dataQuiz[question].answers.map((answer, i) => {
          return (
            <RadioButton 
              changed={(event) => handleInputChange(event, i)}
              key={i}
              id={i} 
              isSelected={currentAnswer === answer}
              label={answer}
              value={answer}
            />
          )
        })}
      </div>
      <div className={btnClass} onClick={() => nextQuestion()}>Следующий вопрос</div>
    </div>
  );
}

export default Quiz;