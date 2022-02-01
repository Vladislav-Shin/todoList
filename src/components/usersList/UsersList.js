import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userDeleted,
  usersFetched,
  usersFetching,
  usersFetchingError,
} from "../users/userSlice";
import { useHttp } from "../../hooks/http.hook";
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Users from "../users/Users";

const UsersList = () => {
  const { usersLoadingStatus, term } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const searchUser = useSelector(({users}) => {
    if (term == "") {
      return users;
    } else {
      return users.filter((item) => item.name === term);
    }
  });
  
  useEffect(() => {
    dispatch(usersFetching());
    request("http://localhost:3001/users")
      .then((data) => dispatch(usersFetched(data)))
      .catch(() => dispatch(usersFetchingError()));
  }, []);

  const onUserDelete = useCallback((id) => {
    request(`http://localhost:3001/users/${id}`, "DELETE")
      .then(dispatch(userDeleted(id)))
      .catch((err) => console.log(err));
  }, [request]);

  const renderUsersList = (arr, status) => {
    if (status === "loading") {
      return <Spinner/>
    } else if (status === "error") {
      return <ErrorMessage/>
    }

    if (arr.length === 0) {
      return (
          <h5 className="text-center mt-5">Пользователь пока нет</h5>
      );
    }

    return arr.map(({ id, ...props }) => {
      return (
          <Users key={id} {...props} onUserDelete={() => onUserDelete(id)} />
      );
    });
  };


  const items = renderUsersList(searchUser, usersLoadingStatus);

  return (
    <ul style={{ padding: "0" }}>
      {items}
    </ul>
  )
}

export default UsersList;