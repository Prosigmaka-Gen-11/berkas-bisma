import FormCreator from "./FormCreator";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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
    const params = useParams()
    const isEditing = params.biodataId
    const inputType = document.getElementsByTagName('input')

    // Submit dan edit data
    async function handleSubmit(event) {
        event.preventDefault()

        if (isEditing) {
            await fetch(`http://localhost:3000/biodata/${formInput.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInput)
            })
                .then((response) => response.json())
        } else {
            await fetch('http://localhost:3000/biodata', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formInput)
            })
                .then((response) => response.json())
        }

        programmingList = []
        uncheckAll()
        anyTypeForm(inisiateData)
    }

    function uncheckAll() {
        for (var i = 0; i < inputType.length; i++) {
            if (inputType[i].type == 'radio' || inputType[i].type == 'checkbox') {
                inputType[i].checked = false
            }
        }
    }

    // Untuk mengatur input jenis checkbox
    function handleCheck(event, propName) {
        if (event.target.checked) programmingList.push(event.target.value)
        else {
            index = programmingList.indexOf(event.target.value)
            if (index > -1) {
                programmingList.splice(index, 1);
            }
        }
        fullString = programmingList.join(', ')
        handleFormCheck(event, propName, fullString)
    }

    // Menyiapkan fitur edit
    function showEdit(biodata) {
        uncheckAll()
        if (biodata.gender == 'Male') {
            document.getElementById('male').checked = true
        }
        if (biodata.gender == 'Female') {
            document.getElementById('female').checked = true
        }
        anyTypeForm(biodata)
    }

    // Menyiapkan edit
    async function callForEditing() {
        const result = await fetch('http://localhost:3000/biodata/' + params.biodataId)
        const data = await result.json()
        showEdit(data)
        anyTypeForm(data)
    }

    // Form otomatis keisi pada awal kali ketika masuk dalam mode edit
    useEffect(() => {
        if (isEditing) {
            callForEditing()
        }
    }, [])

    return <form onSubmit={handleSubmit}>
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
}