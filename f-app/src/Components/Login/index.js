import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Dashboard from "../Dashboard";
import axios from "axios";

const baseURL = "https://map-app-mauve.vercel.app";


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
    <div className='register-form'>
      <Card style={{ width: '100%' }} className="shadow-lg card-back">
        <Card.Body className="card_body_test" style={{ backgroundColor: '#f8f8ff66' }} >
          <h3 className='mb-3 text-center fw-bold'>USER LOGIN</h3>
          <div style={{ maxWidth: '248px', margin: 'auto' }}>
            <Form onSubmit={submit}>

              <Form.Group className="mb-3 fw-bolder" >
                <Form.Label style={{ marginRight: '350px', width: '103px' }}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  value={emailAddress}
                  onChange={(event) => setEmailAddress(event.target.value)
                  }
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 fw-bolder" >
                <Form.Label style={{ marginRight: '380px' }}>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)
                  }
                  placeholder="Password"
                />
              </Form.Group>

              <Button variant="primary" style={{ marginTop: '5px' }} type="button" onClick={submit}>
                Login
              </Button>

            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>);
}

