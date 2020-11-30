import { useState } from 'react';

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues)
    const onChange = (event) => {
        const { value, name } = event.target;
        // const name = event.target.name
        // const value = event.target.value
        setForm({ ...form, [name]: value })
        console.log(form)
    }
    return [form, onChange];
}