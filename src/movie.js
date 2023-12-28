import { getMovies } from "./utils/fakeMovieService";
import React, { Component } from "react";
import Pagination from "./components/pagination";
import { paginate } from "./utils/util";
import { getGenres } from "./utils/fakeGenreService";
import MoviesTable from "./components/moviesTable";

class Movie extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    genres: getGenres(),
    currentGenre: 0,
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter((m) => m._id !== movieId);

    this.setState({ movies });
  };

  onLiked = (id) => {
    this.setState(
      this.state.movies.map((m) => {
        if (m._id === id) m.liked = !m.liked;

        return m;
      })
    );
  };

  handlePage = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenre = (id) => {
    this.setState({ currentGenre: id, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      currentGenre,
    } = this.state;

    const filteredMovies =
      currentGenre === 0
        ? allMovies
        : allMovies.filter((m) => m.genre._id === currentGenre);

    const length = filteredMovies.length;

    if (length <= 0) return <h1>There are no movies in database</h1>;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-3">
              <ul className="list-group">
                <li
                  onClick={() => this.handleGenre(0)}
                  className={
                    currentGenre === 0
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                >
                  All Genres
                </li>
                {genres.map((genre) => (
                  <li
                    onClick={() => this.handleGenre(genre._id)}
                    key={genre._id}
                    className={
                      currentGenre === genre._id
                        ? "list-group-item active"
                        : "list-group-item"
                    }
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col">
              <h1 className="m-5">Showing {length} movies in database</h1>

              <MoviesTable
                movies={movies}
                onLiked={this.onLiked}
                onDelete={this.handleDelete}
              />

              <Pagination
                itemsCount={length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={this.handlePage}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movie;
