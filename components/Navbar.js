import {useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
  ToggleButtonGroup,
  ToggleButto,
} from "react-bootstrap";
import Image from "next/image";
import rank from "../styles/assets/images/ranklogo.jpg";
import illustration from "../styles/assets/images/rank-illustration.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  const router= useRouter()
  const [detailflag, setDetailFlag] = useState(false)


  // const style={
  //   color:router.pathname === 'univercity/welcome/CollegeDetailId' ? 'red' : 'black',
  // }
 
  return (
    <>  
    {/* "container-fluid Nav-Header-BackgroundMask" */}
      <div className="container-fluid Nav-Header-BackgroundMask">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="">
              <div className="Large_Rank_ordered_Logo d-none d-md-block">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image
                      src={rank}
                      alt="rankorder"
                      width={100}
                      height={100}
                    />
                  </a>
                </Link>
              </div>
              <div className="d-md-none pt-4">
                <Link href="/">
                  <span className="Rankordered">
                    <span className="text-style-1">Rank</span>ordered
                  </span>
                </Link>
              </div>
            </div>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <div className="Home-About-Contact">
                <ul className="navbar-nav me-auto  mb-2 mb-lg-0 nav-list d-flex">
                  <li className="nav-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/">
                      <a>About</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="Rectangle-17-copy-nav">
                <form className="d-flex ">
                  <Button className="start_ranking">
                    <span className="Start-ranking">Start ranking</span>
                  </Button>
                  <div className="Hello-Susan_div">
                    <FaRegUser />
                    <span className="Hello-Susan">
                      Hello
                      <span className="text-style-1">&nbsp;&nbsp;Susan</span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </nav>            
        </div>
      </div>
    </>
  );
}

export default Navbar;
