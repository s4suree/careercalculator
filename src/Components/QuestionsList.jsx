import { arrayUnion, collection, doc, onSnapshot, setDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import firebase from "../firebase";
import questionsService from "../Services/questions.service";
import Question from "./Question";

function QuestionsList(){
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const rangeOptions = ['Exactly like me', 'Very much like me', 'Only slightly like me', 'Not at all like me'];
    const [userResponse, setUserResponse] = useState([]);

    const delay = async (e) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Hello");
        e.target.classList.remove("correct");
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      };
    const handleAnswerSelection = (selectedAnswer, response) => {
        // You can add logic here to check the answer and provide feedback
        selectedAnswer.target.classList.add("correct");
        setUserResponse(userResponse => [...userResponse, response]);
        console.log(userResponse);
        const db = collection(firebase, 'users');
        updateDoc(doc(firebase, "users", "test1"),
        {
            response: userResponse
        }, {merge: true});
        delay(selectedAnswer);
    };
useEffect(() => {
    const fetchQuestions = () => {
        console.log('innn');
        const fetchQues = [];
        onSnapshot(questionsService.getAll(), (querySnapshot) => {
            querySnapshot.forEach((doc, index) => {
                fetchQues.push({
                    id: index,
                    question: doc.data().question,
                    options: rangeOptions
                    /*answer: doc.data().answer,
                    option1: doc.data().option_1,
                    option2: doc.data().option_2,
                    option3: doc.data().option_3,*/
                });
                console.log(doc);
            })
            setQuestions(fetchQues);
        })
    };
    fetchQuestions();
    }, []);
            return (
        <div>
            {currentQuestionIndex < questions.length && (
                <Question
                    question={questions[currentQuestionIndex].question}
                    options = {questions[currentQuestionIndex].options}
                    handleAnswerSelection={handleAnswerSelection} />
            )}
        </div>
            )
}
export default QuestionsList;