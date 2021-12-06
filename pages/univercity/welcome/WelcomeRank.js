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
import illustration from "../../../styles/assets/images/rank-illustration.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { FaRegUser } from "react-icons/fa";
import ClgRankDetail from "../../univercity/welcome/ClgRankDetail";

function WelcomeRank() {
  const route = useRouter();
  const [clgRank, setClgRank] = useState(false);
  const [socialMediaRank, SetSocialMediaRank] = useState(true);
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
 
  const clgRankHandler = (val) => {
    console.log("kkkk");
    setFlag(true);
  };

  const socilMediaHandler = (val) => {
    console.log("socialll");
    route.push("/univercity/socialRank/SocialRank");
  };
  return (
    <>
      <div className="container">
        <Row>
          <Col xs={12} sm={12} md={6} className="wel-rank-col">
            <div className="Welcome-Rank-div">
              <span className="Welcome-to-Rankorder">
              Welcome to EvDigitech
                {/* Welcome to Rankordered */}
              </span>
              <div>
                <span className="We-crowdsource-opini">
                  We crowdsource opinions from hundreds of thousands of users to
                  obtain a real-time, accurate ranking of cultural items of
                  importance.
                </span>
              </div>
            </div>
            {/* d-md-block */}
            {/* <div className="d-md-block">
              <Row>
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
              </Row>
            </div> */}
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
            <div className="Rank-Illustration">
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
      {flag ? <ClgRankDetail /> : ""}
    </>
  );
}
export default WelcomeRank;

