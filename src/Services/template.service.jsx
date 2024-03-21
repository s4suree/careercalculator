import { collection } from "firebase/firestore";
import firebase from "../firebase";

const db = collection(firebase, 'career_template')

class TemplateDataService {

    getAll(){
        return db;
    }
    getDescription(){
        return 
    }
}