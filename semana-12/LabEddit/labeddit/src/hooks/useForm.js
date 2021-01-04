import { useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  // COM ESSA FORMA ALTERNATIVA, NÃO É PRECISO
  // USAR UMA FUNCAO INTERMEDIÄRIA (handleInputChange) NO COMPONENTE
  // const onChange = (event) => {
  // const {name, value} = event.target
  //   const newForm = {...form, [name]: value}

  //   setForm(newForm)
  // }

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};