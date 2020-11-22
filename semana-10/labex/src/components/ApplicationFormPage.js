import styled from 'styled-components'
import {useForm} from '../hooks/useForm';
import {Button} from '@material-ui/core'
import {TextField} from '@material-ui/core'
import NativeSelect from '@material-ui/core/NativeSelect';
import imgBackground from '../assets/background-space.jpg'

const InputsForm = styled.form`
  display: grid;
  background-color: white;
  margin-left: 500px;
  margin-right: 500px;
  gap: 15px;
  
`
const Page = styled.div`
  background-image: url(${imgBackground});
  background-size: cover;
  height: 810px;
  color: white;
`

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
   <Page>
     <InputsForm onSubmit={onSubmitForm}>
      <TextField 
      placeholder="Seu nome"
      type="text"
      name="name"
      pattern="[A-Za-z]{3,}"
      title="No minimo 3 letras"
      variant="outlined"
      onChange={onChange}
      value={form.name}
      />
      <TextField 
      placeholder="Idade"
      type="number"
      name="age"
      min='18'
      variant="outlined"
      onChange={onChange}
      value={form.age}
      />
      <TextField 
      placeholder="Eu sou um bom candidate porque..."
      type="text"
      name="textApp"
      pattern="[A-Za-z]{30,}"
      title="No minimo 30 caracteres"
      variant="outlined"
      onChange={onChange}
      value={form.textApp}
      />
      <TextField 
      placeholder="Profissão"
      type="text"
      name="profession"
      pattern="[A-Za-z]{10,}"
      title="No minimo 10 caracteres"
      variant="outlined"
      onChange={onChange}
      value={form.profession}
      />
      <NativeSelect 
      placeholder="Nacionalidade"
      name="country"
      onChange={onChange}
      value={form.country}
      >
        <option value=""></option>
        <option value="brasil">Brasil</option>
        <option value="argentina">Argentina</option>
        <option value="uruguai">Uruguai</option>
      </NativeSelect>

      <TextField 
      placeholder="Viagens"
      variant="outlined"
      name="trip"
      />
     </InputsForm>
     <Button variant={"contained"} color={'black'} >Inscrever-se</Button>
   </Page>
  );
}