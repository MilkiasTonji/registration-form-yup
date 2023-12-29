import { ReactNode, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import localforage from "localforage";

type childProp = {
  children: ReactNode;
};
const Layout = ({ children }: childProp) => {
 const [user, setUser] = useState({});
  useEffect(()=> {
    const getuser = async () => {
      try {
        const user: any = await localforage.getItem("user");
        setUser(user)
      } catch (err) {
        console.log(err);
      }
    };
  
    getuser();
  },[])

  return (
    <div className="all_container">
      <Navbar user={user} />

      {children}
    </div>
  );
};

export default Layout;
