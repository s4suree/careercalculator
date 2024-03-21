import React, { Component } from 'react'

const Question = ({ question, options, handleAnswerSelection }) => {
    return (
      <div className="container">
        <h2>{question}</h2>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={(option) => handleAnswerSelection(option, index)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Question;
