import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import "./todo.css";

function Todolist() {
  const initialstate = "";
  const [iscompletescreen, setiscompletescreen] = useState(false);
  const [alltodos, settodos] = useState([]);
  const [newtitle, settitle] = useState(initialstate);
  const [newDescription, setNewDescription] = useState(initialstate);
  const [completedtodo, setcompletedtodo] = useState([]);

  const HandleAddTodo = () => {
    if (!newtitle || !newDescription) {
      alert("Enter both title and description");
      return;
    }

    let newTodo = {
      id: Date.now(), // Generate a unique ID
      title: newtitle,
      description: newDescription,
    };
    let updatedtodo = [...alltodos, newTodo];

    settodos(updatedtodo);
    localStorage.setItem("todolist", JSON.stringify(updatedtodo));
    settitle(initialstate);
    setNewDescription(initialstate);
  };

  const HandleDeleteTodo = (index) => {
    const filteredTodos = alltodos.filter((_, i) => i !== index);
    settodos(filteredTodos);
    localStorage.setItem("todolist", JSON.stringify(filteredTodos));
  };

  const HandleCompletetodo = (index) => {
    const now = new Date();
    const completedOn = now.toLocaleString();

    const filtereddata = {
      ...alltodos[index],
      completedOn: completedOn,
    };

    const updatedArr = [...completedtodo, filtereddata];
    setcompletedtodo(updatedArr);
    localStorage.setItem("completedtodo", JSON.stringify(updatedArr));

    const filteredTodos = alltodos.filter((_, i) => i !== index);
    settodos(filteredTodos);
    localStorage.setItem("todolist", JSON.stringify(filteredTodos));
  };

  const HandleDeleteTodoInComplete = (index) => {
    const filteredtodo = completedtodo.filter((_, i) => i !== index);
    setcompletedtodo(filteredtodo);
    localStorage.setItem("completedtodo", JSON.stringify(filteredtodo));
  };

  useEffect(() => {
    const saveddata = JSON.parse(localStorage.getItem("todolist"));
    const completeddata = JSON.parse(localStorage.getItem("completedtodo"));
    if (saveddata) {
      settodos(saveddata);
    }
    if (completeddata) {
      setcompletedtodo(completeddata);
    }
  }, []);

  return (
    <div className="App">
      <h1>To Do</h1>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input
              type="text"
              value={newtitle}
              onChange={(e) => settitle(e.target.value)}
              placeholder="Todo's title"
            />
          </div>
          <div className="todo-input-item">
            <label>Description</label>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Todo's Description"
            />
          </div>
          <div className="todo-input-item">
            <button
              type="button"
              onClick={HandleAddTodo}
              className="primary-btn"
            >
              Add
            </button>
          </div>
        </div>

        <div className="btn-area">
          <button
            className={`secondary-btn ${!iscompletescreen && "active"}`}
            onClick={() => setiscompletescreen(false)}
          >
            Todo
          </button>
          <button
            className={`secondary-btn ${iscompletescreen && "active"}`}
            onClick={() => setiscompletescreen(true)}
          >
            Completed
          </button>
        </div>

        <div className="todo-list">
          {!iscompletescreen &&
            alltodos.map((item, index) => (
              <div className="todo-list-item" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div>
                  <AiOutlineDelete
                    onClick={() => HandleDeleteTodo(index)}
                    className="icon"
                  />
                  <BsCheckLg
                    onClick={() => HandleCompletetodo(index)}
                    className="check-icon"
                  />
                </div>
              </div>
            ))}

          {iscompletescreen &&
            completedtodo.map((item, index) => (
              <div className="todo-list-item" key={item.id}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <i>{item.completedOn}</i>
                  </p>
                </div>
                <div>
                  <AiOutlineDelete
                    onClick={() => HandleDeleteTodoInComplete(index)}
                    className="icon"
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
