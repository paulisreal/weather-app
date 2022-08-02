import "./input.css"
import { FiSearch } from 'react-icons/fi';
const Input = () => {
  return (
    
    <form className="input">
        <input type={"text"} placeholder="Pleace enter location" className="input_value"/>
        <span className="input_search">
        <FiSearch />
        </span>
    </form>

  )
}

export default Input