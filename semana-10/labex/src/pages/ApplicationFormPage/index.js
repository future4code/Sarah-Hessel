import axios from 'axios';
import {useForm} from '../../hooks/useForm';
import {Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import {FormContainer, Page} from './styles';
import { useTripsList } from '../../hooks/useTripsList';


export function ApplicationFormPage() {
 const trips = useTripsList()
  const [form, onChange] = useForm({
    name: "", 
    age: 0, 
    appText: "", 
    profession: "", 
    country: "", 
    trip: null 
  })
    
    const onSubmitForm = (event) => {
      event.preventDefault();  // Evita atualização da página
      const body = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
      }
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sarah-dumont/trips/${form.trip.id}/apply`, body)
      
      // .then((response) => {
      //   window.alert("Formulario enviado com sucesso! Aguarde nosso retorno pelo email :)")
      // })
      // .catch((error) =>{
      //   window.alert("Nosso satelite não conseguiu interceptar seu formulário, tente novamente mais tarde.")
      // })
    }

  return (
   <Page>
     <Typography variant='h4' align={'center'} gutterBottom>Formulário de viajante espacial</Typography>
     <FormContainer onSubmit={onSubmitForm}>
      <TextField 
      label={"Nome completo do candidato"}
      type="text"
      name="name"
      pattern="[A-Za-z]{3,}"
      title="No minimo 3 letras"
      variant="outlined"
      onChange={onChange}
      value={form.name}
      />

      <TextField 
      label={"Idade"}
      type="number"
      name="age"
      min='18'
      variant="outlined"
      onChange={onChange}
      value={form.age}
      />

      <TextField 
      label={"Texto de aplicação"} helperText="Explique por que você é um bom cadidato "
      type="InputLabeltext"
      name="appText"
      pattern="[A-Za-z]{30,}"
      title="No minimo 30 caracteres"
      variant="outlined"
      onChange={onChange}
      value={form.appText}
      />

      <TextField 
      label={"Profissão"}
      type="text"
      name="profession"
      pattern="[A-Za-z]{10,}"
      title="No minimo 10 caracteres"
      variant="outlined"
      onChange={onChange}
      value={form.profession}
      />

      <FormControl>
      <InputLabel id="select-paises">Países</InputLabel>
      <Select
          labelId="select-paises"
          onChange={onChange}
          value={form.country}
          name={'country'}
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'argentina'}>Argentina</MenuItem>
          <MenuItem value={'eua'}>Estados Unidos</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
      <InputLabel id="select-viagens">Viagens</InputLabel>
      <Select
          labelId="select-viagens"
          onChange={onChange}
          value={form.trip}
          name={'trip'}
        >
          {trips.map((trip) => {
          return <MenuItem key={trip} value={trip}>{trip.name}</MenuItem>
        })}
        </Select>
      </FormControl>
      <Button variant={"contained"} color={'primary'} type={'submit'}>Inscrever-se</Button>
     </FormContainer>
   </Page>
  );
}