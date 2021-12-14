import React, { useEffect, useState } from "react";
import { apiPath } from "../../api/commonPath";
import moment from "moment";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button} from "react-bootstrap";

const { Chart } = require("react-google-charts");

const CollegeDetail = () => {

  const router = useRouter();
 const {CollegeDetailId:id}= router.query

  const [collegeInfo, setCollegeInfo] = useState([]);
  const [allDetailData, setAllDetailData] = useState([]);

  useEffect(() => {
      initialLoad(id);     
  }, [id]);

  const initialLoad = (id) => {
    console.log("idddd", id);
    fetch(apiPath +`/api/v1/colleges/${id}/id`, {
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
        setCollegeInfo(resData);
        setAllDetailData(res);
        console.log("allDetailDataSSSS::", res);
      })
      .catch((error) => console.log("College Graph Err::", error));
  };

  const dataValue = [];
  console.log('dataValue',dataValue)
  dataValue.push(["Date", "Rank"]);
  collegeInfo &&
    collegeInfo.map((data) => {
      dataValue.push([data[0], data[1]]);
    });

  const redirectPage = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="container">
      {/* Image section */}
      <div className="row Detial-page-div">
        <div className="col-md-12">
          {console.log("object", allDetailData.name)}
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
          <h1 className="college-detial-name">{allDetailData.name}</h1>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              // src={allDetailData.image}
              className="Detial-page-card"
              style={{
                width: "100%",
                height: "448px",
                borderRadius: "76px 0px 76px 0px",
                margin: "0px 0px 0px -1px",
              }}
              alt="img"
              onClick={() => redirectPage(allDetailData.description_url)}
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
        <div className="row">
         <div className="col-sm-12 col-md-6">
         <a
            title={allDetailData.description_url}
            onClick={() => redirectPage(allDetailData.description_url)}
          >
            <b>Description (Wikipedia)&nbsp;:</b>
            &nbsp;{allDetailData.description}
          </a>
         </div>
         <div className="col-sm-12 col-md-6">
           <Button>
             <span>From : Wikipedia </span>
           </Button>
         </div>
        </div>

        {/* <div style={{ cursor: "pointer" }}>
            <h3 style={{ color: "#00c292" }}>
              Overview of {allDetailData.name}
            </h3>
            <div>
              <div>
                <b>Rank&nbsp;:</b>
                <h5 className="d-inline-block mb-0">
                  &nbsp;{allDetailData.rank_number}
                </h5>
              </div>
              <div>
                <b>Website&nbsp;:</b>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>{allDetailData.website}</Tooltip>}
                >
                  <a href={allDetailData.website}>
                    &nbsp;
                    <u>
                      {allDetailData.website
                        ? allDetailData.website
                            .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
                            .split("/")[0]
                        : ""}
                    </u>
                  </a>
                </OverlayTrigger>
              </div>

              <div>
                <b>Founded&nbsp;:</b>&nbsp;{allDetailData.founded_date}
              </div>
              <div>
                <a
                  title={allDetailData.description_url}
                  onClick={() => redirectPage(allDetailData.description_url)}
                >
                  <b>Description (Wikipedia)&nbsp;:</b>
                  &nbsp;{allDetailData.description}
                </a>
              </div>
            </div>
          </div> */}
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


// import React from 'react'
// import {useRouter} from "next/router"

// function CollegeDetailId() {
// const router = useRouter()
// console.log("router",router)
// const {CollegeDetailId:id}= router.query
// console.log('id',id)
//   return (
//     <div>
//       <h1>CollegeDetailId</h1>
//     </div>
//   )
// }

// export default CollegeDetailId
