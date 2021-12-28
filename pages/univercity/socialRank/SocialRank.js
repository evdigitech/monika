import { useState,useEffect } from "react";
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
import { BsZoomOut, BsGeoAlt, BsFillFlagFill } from "react-icons/bs";
import ListChart from "../ListChart";
import { useSelector, useDispatch } from "react-redux";
import { universityAction } from "../../../redux//list/actions";

function SocialRank() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [clgRank, setClgRank] = useState(false);
  const [socialMediaRank, SetSocialMediaRank] = useState(true);

  const [studentData, setStudentData] = useState([]);
  const [school, setSchool] = useState([]);
  const [schoolInfoId, setschoolInfoId] = useState([]);


  const clgRankHandler = (val) => {
    console.log("kkkk");
    // router.push("/univercity/welcome/WelcomeRank")
  };

  const socilMediaHandler = (val) => {
    console.log("socialll");
    // setFlag(true)
    console.log("disable");
  };

  const { university_details_data } = useSelector(
    (state) => state.universityListReducer
  );

  const initialLoad= () => {
    dispatch(universityAction());
  };
  useEffect(() => {
    initialLoad();
  }, []);

  useEffect(() => {
    if(university_details_data &&university_details_data){
      setStudentData(university_details_data);
    }
  }, [university_details_data]);

  const MoreInfo = ({ children, school }) => {
    const text = children;
    const [isMoreInfo, setMoreInfo] = useState(true);

    const toggleMoreInfo = (school) => {
      allCollegeData(school);
      setMoreInfo(!isMoreInfo);
      if (allCollegeData.length != 2) {
        history.push("/details-university");
      }
    };
    return (
      <p
        className="text"
        style={{
          fontSize: "13px",
          color: "#2c3e50",
        }}
      >
        {isMoreInfo ? text.slice(0, 125) : text}
        <span onClick={() => toggleMoreInfo(school)} className="read-or-hide">
          <br />
          {isMoreInfo ? "" : ""}
        </span>
      </p>
    );
  };


  return (
    <>
    
      <div className="container-fluid Header-BackgroundMask ">
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
                <Dropdown className="dropdown-welcome-div">
                <Dropdown.Toggle className="" id="dropdown-basic-Rectangle">
                  Browse College Rankings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    value={clgRank}
                    onClick={() => clgRankHandler()}
                  >
                    Browse College Rankings
                  </Dropdown.Item>
                  <Dropdown.Item
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
                    // layout='fill'
                    // width={100}
                    // height={520}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      {/* </div> */}
      <div className="container">
        <div className="">
          <Row className="social_student_college_row">
            <Col sm={12} md={8} lg={12} xl={8} className="list-college-rank">
              <div className="Crowdsourced-College crowdsourced-college-mobile">
                Discover the most engaging content
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="list-college-input">
              <div className="social-student-Rectangle-Copy-5">
                <form className="  d-flex" action="/action_page.php">
                  <input
                    className="Rectangle-Copy-6 input-ranking"
                    type="text"
                    placeholder="Type rank or name"
                    name="search2"
                  />
                  <button type="submit" className="search_btn">
                    <BsZoomOut className="search_icon text-white" />
                  </button>
                </form>
              </div>
            </Col>
          </Row>
          <div className="row engaging content">
            <div className="engaging_div">
              <Button className="Rectangle-17-copy">
                <span className="Start-ranking-active engaging-content-group">
                  Entertainment
                </span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Educational engaging-content-group">
                  Educational
                </span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Music engaging-content-group">Music</span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Humanitarian engaging-content-group">
                  Humanitarian
                </span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Health engaging-content-group">Health</span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Sport engaging-content-group">Sport</span>
              </Button>
              <Button className="Rectangle-17-copy">
                <span className="Art-Culture engaging-content-group">
                  Art & Culture
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* card */}
        {/* className="bg" */}
        <div className="college-area">
          <div className="">
            {studentData &&
              studentData.map((college, index) => {
                return (
                  <>
                    <div key={index}>
                      <div
                        key={college.id}
                        className="row mb-5 base"
                        style={{
                          border: "0px solid white",
                          border: " solid 1px #e8e8e8",
                          backgroundColor: " #fff",
                        }}
                      >
                        <div
                          className="col-md-4 ranking-img"
                          style={{ padding: "0px" }}
                        >
                          <div clssName="img_base">
                            <Image
                              src={college.image}
                              alt="Images of College"
                              width={400}
                              height={233}
                              style={{
                                cursor: "pointer",
                                // width: "100%",
                                // height: "233px",
                              }}
                            />
                          </div>
                          <div className="Path">
                            <BsFillFlagFill style={{ color: "#f3f3f3" }} />
                          </div>
                          <div className="Forma-1-copy-6">
                            <span>
                              <strong>#{college.rank_number}</strong>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-5 social-person-detail">
                          <div style={{ padding: "1rem 2.5rem 1rem 1px" }}>
                            <h4
                              onClick={() => showDetails(college)}
                              style={{
                                cursor: "pointer",
                                fontWeight: "900",
                                color: "#2c3e50",
                              }}
                              className="listPAge-hover"
                            >
                              {college.name}
                            </h4>
                            <h6
                              style={{
                                margin: "15px 0px",
                                fontSize: "14px",
                                fontWeight: "900",
                                color: "#2c3e50",
                              }}
                            >
                              <BsGeoAlt
                                className="map-img"
                                style={{
                                  color: "#44ac80",
                                }}
                              />
                              &nbsp;
                              {college.city}, {college.state}
                            </h6>
                            <MoreInfo school={college}>
                              {college.description}
                            </MoreInfo>
                            <div className="info_form_check">
                              <div className="form_check">
                                <lable
                                  style={{
                                    marginRight: "30px",
                                    fontSize: "12px",
                                  }}
                                >
                                  <input
                                    className="frrom-check-input"
                                    type="checkbox"
                                  />
                                  &nbsp;
                                  <span className="custom-span"></span>
                                  &nbsp;&nbsp;
                                  {schoolInfoId.includes(school.id) ? (
                                    <b>Compare Now »</b>
                                  ) : (
                                    <b>Add To Compare</b>
                                  )}
                                </lable>
                              </div>
                              <Button className="start_ranking-info ">
                                <span className="Start-ranking">More info</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3" style={{ padding: "0px" }}>
                          <div>
                            <ListChart school={college} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="text-center mt-5">
            <Button className="start_ranking">
              <span className="Start-ranking">Load More</span>
            </Button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default SocialRank;
