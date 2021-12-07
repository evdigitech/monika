import { children } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />     
      <main >
        {children}
        </main>
    </div>
  );
}

export default Layout;
