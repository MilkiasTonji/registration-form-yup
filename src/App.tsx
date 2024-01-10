import { useEffect, useState } from 'react';
import './App.css'
import Registration from './components/Registration'
import Layout from './Layout'
import localforage from 'localforage';
import Login from './components/Login';
function App() {

  const [user, setUser] = useState({});

  useEffect(() => {
    const getuser = async () => {
      try {
        const user: any = await localforage.getItem("user");
        setUser(user)
      } catch (err) {
        console.log(err);
      }
    };

    getuser();
  }, []);
  return (
    <Layout>
      {
        Object.keys(user).length === 0 ? <Registration />: <Login />
      }
      
    </Layout>
  )
}

export default App
