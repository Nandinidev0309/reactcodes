import React, { useEffect, useState } from "react";

function TodoTask() {
  const [data, setData] = useState([]);

  useEffect(() => {
    weatherData();
  }, []);
  const weatherData = async () => {
    const response = await fetch(
      ""
    );
    const dd = await response.json();
    setData(dd);
  };
  return (
    <div>
      {data.map((each) => {
        return (<div>

        </div>)
      })}
    </div>
  );
}

export default TodoTask;
