import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Biodata() {
    const [allList, setAllList] = useState([])

    // Ambil semua data
    async function getBiodata() {
        const result = await fetch('http://localhost:3000/biodata')
        const data = await result.json()
        setAllList(data)
    }

    // Delete data
    async function deleteData(id) {
        fetch(`http://localhost:3000/biodata/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    }

    // Selalu update setiap ada perubahan di allList
    useEffect(() => {
        getBiodata()
    }, [allList])

    return <>
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
                            <Link to={'/biodata/form/' + listOfBio.id}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteData(listOfBio.id)}>Delete</button>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}