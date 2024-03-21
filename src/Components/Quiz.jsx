import React, { Component } from 'react'
import './Quiz.css'
import { useState } from 'react';
import QuestionsService from '../Services/questions.service';
import { getDocs, onSnapshot } from 'firebase/firestore';
import Question from './Question';

export default class Quiz extends Component {
    constructor(props){
        super(props)
        this.state = {
            questions: [],
            currentQuestionIndex: 0,
            msg: ""
        };
        this.getAllQuestions = this.getAllQuestions.bind(this);
        this.unsubscribe = undefined
    }
componentDidMount(){
    this.unsubscribe = this.getAllQuestions();
}
getAllQuestions(){
    let ques = [];
    //const docsSnapshot = await getDocs(QuestionsService.getAll());
    onSnapshot(QuestionsService.getAll(), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            ques.push({
                question: doc.data().question,
                options: [doc.data().answer, doc.data().option1, doc.data().option2, doc.data().option3]
            });
            console.log(doc);
        });
    })
    /*QuestionsService.getAll().getDocs((docs) => {
        docs.forEach((doc) => {
            ques.push({
                question: doc.data().question,
                answer: doc.data().answer,
                option1: doc.data().option1,
                option2: doc.data().option2,
                option3: doc.data().option3
            });
            console.log(doc);
        });
    });*/
    this.setState({
        questions: ques,
    });
}
/*const checkAns = (e, ans) => {
    if (question.ans === ans){
        e.target.classList.add("correct");
    }else{
        e.target.classList.add("wrong")
    }
}*/
   render() {
      const { questions, currentQuestionIndex, msg } = this.state;
      console.log('render...'+questions);
  return (
      /*<ul className='list-group'>
          {questions && questions.map((que, index) => (
        <div className='container'>
            <h1>Quiz App</h1>
            <hr />
            <h2>{que.question}</h2>
            <ul>
                <li>{que.answer}</li>
                <li>{que.option1}</li>
                <li>{que.option2}</li>
                <li>{que.option3}</li>
            </ul>
            <button>Next</button>
            <div className='index'>1 of 5 questions</div>
        </div>
        ))}
        </ul>*/
        <div className="container">
        {currentQuestionIndex < questions.length && (
          <Question
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            //handleAnswerSelection={handleAnswerSelection}
          />
        )}
        {/* Add a button or mechanism to move to the next question if needed */}
      </div>
    );
   }
}