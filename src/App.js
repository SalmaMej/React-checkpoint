import React from 'react';
// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  return (
  <div class='form-div'>
    <form>
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" class='form-inline forms' placeholder='Enter your first name'/>
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" class='form-inline forms' placeholder='Enter your last name'/>
      
      <label for="fname">Email adress:</label>
      <input type="email" name="email" class='form-inline forms' placeholder='abc@efg.com'/>
      <label for="fname">Password:</label>
      <input type="password" name="password" class='form-inline forms' placeholder='********'/>
      <button type='submit' class="btn btn-danger btn-space" >Submit</button>
    </form>
  </div>
  );
}

export default App;
