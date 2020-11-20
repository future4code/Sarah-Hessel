import { React, useState} from 'react';
import { useForm } from './useForm';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

export function LoginPage() { 
  const history = useHistory();
  const [form, onChange] = useForm({ 
    email: "", 
    password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault(); // evita atualização da página

    const body = {
      email: form.email,
      password: form.password
    }
  }
  
  const login = () => {
    const body = {
      email: form.email,
      password: form.password
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/login", body)
    
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      history.push('/trips/details')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <p>LabeX Confidencial</p>
      
      <form onSubmit={onSubmitForm}>
        <input placeholder="ID"
          value={form.email}
          type={"email"}
          onChange={onChange}
          name={"email"}
          required 
        />
        <input placeholder="Senha"
          value={form.password}
          type={"password"}
          onChange={onChange}
          name={"password"}
          required 
        />
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
}