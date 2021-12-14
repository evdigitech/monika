import { children,useState,useEffect} from "react";
import Navbar from "./Navbar";
import router, { useRouter } from "next/router";


function Layout({ children }) {
  // const[showWhite,setShowWhite]=useState(true)

  // useEffect(() => {
  //  if(router.pathname==="/univercity/welcome/[CollegeDetailId]"){
  //   setShowWhite(true)
  //  }else{
  //   setShowWhite(false)
  //  }
  // }, [router])
  return (
    <div >
      <Navbar />     
      <main >
        {children}
        </main>
    </div>
  );
}

export default Layout;
