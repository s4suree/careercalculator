import { collection } from "firebase/firestore";
import firebase from "../firebase";

const db = collection(firebase, 'users');

class UserDataService{

    getAll(){
        return db;
    }
}

export default new UserDataService();