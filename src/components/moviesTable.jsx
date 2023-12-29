import { Component } from "react";
import likeFull from "../assets/icons/heart.svg";
import like from "../assets/icons/heart-outline.svg";
import Table from "./table";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <img
          onClick={() => this.props.onLiked(movie._id)}
          style={{ cursor: "pointer" }}
          src={movie.liked ? likeFull : like}
          alt="like"
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
