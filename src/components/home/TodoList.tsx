import { useEffect, useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

import "./TodoList.css";

const TodoList = () => {
  const [title, setTitle] = useState<string>("");

  const navigate = useNavigate();
  useEffect(() => {
    const getuser = async () => {
      try {
        const user = await localforage.getItem("user");
        console.log(user);
        if (!user) {
          navigate("/");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getuser();
  }, []);

  const handleSubmit = () => {
    console.log("submitting: ", title);
  };
  return (
    <Layout>
      <div className="input_container">
        <input
          className="input"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </Layout>
  );
};

export default TodoList;
