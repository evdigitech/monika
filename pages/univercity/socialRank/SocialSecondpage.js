import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { BsZoomOut, BsGeoAlt, BsFillFlagFill } from "react-icons/bs";
import ListChart from "../ListChart";
import { useSelector, useDispatch } from "react-redux";
import { universityAction } from "../../../redux//list/actions";
import { useRouter } from "next/router";
import EntertainmentCom from "../studentContent/EntertainmentCom"


function SocialSecondPage({ 
  allCollegeData,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [studentData, setStudentData] = useState([]);
  const [school, setSchool] = useState([]);
  const [schoolInfoId, setschoolInfoId] = useState([]);

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
      }
    };

    const onEntertainmentHandler=()=>{

    }
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
    <EntertainmentCom />
    <div className="">
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
              <Button className="Rectangle-17-copy"
              onClick={()=>onEntertainmentHandler()}>
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
                          style={{ padding: "0px"}}
                        >
                          <div clssName="img_base">
                            <img
                              src={college.image}
                              alt="Images of College"
                              style={{
                                cursor: "pointer",
                                width: "100%",
                                height: "233px",
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
export default SocialSecondPage;

