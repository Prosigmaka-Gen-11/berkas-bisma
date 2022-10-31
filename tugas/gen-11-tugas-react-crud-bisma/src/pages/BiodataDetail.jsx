import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BiodataDetail() {
    const params = useParams()
    const [biodata, setBiodata] = useState({})

    async function biodataDetail() {
        const result = await fetch('http://localhost:3000/biodata/' + params.biodataId)
        const data = await result.json()
        console.log(data)
        setBiodata(data)
    }

    useEffect(() => {
        biodataDetail()
        
    }, [])
    
    return <>
        <h2>Biodata Detail</h2>
        <p>Name: {biodata.name}</p>
        <p>Date of Birth: {biodata.birthday}</p>
        <p>Gender: {biodata.gender}</p>
        <p>Favourite Programming: {biodata.programming}</p>
        <p>Overall Skill: {biodata.howMaster}</p>
        <p>Quotes: {biodata.quotes}</p>
    </>
}