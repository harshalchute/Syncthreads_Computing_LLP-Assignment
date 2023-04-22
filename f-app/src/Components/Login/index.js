import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dashboard from "../Dashboard";
import axios from "axios";

const baseURL = "https://map-app-gamma.vercel.app";


// Authentication to Login :

export default function App() {
  const [userCredentials, setUserCredentials] = useState(null);

  function handleLogin(emailAddress, password) {
    if (emailAddress && password) {
      setUserCredentials({ emailAddress, password });
    } else {
      alert("Enter the Credentials !!")
    }
  }

  return (
    <div>
      {userCredentials ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}




// Login Form :

function Login(props) {

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault()
    const data = { email: emailAddress, password }
    axios.post(baseURL + '/login', data).then((response) => {
      // console.log(response.data);
      props.onLogin(emailAddress, password);
    });
  }

  return (<div>
    <div className="block-back">
      <img className="img-back" src="assets/img_1.jpg" alt="log img" />
    </div>
    <div className='login_form'>
      <div className="login_form_card">
        <div className="card login_form_body w-100 h-100">
          <div>
            <main class="form-signin w-100 m-auto">
              <form onSubmit={submit}>
                <h1 class="h3 mb-4" style={{ fontWeight: '600 !important', letterSpacing: '2px' }}>Sign In</h1>
                <div class="form-floating">
                  <input type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={emailAddress}
                    onChange={(event) => setEmailAddress(event.target.value)}
                  />
                  <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                  <input type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)
                    }
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

              </form>
            </main>

          </div>
        </div>
      </div>
    </div>
  </div>);
}

