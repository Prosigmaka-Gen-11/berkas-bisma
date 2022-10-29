import { Link } from "react-router-dom"

export default function Home() {
  
  return <>
    <h1 className="text-center">Example of Form Handling using Router</h1>
    <Link to="/biodata" className="text-center">Click me!</Link>
  </>
}