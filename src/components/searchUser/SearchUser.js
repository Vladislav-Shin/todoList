import { useState } from "react";
import { useDispatch } from "react-redux";
// import { searchUser } from "../../actions";
import { searchUser } from "../users/userSlice";

const SearchUser = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onUpdateSearch = (e) => {
    const term = e.target.value;
    setTerm(term);
  }
  
  const onAdd = (e) => {
    e.preventDefault();
    dispatch(searchUser(term))
  }

  return (
    <div className="border shadow-lg p-4">
      <form action="mb-3" onSubmit={onAdd}>
        <label 
          className="form-label fs-4"
          htmlFor="name">Найти сотрудника</label>
        <input 
          name="name"
          className="form-control mb-3"
          type="text" 
          value={term}
          onChange={onUpdateSearch}/>
      <button 
        className="btn btn-primary"
        >
        Найти
      </button>
      </form>
    </div>
  )
}

export default SearchUser;