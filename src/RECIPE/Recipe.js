import React, { useState } from 'react';
import { Products } from './Products';


export const Recipe = () => {
  const [state, setState] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(
      `https://api.edamam.com/search?q=${state}&app_id=2c1c6b5e&app_key=453b1906a5de48eb73ad8705e2127ae3`
    )
      .then((response) => response.json())
      .then((data) => setData(data.hits));

    setState('');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        +        <div className="col-lg-6">
          <form onSubmit={submitHandler} className="mt-5">
            <div className="input-group mb-3">
              <input
                id="q"
                name="q"
                className="form-control"
                placeholder="Keyword"
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary ml-3"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
      {data.length >= 1 ? <Products data={data} /> : null}

    </div>
  );
};

