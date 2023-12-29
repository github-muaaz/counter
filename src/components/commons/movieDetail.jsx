const MovieDetail = (props) => {
  const returnBack = () => {
    props.history.replace("/movies");
  };

  return (
    <div className="container">
      <h1>Movie From {props.match.params.id}</h1>

      <button onClick={() => returnBack()} className="btn btn-success m-4">
        Save
      </button>
    </div>
  );
};

export default MovieDetail;
