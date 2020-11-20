import {React, useState} from 'react';
import {useForm} from './useForm';
import axios from 'axios';

export function ApplicationFormPage() {

  const [form, onChange] = useForm({
    name: "", 
    age: 0, 
    textApp: "", 
    profession: "", 
    country: "", 
    tripId: "" })

    console.log("Form", form)
    
    const onSubmitForm = (event) => {
      event.preventDefault();  // Evita atualização da página
    }

  return (
   <div>
     <form onSubmit={onSubmitForm}>
      <input 
      placeholder="Nome do candidato"
      type="text"
      name="name"
      pattern="[A-Za-z]{3,}"
      title="No minimo 3 letras"
      onChange={onChange}
      value={form.name}
      />
      <input 
      placeholder="Idade"
      type="number"
      name="age"
      min='18'
      onChange={onChange}
      value={form.age}
      />
      <input 
      placeholder="Texto de aplicação"
      type="text"
      name="textApp"
      pattern="[A-Za-z]{30,}"
      title="No minimo 30 caracteres"
      onChange={onChange}
      value={form.textApp}
      />
      <input 
      placeholder="Profissão"
      type="text"
      name="profession"
      pattern="[A-Za-z]{10,}"
      title="No minimo 10 caracteres"
      onChange={onChange}
      value={form.profession}
      />
      <select 
      placeholder="Nacionalidade"
      name="country"
      onChange={onChange}
      value={form.country}
      >
        <option value=""></option>
        <option value="brasil">Brasil</option>
        <option value="argentina">Argentina</option>
        <option value="uruguai">Uruguai</option>
      </select>
      <input 
      placeholder="Viagens"
      name="trip"
      />
      <button>Inscrever-se</button>
     </form>
   </div>
  );
}