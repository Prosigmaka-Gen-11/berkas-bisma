import { useState } from "react"
import { Link, Outlet } from 'react-router-dom'

export default function BiodataLayout() {
	const [isShow, setIsShow] = useState(false)

	// Tampilkan list data
	function showData() {
		setIsShow(true)
	}

	// Sembunyikan list data
	function hideData() {
		setIsShow(false)
	}

	return <>
		<Link to="/biodata/form">
			<button onClick={hideData}>Add data</button>
		</Link>
		{isShow ?
			<Link to="/biodata">
				<button onClick={hideData}>Hide lists of data</button>
			</Link> :
			<Link to="/biodata/list">
				<button onClick={showData}>Show lists of data</button>
			</Link>
		}

		<br /><br />
		<Outlet />
	</>
}