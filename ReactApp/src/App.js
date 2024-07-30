import React, { useState } from 'react';
import './App.css';
import PasswordInput from './passwordInput';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

function loginClick(email_val,password_val){ 
  // console.log(email," -- ",password) ;
  if(email_val.trim() == "" ){
    alert("Please enter your email address.");
  }else if(password_val.trim() == "" ){
    alert("Please enter passowrd.");
  }else{ 
    fetch("login", {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "email": email_val,
        "password": password_val,
       }) 
     })
    .then(res => res.json())
    .then(res => {
      if( res ){ alert("Login sucessfull."); }
      else{ alert("Incorrect email or password."); }
      // console.log("res from server : ", res)
    })
    .catch(err => console.log('error: ', err) )
  } 

};

function RecoveryLink(){
    return (
      <div>
        <Link to="/" className="">Forgotten password?</Link>
     </div>
    )
}
function App() {
  const [isChecked, setIsChecked] = useState(false);
  var [email, setEmail] = useState("jagdeepsingh1823@gmail.com");
  var [password, setPassword] = useState("123456789");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="App"> 
      <div style={{marginTop:120,float: "left",paddingLeft:100}}>
        <h1 style={{color:"rgb(214, 146, 122)",fontSize:100,padding:0,margin:0}} > Plan</h1>
        <h1 style={{color:"rgb(214, 146, 122)",fontSize:100,padding:0,margin:0}} > Manage</h1>
        <h1 style={{color:"rgb(214, 146, 122)",fontSize:100,padding:0,margin:0}} > Share </h1>
      </div>
      <div className="main">
          <img src="logo.png" alt="logo" />
          <div className="login_form_border">
            <p style={{ color: '#A9A9A9',fontSize:30,margin:0,marginTop:"20px" }}>Welcome Back!</p>
            <p style={{ color: 'gray',margin:0 }}>Login to Continue</p>
            <input 
                type="email" 
                style={{ 
                    borderRadius: '20px',  
                    padding: '10px',    
                    paddingLeft: '20px',      
                    border: '1px solid #ccc',
                    backgroundColor:"#e8f0fe",
                    marginTop:'40px',
                    width:"300px" ,
                }} 
                value={email}
                onChange={handleEmailChange}
                placeholder="jagdeepsingh1823@gmail.com"
            />
            <PasswordInput onChange={handlePasswordChange}></PasswordInput>
            <button onClick={() => loginClick(email,password)} className="login_btn">
              Login
            </button>
            <div style={{width:"330px",marginTop:"20px"}}>
              <label style={{color:'gray'}}>
                <input 
                  type="checkbox" 
                  checked={isChecked} 
                  onChange={handleCheckboxChange} 
                  style={{marginRight:"20px"}}
                />
                Remember Me
              </label> 
            </div> 
            <div style={{width:"300px",marginTop:"50px",marginBottom:"30px"}}>
              <Router>
                <Routes> 
                      <Route
                          exact
                          path="/"
                          element={<RecoveryLink />}
                      />
                </Routes>
              </Router>
              </div>
          </div>
          <hr
            style={{
                color: "black",
                backgroundColor: "black",
                height: 1 , 
                width:"100%" , 
                marginTop : 50 ,
            }}
          />
          <div>
          <label> About</label>
          <label style={{marginLeft:30}}> Terms</label>
          </div>
      </div>  
    </div>
  );
}

export default App;
