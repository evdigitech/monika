import React, { useState, useEffect } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { BsZoomOut, BsGeoAlt } from "react-icons/bs";
// import { connect } from "react-redux";
import { useRouter } from "next/router";
import data from "../Data.json";
import { Chart } from "react-google-charts";
import { useSelector, useDispatch } from "react-redux";
import ListChart from "../ListChart";
import { universityAction } from "../../../redux/list/actions";

import Image from "next/image";

function CollegeRankDetai({
  listDetailsHandlerCall,
  universityListReducer,
  allCollegeData,
}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const [rankData, setRankData] = useState([]);
  const [school, setSchool] = useState([]);
  const [schoolInfoId, setschoolInfoId] = useState([]);

  const { university_details_data } = useSelector(
    (state) => state.universityListReducer
  );

  const initialLoad = () => {
    dispatch(universityAction());
  };
  useEffect(() => {
    initialLoad();
  }, []);

  useEffect(() => {
    if (university_details_data && university_details_data) {
      setRankData(university_details_data);
    }
  }, [university_details_data]);

  const collegeDetails = (value) => {
    console.log("collegeDetails", value);
    router.push(`univercity/welcome/${value}`);
  };
  const MoreInfo = ({ children, college }) => {
    const text = children;
    const [isMoreInfo, setMoreInfo] = useState(true);

    const toggleMoreInfo = (college) => {
      allCollegeData(college);
      setMoreInfo(!isMoreInfo);
      if (allCollegeData.length != 2) {
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
        {isMoreInfo ? text.slice(0, 250) : text}
        <span onClick={() => toggleMoreInfo(school)} className="read-or-hide">
          <br />
          {isMoreInfo ? "" : ""}
        </span>
      </p>
    );
  };
  return (
    <>
      {/* < CollegeDetail/> */}
      <div className="container">
        <div className="">
          <Row className="college_row">
            <Col sm={12} md={8} lg={12} xl={8} className="list-college-rank">
              <div className="">
                <span className="Crowdsourced-College crowdsourced-college-mobile">
                  Crowdsourced College Rankings
                </span>
              </div>
              <div className="Rectangle-line d-none d-md-block">
                <hr />
              </div>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4} className="list-college-input">
              <div className="Rectangle-Copy-5">
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
        </div>

        {/* card */}
        {/* className="bg" */}
        <div className="college-area">
          <div className="">
            {rankData &&
              rankData.map((college, index) => {
                // if(rankData.length === index + 1){
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
                          <div
                            clssName="img_base"
                            onClick={(e) => collegeDetails(college.id)}
                          >
                            <Image
                              src={college.image}
                              className="img_base_rank"
                              alt="Images of College"
                              width={400}
                              height={233}
                              // layout="fill"
                              // style={{
                              //   cursor: "pointer",
                              //   width: "100%",
                              //   height: "233px",
                              // }}                              
                            />
                          </div>
                          <div clssName="Forma-1-copy-6">
                            <span onClick={(e) => collegeDetails(college.id)}>
                              <div className="uuu text-white ps-2">
                                <strong>#{college.rank_number}</strong>
                              </div>
                            </span>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div style={{ padding: "1rem 0.5rem 1rem 14px" }}>
                            <h4
                              onClick={(e) => collegeDetails(college.id)}
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
                            <MoreInfo
                              school={college}
                              onClick={(e) => collegeDetails(college.id)}
                            >
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
                // }
              })}
          </div>
          <div className="text-center mt-5">
            <Button className="start_ranking">
              <span className="Start-ranking">Load More</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeRankDetai;
