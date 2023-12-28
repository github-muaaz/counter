import likeFull from "../assets/icons/heart.svg";
import like from "../assets/icons/heart-outline.svg";


const MoviesTable = (props) => {

    const {movies, onLiked, onDelete} = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stoke</th>
          <th scope="col">Rate</th>
          <th/>
          <th/>
        </tr>
      </thead>
      <tbody>
        {movies.map((m) => (
          <tr key={m._id}>
            <td>{m.title}</td>
            <td>{m.genre.name}</td>
            <td>{m.numberInStock}</td>
            <td>{m.dailyRentalRate}</td>
            <td>
              <img
                onClick={() => onLiked(m._id)}
                style={{ cursor: "pointer" }}
                src={m.liked ? likeFull : like}
                alt="like"
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(m._id)}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
