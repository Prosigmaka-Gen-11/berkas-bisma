import { useContext } from "react";
import { dataContext } from "./App";

export default function ListData() {
    const { allList } = useContext(dataContext)

    return <>
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>NPM</th>
                    <th>Universitas</th>
                </tr>
            </thead>
            <tbody>
                {allList.map(eachList =>
                    <tr key={eachList.id}>
                        <td>{eachList.nama}</td>
                        <td>{eachList.npm}</td>
                        <td>{eachList.universitas}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </>
}