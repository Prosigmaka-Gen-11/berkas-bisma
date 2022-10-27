import FormCreator from "./FormCreator";
import { useState, useEffect } from 'react'
import axios from 'axios'

let programmingList = []
let index
let fullString

const inisiateData = {
    name: '',
    birthday: '',
    gender: '',
    programming: '',
    howMaster: '',
    quotes: ''
}

export default function Form() {
    const { formInput, anyTypeForm, handleForm, handleFormCheck } = FormCreator(inisiateData)
    const [allList, setAllList] = useState([])
    const isEditing = formInput.id
    const inputType = document.getElementsByTagName('input')

    // Ambil semua data
    async function getBiodata() {
        const result = await axios.get('http://localhost:3000/biodata')
        // console.log(result)
        setAllList(result.data)
    }

    // Submit dan edit data
    async function handleSubmit(event) {
        event.preventDefault()

        if (isEditing) {
            await axios.put(`http://localhost:3000/biodata/${formInput.id}`, formInput)
        } else {
            await axios.post('http://localhost:3000/biodata', formInput)
        }

        programmingList = []
        uncheckAll()
        getBiodata()
        anyTypeForm(inisiateData)
    }

    function uncheckAll() {
        for (var i = 0; i < inputType.length; i++) {
            if (inputType[i].type == 'radio' || inputType[i].type == 'checkbox') {
                inputType[i].checked = false
            }
        }
    }

    async function deleteData(id) {
        await axios.delete(`http://localhost:3000/biodata/${id}`)
        getBiodata()
    }

    // Untuk mengatur input jenis checkbox
    function handleCheck(event, propName) {
        // console.log(event)
        if (event.target.checked) programmingList.push(event.target.value)
        else {
            index = programmingList.indexOf(event.target.value)
            if (index > -1) {
                programmingList.splice(index, 1);
            }
        }
        fullString = programmingList.join(', ')
        // console.log(programmingList, fullString)
        // console.log(formInput)
        handleFormCheck(event, propName, fullString)
    }

    // Menyiapkan fitur edit
    function showEdit(biodata) {
        uncheckAll()
        if(biodata.gender == 'Male') {
            document.getElementById('male').checked = true
        }
        if(biodata.gender == 'Female') {
            document.getElementById('female').checked = true
        }
        anyTypeForm(biodata)
    }

    // Debugging
    function ShowMe() {
        console.log(inputType)
    }

    useEffect(() => {
        getBiodata()
    }, [])

    return <>
        <button onClick={ShowMe}>
            Show Me on Console
        </button>
        <table border="1" width="100%">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Favourite Language</th>
                    <th>Mastery of Programming</th>
                    <th>Quotes</th>
                    <th>Extra</th>
                </tr>
            </thead>
            <tbody>
                {allList.map(listOfBio =>
                    <tr key={listOfBio.id}>
                        <td>{listOfBio.name}</td>
                        <td>{listOfBio.birthday}</td>
                        <td>{listOfBio.gender}</td>
                        <td>{listOfBio.programming}</td>
                        <td>{listOfBio.howMaster}</td>
                        <td>{listOfBio.quotes}</td>
                        <td>
                            <button onClick={() => showEdit(listOfBio)}>Edit</button>
                            <button onClick={() => deleteData(listOfBio.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>

        <form onSubmit={handleSubmit}>
            {/* Input Nama */}
            <label>
                Name <br />
                <input type="text" value={formInput.name} onChange={event => handleForm(event, 'name')}>
                </input>
            </label>
            <hr />

            {/* Input Tanggal Lahir */}
            <label>
                Date of Birth <br />
                <input type="date" value={formInput.birthday} onChange={event => handleForm(event, 'birthday')}>
                </input>
            </label>
            <hr />

            {/* Input Jenis Kelamin */}
            <label>Gender</label>
            <br />
            <label>
                <input type="radio" value='Male' name="gender" id="male" onChange={event => handleForm(event, 'gender')}></input>
                Male
            </label>
            <br />
            <label>
                <input type="radio" value='Female' name="gender" id="female" onChange={event => handleForm(event, 'gender')}></input>
                Female
            </label>
            <hr />

            {/* Input Bahasa pemrograman yang disukai */}
            <label>Your Favourite Programming Language</label>
            <br />
            <label>
                <input type="checkbox" value='Python' name="programming" id="python" onChange={event => handleCheck(event, 'programming')}></input>
                Python
            </label>
            <br />
            <label>
                <input type="checkbox" value='HTML' name="programming" id="html" onChange={event => handleCheck(event, 'programming')}></input>
                HTML
            </label>
            <br />
            <label>
                <input type="checkbox" value='Java' name="programming" id="java" onChange={event => handleCheck(event, 'programming')}></input>
                Java
            </label>
            <br />
            <label>
                <input type="checkbox" value='SQL' name="programming" id="sql" onChange={event => handleCheck(event, 'programming')}></input>
                SQL
            </label>
            <hr />

            {/* Input Keahlian */}
            <label>
                How much confidence about your mastery from chosen language? (Overall if more than 1) <br />
                <select value={formInput.howMaster} onChange={event => handleForm(event, 'howMaster')}>
                    <option value="" disabled>- Select -</option>
                    <option value="Master">1. I'm skillfull</option>
                    <option value="Advanced">2. Mostly I understand</option>
                    <option value="Intermediate">3. Need to learn a lot</option>
                    <option value="Novice">4. Barely known about it</option>
                    <option value="Newbie">5. Meh</option>
                </select>
            </label>
            <hr />

            {/* Input Quotes */}
            <label>
                Quotes <br />
                <textarea value={formInput.quotes} onChange={event => handleForm(event, 'quotes')}>
                </textarea>
            </label>
            <hr />

            {/* Submit */}
            <button>
                Submit This Form
            </button>
        </form>
    </>
}