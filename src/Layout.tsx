import { ReactNode } from "react";
import Navbar from "./components/Navbar";

type childProp = {
  children: ReactNode;
};
const Layout = ({ children }: childProp) => {
  return (
    <div className="all_container">
      <Navbar />

      {children}
    </div>
  );
};

export default Layout;
