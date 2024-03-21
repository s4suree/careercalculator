import { addDoc, collection, onSnapshot, Timestamp } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import userService from "../Services/users.service"; 
import firebase from "../firebase";
import { doc, setDoc } from "firebase/firestore";

//import firebase from 'firebase/app';
//import 'firebase/firestore';
import { async } from "@firebase/util";
import RadioGroup from "./SubComponent/RadioGroup";

function Intro(){
    const [user, setUser] = useState({
        name: '',
        dob: '',
        response: []
    });
    const [username, setUsername] = useState("");
    const [dob, setDob] = useState(Timestamp.now());
    const [gender, setGender] = useState("");
    const [status, setStatus] = useState("");
    const [responseId, setResponseId] = useState("");
    const genderOptions = ['Male', 'Female', 'Others'];
    const statusOptions = ['Student', 'Employeed/Business', 'Unemployeed'];
    const [genderValue, setGenderValue] = useState(null);
    const [statusValue, setStatusValue] = useState(null);
    const [view, viewState] = useState(1);
    const formRef = useRef(null);
    /*const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handleDobChange = (event) => {
        setDob(event.target.value);
    };
    useEffect(() => {
        const saveUser = () => {
            onSnapshot(userService.getAll(), (querySnapShot) => {

            })
            userService.getAll().doc(1).set
        }
    })*/
    const db = collection(firebase, 'users');
    const handleSubmit = (event) => {
        event.preventDefault();
        //const db = firebase.firestore();
        //const userRef = db.doc('1');
        const timestamp = Timestamp.fromDate(new Date());
        //const currentDateFirestore = Timestamp()
        setDoc(doc(firebase, "users", "test1"),
        {
            name: username,
            dob: dob,
            gender: gender,
            status: status,
            response: responseId,
            createTime: timestamp
        });

        setUsername("");
        setDob("");
        setGender("");
        setStatus("");
    };

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        var currentDate = new Date();
        try {
            setUser({
                name: this.state.name,
                dob: this.state.dob,
                createTime: currentDateFirestore,
                response: []
            });
            await addDoc(db, user);
            alert(user.name+' Data Saved!! '+user.dob);
        } catch (error){
            console.log(error);
            alert(error);
        }
    };*/
    /*const handleSubmit = async (e) => {
        var currentDate = new Date();
        var currentDateFirestore = firebase.firestore.Timestamp.fromDate(currentDate);
        alert('hii');
        try{
            await addDoc(collection(firebase, 'users'), {
                name: 'shubham',
                email: 'shubham@gmil.com',
                dob: currentDateFirestore
            })
            onclose();
        } catch (err){
            alert(err);
        }
    }*/
    return(
        <div className="container">
        <h1>Welcome!</h1>
        <p>Please fill out the registration form.</p>
        <form onSubmit={handleSubmit} className='addTask' name='addTask'>
            <label for="name">Name:</label>
            <input type="text" 
                id="name" 
                name="name" 
                value={username} 
                onChange={ (e) => setUsername(e.target.value)} 
                //onChange = {this.updateInput}
                required/>
            <label for="birthday">Birthday:</label>
            <input type="date" 
                id="birthday" 
                name="birthday" 
                value={dob} 
                onChange={ (e) => setDob(e.target.value)} 
                //onChange = {this.updateInput}
                required/>
            <legend for="gender">Gender:</legend>
            <RadioGroup options={ genderOptions } value={genderValue} setValue={setGenderValue} />
            <legend for="status">Professional Status:</legend>
            <RadioGroup options={ statusOptions} value={statusValue} setValue={setStatusValue} /> 
            <button type="submit">Next</button>
        </form>
    </div>
    )
}

export default Intro;