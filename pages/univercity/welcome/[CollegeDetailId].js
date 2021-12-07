import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { apiPath } from "../../api/commonPath";
import moment from "moment";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "next/image";

const { Chart } = require("react-google-charts");

const CollegeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [collegeInfo, setCollegeInfo] = useState([]);
  const [allSchoolData, setAllSchoolData] = useState([]);
  let collegeDetail = [];

  useEffect(() => {
   
    initialLoad(id);
  }, [id]);
 
  const initialLoad = (id) => {
    console.log("idddd", id);
    fetch(apiPath + `/api/v1/colleges/${id}/id`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const resData = res.rank.map((item) => {
          if (item) {
            item[0] = moment(item[0]).format("MM-DD-YYYY");
          }
          return item;
        });
        setCollegeInfo(resData)
        setAllSchoolData(res);
        console.log("allSchoolDataSSSS::", res);
      })
      .catch((error) => console.log("College Graph Err::", error));
  };

  // console.log("allSchoolData:::::", allSchoolData);
  const dataValue = [];
  dataValue.push(["Date", "Rank"]);
  collegeInfo&&collegeInfo.map((data) => {
    dataValue.push([data[0], data[1]]);
  });


  const redirectPage = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="container">
      {/* Image section */}
      <div className="row">
        <div className="col-md-12">
          {console.log("object", allSchoolData.name)}
          <h1>{allSchoolData.name}</h1>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "50px",
              // padding: "33px",
              cursor: "pointer",
            }}
          >
            <img
              // src=""
              src={allSchoolData.image}
              className="img-fluid compare-card"
              className="compare-card"
              style={{
                width: "727px",
                height: "500px",
              }}
              alt="img"
              onClick={() => redirectPage(allSchoolData.description_url)}
            />
          </div>
        </div>
      </div>
       {/* Details Section */}
       <div
          className="col-sm-12 compare-card"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            padding: "33px",
          }}
        >
          <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "#00c292" }}>
              Overview of {allSchoolData.name}
            </h3>
            <div>
              <div>
                <b>Rank&nbsp;:</b>
                <h5 className="d-inline-block mb-0">
                  &nbsp;{allSchoolData.rank_number}
                </h5>
              </div>
              <div>
                <b>Website&nbsp;:</b>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{allSchoolData.website}</Tooltip>}
                >
                  <a href={allSchoolData.website}>
                    &nbsp;
                    <u>
                      {allSchoolData.website
                        ? allSchoolData.website
                            .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                            .split("/")[0]
                        : ""}
                    </u>
                  </a>
                </OverlayTrigger>
              </div>

              <div>
                <b>Founded&nbsp;:</b>&nbsp;{allSchoolData.founded_date}
              </div>
              <div>
                <a
                  title={allSchoolData.description_url}
                  onClick={() => redirectPage(allSchoolData.description_url)}
                >
                  <b>Description (Wikipedia)&nbsp;:</b>
                  &nbsp;{allSchoolData.description}
                </a>
              </div>
            </div>
          </div>
        </div>
      {/* Graph Section */}
      <div className="row">
        <div
          className="col-md-12 compare-card"
          style={{ height: "500px", cursor: "pointer" }}
        >         
          <Chart
            chartType="Scatter"
            loader={<div>Loading Chart....</div>}
            data={dataValue}
            style={{ margin: "50px auto" }}
            options={{
              width: "100%",
              height: 400,
              colors: ["#00c292"],
              backgroundColor: "#f1f8e9",
              theme: "material",
              legend: {
                position: "bottom",
              },
            }}
            rootProps={{ "data-testid": "1" }}
            legendToggle
          />
        </div>
       
      </div>
    </div>
  );
};

export default CollegeDetail;
