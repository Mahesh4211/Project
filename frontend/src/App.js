// import logo from './logo.svg';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/auth/Login';
import Quora from './components/Quora';
import {login, selectUser} from "./feature/userSlice";
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      if (authUser){
        dispatch(login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email : authUser.email,
          uid: authUser.uid,
        }))
        console.log('AuthUser',authUser)
      }
    });
  },[dispatch]);
  return (
    <div className="App">
      {/* <h1>this is for testing</h1> */}
      {
        user ? <Quora/>:<Login/>
      }
    </div>
  );
}

export default App;
