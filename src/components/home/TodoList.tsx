import { useEffect } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import localforage from "localforage";

const TodoList = () => {
 const navigate = useNavigate();
  useEffect(()=> {
    const getuser = async () => {
      try {
        const user = await localforage.getItem("user");
        console.log(user);
        if(!user){
         navigate('/')
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    getuser();
  },[])

  return (
    <Layout>
      <div>TodoList Component</div>
    </Layout>
  );
};

export default TodoList;
