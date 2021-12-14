import  { useEffect, useState } from "react";
import moment from "moment";
import { Chart } from "react-google-charts";

function ListChart({school}) {
 const[ratingData,setRatingData]=useState([]);
 const [chatShow, setChatShow] = useState(false);

 var mergedData = [];

 useEffect(() => {
   console.log('lll',school)
   const resData = school.rank.map((item) => {
     if (item) {
       if (item[0] !== "Date") {
         item[0] = moment(item[0]).format("MM-DD-YYYY");
         mergedData = [...mergedData, [item[0], item[1], null]];
       }
     }
     return item;
   });

   const resDataTwo = school.ratings.map((item) => {
     if (item) {
       if (item[0] != "Date") {
         item[0] = moment(item[0]).format("MM-DD-YYYY");
         let checkMergedIndex = mergedData.findIndex(
           (data) => data[0] == item[0]
         );
         if (checkMergedIndex != null) {
           mergedData[checkMergedIndex][2] = item[1];
         } else {
           mergedData = [...mergedData, [item[0], null, item[1]]];
         }
       }
     }
     return item;
   });

   mergedData.sort((a, b) => {
     return new Date(b[0]) - new Date(a[0]);
   });
   setRatingData(mergedData);
   setChatShow(true);
 }, []);

 const chartData = [["Date", "Rank", "Elo rating"]];
 ratingData.map((data) => {
   chartData.push([data[0], data[1], data[2]]);
 });
    return (
        <div>
            {chatShow ? (
        <Chart
          width={"100%"}
          height={"220px"}
          chartType="LineChart"
          loader={<div className="text-success">Loading Chart....</div>}
          data={chartData}
          options={{
            legend:"none",
            chart: {
              style: {
                background: {
                  fillColor: "#f6f8fa",
                  fontSize: 11,
                  bold: true,
                  italic: false
                },
              },
            },
            axes: {
              // Adds labels to each axis; they don't have to match the axis names.
              y: {
                Rank: {
                  label: "Rank",
                  minValue: 0,
                  maxValue: 100,                  
                },
                ticks: [
                  0,
                  10,
                  20,
                  30,
                  40,
                  50,
                  60,
                  70,
                  80,
                  90,
                  100,
                  110,
                  120,
                  130,
                  140,
                  150,
                  160,
                  170,
                  180,
                ],
                EloRating: { label: "Elo rating" },
              },
            },
            series: {
              0: { axis: "Rank" },
              1: { axis: "EloRating" },
            },
            colors: ["#00c292", "#276419"],
            enableInteractivity: false,
          }}
         
          rootProps={{ "data-testid": "4" }}
        />
   ) : (
        ""
      )} 
        </div>
    )
}

export default ListChart
