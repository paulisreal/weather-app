import "./input.css"
import { FiSearch } from 'react-icons/fi';
const Input = ({text, submit,func}) => {
  return (
   
    <form className="input" onSubmit={submit}>
        <input type={"text"} placeholder="Pleace enter location" className="input_value" onChange={text}/>
        <span className="input_search" onClick={func}>
        <FiSearch />
        </span>
    </form>

  )
}

export default Input