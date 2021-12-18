import { children,useState,useEffect} from "react";
import NavbarComponent from "./Navbar";
import router, { useRouter } from "next/router";


function Layout({ children }) {
  
  return (
    <div >
      <NavbarComponent/>     
      <main >
        {children}
        </main>
    </div>
  );
}

export default Layout;
