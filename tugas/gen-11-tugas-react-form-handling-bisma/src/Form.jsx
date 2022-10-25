import FormCreator from "./FormCreator";

let programmingList = []
let index
let fullString

export default function Form() {
    const { formInput, handleForm, handleFormCheck } = FormCreator({
        name: '',
        birthday: '',
        gender: '',
        programming: '',
        howMaster: '',
        quotes: ''
    })

    // Untuk mengatur input jenis checkbox
    function handleCheck(event, propName) {
        console.log(event)
        if (event.target.checked) programmingList.push(event.target.value)
        else {
            index = programmingList.indexOf(event.target.value)
            if (index > -1) {
                programmingList.splice(index, 1);
            }
        }
        fullString = programmingList.join(', ')
        console.log(programmingList, fullString)
        console.log(formInput)
        handleFormCheck(event, propName, fullString)
    }

    function Submitting(event) {
        event.preventDefault()
    }

    return <>
        <p>Name: {formInput.name}</p>
        <p>DoB: {formInput.birthday}</p>
        <p>Gender: {formInput.gender}</p>
        <p>Favourite Language: {formInput.programming}</p>
        <p>Mastery of Programming: {formInput.howMaster}</p>
        <p>Quotes: {formInput.quotes}</p>
        
        <form onSubmit={event => Submitting(event)}>
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
                <input type="radio" value='male' name="gender" onChange={event => handleForm(event, 'gender')}></input>
                Male
            </label>
            <br />
            <label>
                <input type="radio" value='female' name="gender" onChange={event => handleForm(event, 'gender')}></input>
                Female
            </label>
            <hr />

            {/* Input Bahasa pemrograman yang disukai */}
            <label>Your Favourite Programming Language</label>
            <br />
            <label>
                <input type="checkbox" value='Python' name="programming" onChange={event => handleCheck(event, 'programming')}></input>
                Python
            </label>
            <br />
            <label>
                <input type="checkbox" value='HTML' name="programming" onChange={event => handleCheck(event, 'programming')}></input>
                HTML
            </label>
            <br />
            <label>
                <input type="checkbox" value='Java' name="programming" onChange={event => handleCheck(event, 'programming')}></input>
                Java
            </label>
            <br />
            <label>
                <input type="checkbox" value='SQL' name="programming" onChange={event => handleCheck(event, 'programming')}></input>
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