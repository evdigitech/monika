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
import illustration from "../../../styles/assets/images/illustration.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaRegUser } from "react-icons/fa";
import SocialSecondpage from "./SocialSecondpage";

function SocialRank() {
  const router = useRouter();
  const [clgRank, setClgRank] = useState(false);
  const [socialMediaRank, SetSocialMediaRank] = useState(true);
  const [flag, setFlag] = useState(false);

  const clgRankHandler = (val) => {
    console.log("kkkk");
    // router.push("/univercity/welcome/WelcomeRank")
    setFlag(true);
  };

  const socilMediaHandler = (val) => {
    console.log("socialll");
    setFlag(true)
    console.log("disable");
  };
  return (
    <>
    
      <div className="container-fluid ">
        <div className="container">
          {/* wellcome */}
          <div>
            <Row>
              <Col xs={12} sm={12} md={6} className="wel-rank-col">
                <div className="Welcome-Rank-div">
                  <span className="Crowdsourced-Social Crowdsourced-Social-mobile">
                    <span> Crowdsourced Social Media Rankings</span>
                  </span>
                  <div className="Didcover-most-div">
                    <span className="Discover-the-most-en-social Discover-the-most-en-social-mobile">
                      Discover the most engaging content,ranked by users like
                      you.
                    </span>
                  </div>
                </div>
                {/* d-md-block */}
                <div className="d-md-block">
                  {/* <Row>
                    <Col md={5}>
                      <Button
                        className="Rectangle"
                        value={clgRank}
                        onClick={() => clgRankHandler()}
                      >
                        <span className="Browse-College-Ranki">
                          Browse College Rankings
                        </span>
                      </Button>
                    </Col>
                    <Col md={7}>
                      <Button
                        className="Rectangle-Social-Media"
                        value={socialMediaRank}
                        onClick={() => socilMediaHandler()}
                      >
                        <span className="Browse-Social-Media">
                          Browse Social Media Rankings
                        </span>
                      </Button>
                    </Col>
                  </Row> */}
                </div>
                <div className="">
                <Dropdown>
                <Dropdown.Toggle className="" id="dropdown-basic Rectangle">
                  Browse College Rankings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#/action-1"
                    value={clgRank}
                    onClick={() => clgRankHandler()}
                  >
                    Browse College Rankings
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-1"
                    onClick={() => socilMediaHandler()}
                  >
                    Browse Social Media Rankings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} className="wel-rank-col-img">
                <div className="Rank-Illustration Rank-Illustration-mobile">
                  <Image
                    src={illustration}
                    alt="illustration"
                    className=""
                    height={520}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {flag ? <SocialSecondpage /> : ""}
    </>
  );
}

export default SocialRank;
