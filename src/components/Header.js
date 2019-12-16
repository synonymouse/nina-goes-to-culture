import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import {useScrollPosition} from '@n8tb1t/use-scroll-position'

function Header(props) {

  let quizArrow = classNames(
    'next-btn__button',
    {'disabled': !props.quizReady}
  );

  useEffect(() => {
    if(localStorage.getItem('quizReady') !== null) props.setQuizReady(true)
  }, [])

  useScrollPosition(({ prevPos, currPos }) => {
    if(Math.abs(currPos.y - window.innerHeight) === Math.round(document.body.getBoundingClientRect().height)) {
      props.setQuizReady(true)
      localStorage.setItem('quizReady', true);
      console.log('quizReady', props.quizReady)
    }
  })

  return (
    <header className="header">

      {!props.showQuiz ? 
        <svg xmlns="http://www.w3.org/2000/svg" className="header__quiz-btn quiz-btn quiz-btn--problems">
          <text x="0" y="99%" className="quiz-btn__text quiz-btn__text--problems">Что такое Рококо</text>
        </svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" className="header__quiz-btn quiz-btn quiz-btn--quiz">
          <text x="0" y="99%" className="quiz-btn__text">Викторина</text>
        </svg>
      }
      {!props.showQuiz && 
        <div className="header__next-btn-wrapper next-btn">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 297 297" className={quizArrow} onClick={() => props.startQuiz()}>
            <g>
              <polygon points="33,66 0,66 66,148 0,231 33,231 99,148 	"/>
              <polygon points="83,66 50,66 116,148 50,231 83,231 149,148 	"/>
              <polygon points="133,66 100,66 166,148 100,231 133,231 199,148 	"/>
              <polygon points="231,66 149,66 215,148 149,231 231,231 297,148 	"/>
            </g>
          </svg>
          {!props.quizReady && <div className="next-btn__popup">
            Чтобы попасть в викторину, прочтите статью полностью
          </div>}
        </div>
      }
    </header>
  );
}

export default Header;