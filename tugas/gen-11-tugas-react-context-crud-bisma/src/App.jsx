import { createContext, useState } from "react"
import axios from "axios"
import FormCreator from "./FormCreator"

export const dataContext = createContext()

const inisiateData = {
  nama: '',
  npm: '',
  universitas: ''
}

export default function App(props) {
  const { formInput, anyTypeForm, handleForm } = FormCreator(inisiateData)
  const [allList, setAllList] = useState([])

  async function getAllData() {
    const result = await axios.get('http://localhost:3000/data')
    setAllList(result.data)
    console.log(result.data)
  }

  async function submitData(event) {
    event.preventDefault()
    await axios.post('http://localhost:3000/data', formInput)
    getAllData()
    anyTypeForm(inisiateData)
  }

  useState(() => {
    getAllData()
  }, [])

  return <dataContext.Provider value={{allList}}>
    <h1>Input data</h1>
    <form onSubmit={submitData}>
      <label>
        Nama Kamu
        <input type="text" value={formInput.nama} onChange={event => handleForm(event, 'nama')}></input>
      </label>
      <br />
      <label>
        NPM
        <input type="number" value={formInput.npm} onChange={event => handleForm(event, 'npm')}></input>
      </label>
      <br />
      <label>
        Universitas
        <input type="text" value={formInput.universitas} onChange={event => handleForm(event, 'universitas')}></input>
      </label>
      <br />
      <button>Submit</button>
    </form>

    <hr />

    <h1>List Data</h1>
    {props.children}
  </dataContext.Provider>
}