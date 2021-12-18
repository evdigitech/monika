import { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Image from "next/image";
import rank from "../styles/assets/images/ranklogo.jpg";
import illustration from "../styles/assets/images/rank-illustration.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent() {
  const router = useRouter();
  const [showWhite, setShowWhite] = useState(true);
  const [showGreen, setShowGreen] = useState();
  useEffect(() => {
    if (router.pathname === "/univercity/welcome/[CollegeDetailId]") {
      setShowWhite(true);
    } else {
      setShowWhite(false);
    }
  }, [router]);

  useEffect(() => {
    if (router.pathname === "/univercity/socialRank/SocialRank") {
      setShowGreen(true);
    } else {
      setShowGreen(false);
    }
  }, [router]);
  return (
    <>
      <div
        className={`container-fluid ${
          !showWhite ? "Nav-Header-BackgroundMask" : "Nav-detail"
        }`}
      >
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#">
              <div className="Large_Rank_ordered_Logo d-none d-md-block">
                <Link href="/">
                  <Image src={rank} alt="rankorder" width={100} height={100} />
                </Link>
              </div>
              <div className="d-md-none pt-4">
                <Link href="/">
                  <span className="Rankordered">
                    <span className="text-style-1">Rank</span>ordered
                  </span>
                </Link>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="mx-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="/">
                  <span className="nav-link">Home</span>
                </Nav.Link>
                <Nav.Link href="/comman/About">
                  <span className="nav-link">About</span>
                </Nav.Link>
                <Nav.Link href="/comman/Contact">
                  <span className="nav-link">Contact</span>
                </Nav.Link>
              </Nav>
              <div className="div-end-line d-md-none pb-4"><hr/></div>
              <div>
                <Form className="d-flex">
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
                </Form>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>    
    </>
  );
}

export default NavbarComponent;
