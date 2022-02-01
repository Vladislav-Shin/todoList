import UserAddForm from "../usersAddForm/usersAddForm";
import SearchUser from "../searchUser/SearchUser";
import UsersList from "../usersList/UsersList";

import "./app.scss";

const App = () => {

  return (
      <main className="container-lg main">
        <div className="content">
          <UsersList/>
          <div className="content__interactive">
            <UserAddForm />
            <SearchUser />
          </div>
        </div>
      </main>
  );
};

export default App;
