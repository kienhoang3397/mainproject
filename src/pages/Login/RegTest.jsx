import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase';

function RegTest() {
  const [emailVal, setEmailVal] = useState('');
  const [passwordVal, setPasswordVal] = useState('');

  const handleChangeEmail = (event) => {
    const email = event.target.value;
    setEmailVal(email);
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setPasswordVal(password);
  };

  const handleReg= async () => {
    createUserWithEmailAndPassword(auth, emailVal, passwordVal)
    .then(( (userInfo)=>{
        console.log(userInfo)
        alert('Sucsses')
    }))
    .catch((error) =>{
        alert(error)
    })
  }
  const handleSign= async () => {
    signInWithEmailAndPassword(auth, emailVal, passwordVal)
    .then(( (userInfo)=>{
        console.log(userInfo)
        alert('Sucsses')
    }))
    .catch((error) =>{
        alert(error)
    })
  }
const handleCheckIsAuth = async () => {
    onAuthStateChanged(auth, (user)=>{
        if (user) {
            console.log(user)
        }
        else{
            console.log('khong phai')
        }
    })
}
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Sign Out Success");
      })
      .catch((error) => {
        console.error("Sign Out Error", error);
      });
  };
  


  return (
    <div>
      <input
        type="text"
        value={emailVal}
        onChange={handleChangeEmail}
        placeholder="Email"
      />
      <input
        type="password"  
        value={passwordVal}
        onChange={handleChangePassword}
        placeholder="Password"
      />
      <button onClick={handleReg}>Reg</button>
      <button onClick={handleSign}>SignIn</button>
      <button onClick={handleSignOut}>SignOut</button>
      <button onClick={handleCheckIsAuth}>CheckIsUser</button>
    </div>

  );
}

export default RegTest;
