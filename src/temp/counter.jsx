const Counter = ({ funs, counter }) => {
  const { onDeleter, onIncrement, onDecriment } = funs;

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-2">
          <span className={getClass(counter)}>{getValue(counter.value)}</span>
        </div>

        <div className="col">
            <div className="row gap-1">
              <div className="col-3">
                <button
                  onClick={() => onIncrement(counter.id)}
                  className="btn btn-secondary"
                >
                  +
                </button>
              </div>
              <div className="col-3">
                <button
                  onClick={() => onDecriment(counter.id)}
                  className="btn btn-secondary"
                  disabled={disabled(counter.value)}
                >
                  -
                </button>
              </div>
              <div className="col-6">
                <button
                  onClick={() => onDeleter(counter.id)}
                  className="btn btn-danger"
                >
                  delete
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

const getValue = (v) => {
    if(v > 0)
    return v;

    return 'Zero'
}

const getClass = (counter) => {
  return counter.value <= 0 ? "badge badge-warning" : "badge badge-primary";
};

const disabled = (counter) => {
    return !counter > 0
}
