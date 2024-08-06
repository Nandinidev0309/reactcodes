import React, { useRef } from "react";

function Uncontrolled() {
  const data = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data.current.value)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={data} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Uncontrolled;
