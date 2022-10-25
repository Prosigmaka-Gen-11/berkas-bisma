import React, { Component } from "react";

let programmingList = []
let index
let fullString

export default class FormClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            birthday: '',
            gender: '',
            programming: '',
            howMaster: '',
            quotes: ''
        }
    }

    // Untuk mengatur input jenis checkbox
    handleCheck(event, propName) {
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
        this.handleFormCheck(event, propName, fullString)
    }

    handleForm(event, propName) {
        console.log(event)
        this.setState({ [propName]: event.target.value })
    }

    handleFormCheck(event, propName, fullString) {
        this.setState({ [propName]: fullString })
    }

    Submitting(event) {
        event.preventDefault()
    }

    render() {
        return <>
            <p>Name: {this.state.name}</p>
            <p>DoB: {this.state.birthday}</p>
            <p>Gender: {this.state.gender}</p>
            <p>Favourite Language: {this.state.programming}</p>
            <p>Mastery of Programming: {this.state.howMaster}</p>
            <p>Quotes: {this.state.quotes}</p>

            <form onSubmit={event => this.Submitting(event)}>
                {/* Input Nama */}
                <label>
                    Name <br />
                    <input type="text" value={this.state.name} onChange={event => this.handleForm(event, 'name')}>
                    </input>
                </label>
                <hr />

                {/* Input Tanggal Lahir */}
                <label>
                    Date of Birth <br />
                    <input type="date" value={this.state.birthday} onChange={event => this.handleForm(event, 'birthday')}>
                    </input>
                </label>
                <hr />

                {/* Input Jenis Kelamin */}
                <label>Gender</label>
                <br />
                <label>
                    <input type="radio" value='male' name="gender" onChange={event => this.handleForm(event, 'gender')}></input>
                    Male
                </label>
                <br />
                <label>
                    <input type="radio" value='female' name="gender" onChange={event => this.handleForm(event, 'gender')}></input>
                    Female
                </label>
                <hr />

                {/* Input Bahasa pemrograman yang disukai */}
                <label>Your Favourite Programming Language</label>
                <br />
                <label>
                    <input type="checkbox" value='Python' name="programming" onChange={event => this.handleCheck(event, 'programming')}></input>
                    Python
                </label>
                <br />
                <label>
                    <input type="checkbox" value='HTML' name="programming" onChange={event => this.handleCheck(event, 'programming')}></input>
                    HTML
                </label>
                <br />
                <label>
                    <input type="checkbox" value='Java' name="programming" onChange={event => this.handleCheck(event, 'programming')}></input>
                    Java
                </label>
                <br />
                <label>
                    <input type="checkbox" value='SQL' name="programming" onChange={event => this.handleCheck(event, 'programming')}></input>
                    SQL
                </label>
                <hr />

                {/* Input Keahlian */}
                <label>
                    How much confidence about your mastery from chosen language? (Overall if more than 1) <br />
                    <select value={this.state.howMaster} onChange={event => this.handleForm(event, 'howMaster')}>
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
                    <textarea value={this.state.quotes} onChange={event => this.handleForm(event, 'quotes')}>
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
}
