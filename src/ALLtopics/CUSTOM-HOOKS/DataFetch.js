import React from 'react';
import useAxios from './useAxios-Function';

function DataFetch() {
  const [data, error, loading] = useAxios();
  console.log(data, error, loading, "fetching data");

  if (loading) {
    return <h4>Loading... please wait</h4>;
  }

  if (error) {
    return <h4>Something went wrong... please try again</h4>;
  }

  return (
    <div>
      <h3>Products</h3>
      {data.map((each) => (
        <div key={each.id}>
          <h3>{each.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default DataFetch;
