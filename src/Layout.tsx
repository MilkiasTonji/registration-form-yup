import { ReactNode, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import localforage from "localforage";

type childProp = {
  children: ReactNode;
};
const Layout = ({ children }: childProp) => {
 const [user, setUser] = useState({});

 const memoizedUser = useMemo(() => {
  const getuser = async () => {
    try {
      const user: any = await localforage.getItem("user");
      return user; // Return the fetched user
    } catch (err) {
      console.log(err);
      return null; // Return null on error
    }
  };

  return getuser(); // Invoke the function to fetch user
}, []);

useEffect(() => {
  setUser(memoizedUser); // Update state with memoized user
}, [memoizedUser]);

  return (
    <div className="all_container">
      <Navbar user={user} />

      {children}
    </div>
  );
};

export default Layout;
