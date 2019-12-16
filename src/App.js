import React, { useState, useEffect } from 'react';
import Content from './components/Content'
import Header from './components/Header'
import Quiz from './components/Quiz'
import data from './data'
import Modal from './components/Modal'
import './App.scss';

function App() {
  const [quizReady, setQuizReady] = useState(false)
  const [quiz, setQuizState] = useState(false);
  const [modal, openModal] = useState('start');

  const closeModal = () => {
    openModal(null)
  }

  return (
    <div className="app">
      {!modal && <div className="app__container">
        <Header 
          setQuizReady={setQuizReady}
          startQuiz={() => setQuizState(!quiz)}
          quizReady={quizReady}
          showQuiz={quiz}
        />
        <div className="content-container">
          {!quiz && 
            <div class="main-nav">
              <a href="#1">Главные характеристики стиля рококо</a>
              <a href="#2">Рококо и барокко</a>
              <a href="#3">Рокайль</a>
              <a href="#4">Рококо в архитектуре</a>
              <a href="#5">Стиль рококо в интерьере</a>
              <a href="#6">Рококо в искусстве</a>
              <a href="#7">Рококо в живописи</a>
              <a href="#8">Рококо в скульптуре</a>
            </div>
            }
            <div className="main">
              {
                quiz ? <Quiz setQuizReady={setQuizReady} startQuiz={() => setQuizState(!quiz)} openModal={openModal}/> : <Content data={data[0]}/>
              }
            </div>
          </div>
        </div>
        }
      {modal && <Modal modal={modal} closeModal={closeModal}/>}
    </div>
  );
}

export default App;
