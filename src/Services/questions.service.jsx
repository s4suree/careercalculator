import { collection } from "firebase/firestore";
import firebase from "../firebase";

const db = collection(firebase, 'career_questions');

class QuestionDataService {

    getAll(){
        return db;
    }
    create(question){
        return db.add(question);
    }
    update(question){
        return db.doc(question.question).update(question);
    }
    delete(question){
        return db.doc(question.question).delete()
    }
}

export default new QuestionDataService();