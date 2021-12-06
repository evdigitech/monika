import { children } from "react";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="container-fluid Header-BackgroundMask">
      <Navbar />
     
      <main >
        {children}
        </main>
    </div>
  );
}

export default Layout;
