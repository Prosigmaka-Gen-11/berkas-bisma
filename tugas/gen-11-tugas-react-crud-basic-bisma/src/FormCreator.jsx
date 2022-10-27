import { useState } from "react";

export default function FormCreator (dataInput) {
    const [formInput, setFormInput] = useState(dataInput)
    
    
    function anyTypeForm(emptyData) {
        setFormInput({...emptyData})
    }
    
    // Mengubah form menjadi form sebelumnya + editan pada property tertentu
    function handleForm(event, propName) {
        setFormInput({...formInput, [propName]: event.target.value})
    }

    // Sama kaya diatas tapi valuenya kumpulan dari array checkbox input
    function handleFormCheck(event, propName, fullString) {
        setFormInput({...formInput, [propName]: fullString})
    }

    return {
        formInput,
        anyTypeForm,
        handleForm,
        handleFormCheck
    }
}