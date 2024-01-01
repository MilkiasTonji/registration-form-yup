import { ReactNode, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import localforage from "localforage";

type childProp = {
  children: ReactNode;
};
const Layout = ({ children }: childProp) => {
  const [user, setUser] = useState({});

  useMemo(() => {
    const getuser = async () => {
      try {
        const user: any = await localforage.getItem("user");
        return user; 
      } catch (err) {
        return {}; 
      }
    };

    getuser().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <div className="all_container">
      <Navbar user={user} />

      {children}
    </div>
  );
};

export default Layout;
