import './App.css';
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [cpasswordError, setCPasswordError] = useState(true);

  function checkEmail(str) {
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(str))
      setEmailError(false);
    else
      setEmailError(true);
    setEmail(str);
  }

  function checkPassword(str) {
    if (str.length >= 8)
      setPasswordError(false);
    else
      setPasswordError(true);
    if (str !== cpassword)
      setCPasswordError(true);
    else
      setCPasswordError(false);
    setPassword(str);
  }

  function checkCPassword(str) {
    if (str === password)
      setCPasswordError(false);
    else
      setCPasswordError(true);
    setCPassword(str);
  }

  function validateForm(event) {
    event.preventDefault();
    if (emailError || passwordError || cpasswordError)
      alert("Form cannot be submitted!");
    else
      alert("Form submitted successfully!");
  }

  return (
    <div className='main-container'>
      <form action='submit' onSubmit={(event) => { validateForm(event) }}>

        <div>
          <h6>Email:</h6>
          <input style={{ "border": emailError ? "2px solid red" : "2px solid green" }} value={email} onChange={event => { checkEmail(event.target.value) }} type='text' />
          {emailError && <span>Invalid email format</span>}
        </div>

        <div>
          <h6>Password:</h6>
          <input style={{ "border": passwordError ? "2px solid red" : "2px solid green" }} value={password} onChange={event => { checkPassword(event.target.value) }} type='password' />
          {passwordError && <span>Password must be atleast 8 characters</span>}
        </div>

        <div>
          <h6>Confirm Password:</h6>
          <input style={{ "border": cpasswordError ? "2px solid red" : "2px solid green" }} value={cpassword} onChange={event => { checkCPassword(event.target.value) }} type='password' />
          {cpasswordError && <span>Password do not match</span>}
        </div>

        <button>Sign Up</button>

      </form>
    </div>
  );
}

export default App;
