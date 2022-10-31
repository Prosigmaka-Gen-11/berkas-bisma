import { useState } from "react";

export default function FormCreator (dataInput) {
    const [formInput, setFormInput] = useState(dataInput)
    
    function handleForm(event, propName) {
        setFormInput({...formInput, [propName]: event.target.value})
    }

    function anyTypeForm(anyData) {
        setFormInput({...anyData})
    }

    return {
        formInput,
        anyTypeForm,
        handleForm
    }
}