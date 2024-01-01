import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";
import * as yup from "yup";

import "./TodoList.css";

type TodoType = {
  title: string;
};
const TodoList = () => {
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [todoList, setTodoList] = useState([]);
  const navigate = useNavigate();

  const todoSchema = yup.object({
    title: yup.string().required(),
  });

  useEffect(() => {
    const getuser = async () => {
      try {
        const user = await localforage.getItem("user");
        const todos: any = await localforage.getItem("todos");
        setTodoList(todos);
        if (!user) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getuser();
  }, []);

  const handleSubmit = async () => {
    try {
      const todoObject: TodoType = { title };
      const todo = await todoSchema.validate(todoObject, { strict: true });
      let todos: any = await localforage.getItem("todos");
      if (todos != null) {
        todos = [...todos, todo];
      } else {
        todos = [todo];
      }
      console.log("updated: ", todos);
      await localforage.setItem("todos", todos);
    } catch (error: any) {
      const rr = error.name + " " + error.errors[0];
      setError(rr);
    }
  };
  return (
    <Layout>
      {error && <p>{error}</p>}
      <div className="input_container">
        <input
          className="input"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          Add
        </button>
      </div>
      <div className="list_container">
        {todoList && todoList.length > 0 ? <>
        {
          todoList.map((todo: TodoType, index)=> (
            <div className="list_inner_container" key={`${index}-todoList`}>
               <p>{todo.title}</p>
               <button className="button" onClick={handleSubmit}>
          Delete
        </button>
            </div>
          ))
        }
        </> : <p>To do List Empty</p>}
      </div>
    </Layout>
  );
};

export default TodoList;
