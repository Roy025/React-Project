import React, { useState } from "react";
import style from "./newtodo.module.css";
const NewTODO = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const Change = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") alert("Fill up both fields");
    else props.ontodo(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={HandleSubmit}>
      <div className={style["form-field"]}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={Change}
        />
      </div>
      <div className={style["form-field"]}>
        <label htmlFor="desc">Description: </label>
        <input
          type="text"
          name="desc"
          id="desc"
          value={desc}
          onChange={Change}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTODO;
