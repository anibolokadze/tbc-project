"use client";
import { useState } from "react";
import style from "./Chat.module.scss";
import questionsAndAnswers from "../../../questionsAndAnswers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const Chatbot = () => {
  const [currentQuestion, setCurrentQuestion] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionClick = (question: string) => {
    setIsTyping(true);

    setTimeout(() => {
      const qa = questionsAndAnswers.find((qa) => qa.question === question);
      const answer = qa ? qa.answer : "Sorry, I don't have an answer for that.";
      setCurrentQuestion(question);
      setCurrentAnswer(answer);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={style.chatbot_container}>
      {isOpen && (
        <div className={style.chatbot_body}>
          <ul className={style.questions_list}>
            {questionsAndAnswers.map((qa, index) => (
              <li
                key={index}
                onClick={() => handleQuestionClick(qa.question)}
                className={style.question_item}
              >
                {qa.question}
              </li>
            ))}
          </ul>
          {currentQuestion && (
            <div className={style.chat_history}>
              <div>
                <div className={style.chat_bubble}>
                  <p>{currentQuestion}</p>
                </div>
                <div className={style.answer_bubble}>
                  <p>{currentAnswer}</p>
                </div>
              </div>
              {isTyping && <p className={style.typing}>Typing...</p>}
            </div>
          )}
        </div>
      )}

      <div className={style.chatbot_header} onClick={toggleChat}>
        <FontAwesomeIcon icon={faMessage} />
      </div>
    </div>
  );
};

export default Chatbot;
