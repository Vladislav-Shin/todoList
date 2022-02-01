import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
// import { userCreated } from "../../actions";
import { userCreated } from "../users/userSlice";
import { useHttp } from "../../hooks/http.hook";

const UserAddForm = () => {
  const {users} = useSelector(state => state);
  const dispatch = useDispatch();
  const {request} = useHttp();

  const [data, setData] = useState(
    {
      id: "",
      name: "",
      salary: "",
      creatingDate: "",
    }
  );

  const onAddData = (e) => {
    e.preventDefault();

    const date = new Date();
    const options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    const current = date.toLocaleDateString("ru-US", options);

    const newData = {
      ...data, 
      id: uuidv4(), 
      creatingDate: current
    }

    request("http://localhost:3001/users", "POST", JSON.stringify(newData))
      .then(dispatch(userCreated(newData)))
      .catch(err => console.log(err))

    setData({
      id: "",
      name: "",
      salary: ""
    })
  }

  const onValueChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return ( 
    <div className="form-user mb-5 border p-4 shadow-lg rounded" style={{height: "fit-content"}}>
      <h4 className="form-label mb-3">Количество сотрудников: {users.length}</h4>
      <form onSubmit={onAddData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fs-4">
            Имя сотрудника
          </label>
          <input 
            required 
            name="name" 
            className="form-control" 
            type="text"
            value={data.name}
            onChange={onValueChange} />
          <label htmlFor="salary" className="form-label fs-4  mt-2">
            Зарплата сотрудника
          </label>
          <input
            required
            name="salary"
            className="form-control"
            type="number"
            value={data.salary}
            onChange={onValueChange}
          />
        </div>
        <button className="btn btn-primary">Добавить</button>
      </form>
    </div>
  );
};

export default UserAddForm;
