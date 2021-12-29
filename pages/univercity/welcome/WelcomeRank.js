import { useState } from "react";
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
import rank from "../../../styles/assets/images/ranklogo.jpg";
import rankIllustration from "../../../styles/assets/images/rank-illustration.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import CollegeRankDetai from "./CollegeRankDetail";
import "bootstrap/dist/css/bootstrap.min.css";

function WelcomeRank() {
  const route = useRouter();
  const [clgRank, setClgRank] = useState(false);
  const [socialMediaRank, SetSocialMediaRank] = useState(true);
  const [flag, setFlag] = useState(false);
  const[buttonFlag, SetButtonFlag]=useState(0)

  const dispatch = useDispatch();

  const clgRankHandler = (val) => {
    setFlag(true);
    
  };

  const socilMediaHandler =( index,val) => {
    // route.push("");
    SetButtonFlag(index)
    // setFlag(true);
    if(index== 0 ){
      route.push("");
    }else{
// route.push('/univercity/socialRank/SocialRank')
    }

  };

  return (
    <>
      <div className="container-fluid Header-BackgroundMask">
        <div className="container">
          <Row>
            <Col xs={12} sm={12} md={6} className="wel-rank-col">
              <div className="Welcome-Rank-div">
                <span className="Welcome-to-Rankorder">
                  Welcome to Rankordered
                </span>
                <div>
                  <span className="We-crowdsource-opini">
                    We crowdsource opinions from hundreds of thousands of users
                    to obtain a real-time, accurate ranking of cultural items of
                    importance.
                  </span>
                </div>
              </div>
              {/* d-md-block */}
              <div className="d-md-block">
              <Row>
                <Col md={5}>
                  <Button
                    className={buttonFlag == 0 ? "Rectangle":"Flagutton"}
                    
                    value={clgRank}
                    onClick={() => socilMediaHandler(0)}
                  >
                    <span className="Browse-College-Ranki">
                      Browse College Rankings
                    </span>
                  </Button>
                </Col>
                <Col md={7}>
                  <Button
                    className={buttonFlag == 1 ? "Rectangle":"Flagutton"}
                    value={socialMediaRank}
                    onClick={() => socilMediaHandler(1)}
                  >
                    <span className="Browse-Social-Media">
                      Browse Social Media Rankings
                    </span>
                  </Button>
                </Col>
              </Row>
            </div> 
              {/* <div className="">
                <Dropdown classname="dropdown-welcome-div">
                  <Dropdown.Toggle className="" id="dropdown-basic-Rectangle">
                    Browse College Rankings
                  </Dropdown.Toggle>
                  <Dropdown.Menu id="dropdown-menu-rectangle">
                    <Dropdown.Item
                      id="dropdown-menu-item"
                      value={clgRank}
                      onClick={() => clgRankHandler()}
                    >
                      <Link href="/"> Browse College Rankings</Link>
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="dropdown-menu-item"
                      onClick={() => socilMediaHandler()}
                    >
                      <Link href="/"> Browse Social Media Rankings</Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div> */}
            </Col>
            <Col xs={12} sm={12} md={6} className="wel-rank-col-img">
              <div className="Rank-Illustration">
                <Image
                  src={rankIllustration}
                  alt="illustration"
                  className=""
                  height={520}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {flag ? <CollegeRankDetai /> : ""}
    </>
  );
}
export default WelcomeRank;
