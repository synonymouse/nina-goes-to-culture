import React, {useState} from 'react';

function Modal(props) {

  return (
    <div className="modal">
      {props.modal === 'start' && 
        <div className="main modal__container">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 297 297" className="next-btn__button modal__button" onClick={() => props.closeModal()}>
            <g>
              <polygon points="33,66 0,66 66,148 0,231 33,231 99,148 	"/>
              <polygon points="83,66 50,66 116,148 50,231 83,231 149,148 	"/>
              <polygon points="133,66 100,66 166,148 100,231 133,231 199,148 	"/>
              <polygon points="231,66 149,66 215,148 149,231 231,231 297,148 	"/>
            </g>
          </svg>
          <div className="modal__title">Добро пожаловать в веб-квест!</div>
          <div className="modal__content">Вам необходимо прочитать статью. После того как вы <b>полностью</b> её прочтёте вам откроется доступ к векторине, где вам предложат ответь на несколько вопросов по теме.</div>
        </div>
      }
      {props.modal === 'finish' && 
        <div className="main modal__container">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 297 297" className="next-btn__button modal__button" onClick={() => window.location.reload()}>
            <g>
              <polygon points="33,66 0,66 66,148 0,231 33,231 99,148 	"/>
              <polygon points="83,66 50,66 116,148 50,231 83,231 149,148 	"/>
              <polygon points="133,66 100,66 166,148 100,231 133,231 199,148 	"/>
              <polygon points="231,66 149,66 215,148 149,231 231,231 297,148 	"/>
            </g>
          </svg>
          <div className="modal__title">Поздравляем!</div>
          <div className="modal__content">Вы лучше, чем мы думали</div>
        </div>
      }
      {props.modal === 'restart' && 
        <div className="main modal__container">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 297 297" className="next-btn__button modal__button" onClick={() => props.closeModal()}>
            <g>
              <polygon points="33,66 0,66 66,148 0,231 33,231 99,148 	"/>
              <polygon points="83,66 50,66 116,148 50,231 83,231 149,148 	"/>
              <polygon points="133,66 100,66 166,148 100,231 133,231 199,148 	"/>
              <polygon points="231,66 149,66 215,148 149,231 231,231 297,148 	"/>
            </g>
          </svg>
          <div className="modal__title">К сожалению, вы ошиблись</div>
          <div className="modal__content">Прочтите статью ещё раз</div>
        </div>
      }
    </div>
  );
}

export default Modal;