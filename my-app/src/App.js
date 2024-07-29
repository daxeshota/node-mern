import { useState } from 'react';
import './App.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function App() {
  const[userName, setUserName] = useState("")
  const[email, setEmail] = useState("")
  const[contact, setContact] = useState("")
  const navigate = useNavigate()

  const url = new URL(window.location.pathname)

  const hasId = url.searchParams.has('id');

if (hasId) {
  const id = url.searchParams.get('id');
  axios.get(`http://localhost:5000/api/users/${id}`).then(
    (response) => {
        var result = response.data;
        setContact(response.data[0].contact)
        setEmail(response.data[0].email)
        setUserName(response.data[0].userName)
    },
    (error) => {
        console.log(error);
    }
)
} else {
  console.log('ID does not exist');
}

  const handleSubmit = (event) => {
    event.preventDefault();

    const newUser = {
        userName,
        email,
        contact
    };

    if(!hasId){
      axios.post('http://localhost:5000/api/users', newUser)
      .then((response) => {
          console.log(response.data);
          navigate("/users");
      })
      .catch((error) => {
          console.error('There was an error adding the user!', error);
      });
    }
    else{
      axios.put('http://localhost:5000/api/users', newUser)
      .then((response) => {
          console.log(response.data);
          navigate("/users");
      })
      .catch((error) => {
          console.error('There was an error adding the user!', error);
      });
    }
};
  return (
    <div className="App">
      <h2 className='headers'> User Registration Form</h2>
      <div className='userName'>
        <label htmlFor='name'>User Name: </label>
        <input type='text' name='userName' placeholder='Enter Username'  onChange={(e) => setUserName(e.target.value)}>
        </input>
      </div>
      <div className='email'>
        <label htmlFor='email'>Email: </label>
        <input type='text' name='email' placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)}>
        </input>
      </div>
      <div className='contact'>
        <label htmlFor="contact">Phone number: </label>
        <input type="tel" name="contact" placeholder='Enter Phone' onChange={(e) => setContact(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
      </div>

      <button className='btn-submit' onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
