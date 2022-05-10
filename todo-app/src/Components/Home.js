import React, { useState } from "react";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

import style from "./home.module.css";
import NewTODO from "./NewTodo";
const Home = () => {
  const [todos, setTodos] = useState([]);

  const HandleNewTodo = (newtodo) => {
    setTodos((old) => {
      return [...old, { id: uuidv4(), newtodo }];
    });
  };

  const RemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodos;
    });
  };

  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>TODO</h1>
      <NewTODO ontodo={HandleNewTodo} />
      <Todos todos={todos} onremoveTodo={RemoveTodo} />
    </div>
  );
};

export default Home;
