import { React } from 'react';
import { useForm } from './useForm'

export function LoginPage() {
  const [form, onChange] = useForm({ 
    email: "", 
    password: "" })

  console.log("Form", form)

  const onSubmitForm = (event) => {
    event.preventDefault(); //Evita atualização da página

    const body = {
      email: form.email,
      password: form.password
    }
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
        <button>Login</button>
      </form>
    </div>
  );
}