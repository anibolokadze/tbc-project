"use client";
import { useState } from "react";
import style from "./Chat.module.scss";
import questionsAndAnswers from "../../../questionsAndAnswers";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleQuestionClick = (question: string) => {
    setIsTyping(true);

    setTimeout(() => {
      const qa = questionsAndAnswers.find((qa) => qa.question === question);
      const answer = qa ? qa.answer : "Sorry, I don't have an answer for that.";
      setChatHistory((prevHistory) => [...prevHistory, { question, answer }]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className={style.chatbot_container}>
      <div className={style.chatbot_header} onClick={toggleChat}>
        Chatbot
      </div>
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
          <div className={style.chat_history}>
            {chatHistory.map((chat, index) => (
              <div key={index}>
                <div className={style.chat_bubble}>
                  <p>{chat.question}</p>
                </div>
                <div className={style.answer_bubble}>
                  <p>{chat.answer}</p>
                </div>
              </div>
            ))}
            {isTyping && <p className={style.typing}>Typing...</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
