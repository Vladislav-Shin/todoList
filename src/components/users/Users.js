const Users = ({ name, salary, onUserDelete, creatingDate }) => {
  return (
    <li className="card flex-row mb-4 shadow-lg position-relative">
      <img
        src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg"
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{`${salary}$`}</p>
        <button
          onClick={onUserDelete}
          type="button"
          className="btn btn-danger">
            Удалить
        </button>
      </div>
      <div
        className="card-text user-date"
        style={{ height: "fit-content", padding: "0.5rem" }}>
          {creatingDate}
      </div>
    </li>
  );
};

export default Users;
