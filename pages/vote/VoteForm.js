import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { set, useForm } from "react-hook-form";
// import FetchData from "./FetchData";
import axios from "axios";
import Image from "next/image";
import { apiPath } from "../api/commonPath";
import { BsGeoAlt } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { BsFillFlagFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Slider from "react-slick";

import illustration from "../../styles/assets/images/illustration.png";
import irankllustration from "../../styles/assets/images/rank-illustration.png";

import CollegeDetail from "../univercity/welcome/[CollegeDetailId]";

function VoteForm({ show, close }) {
  const router = useRouter();
  const {} = router.query;

  const { handleSubmit } = useForm();
  const [selectedCollege, setSelectedCollege] = useState();
  const [clgNotSelect, setClgNotSelect] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  const [voting, setVoting] = useState([]);
  const [votingError, setVotingError] = useState();

  console.log("voting", voting);

  const formSubmitHandler = () => {
    console.log("formSubmitHandler");
    if (userVerified) {
      setShowError(true);
      return;
    }
    router.push("./univercity/welcome/[CollegeDetailId]");
  };

  const submitVote = (value) => {
    console.log("hsfjg", value);
    if (!userVerified) {
      setShowError(true);
      return;
    }
  };
  const onSelectionChange = () => {
    console.log("setSelectedCollege");
    // setSelectedCollege(id);
  };

  // fetchapi
  useEffect(() => {
    setVoting([]);
  }, []);
  useEffect(() => {
    axios({
      method: "GET",
      url: apiPath + "/api/v1/colleges/voting",
    })
      .then((res) => {
        console.log("voting", voting);

        // setVoting((prevschools) => {
        //   return [...new Set([...prevschools, ...res.data])];
        // });
        // console.log("prevschools", prevschools);

        const arrayData = res.data;
        setVoting(arrayData);
        console.log("res", res);
      })
      .catch((error) => {
        setVotingError(error);
        console.log("erro", error);
      });
    return { voting, votingError };
  }, []);

  const voterMoreInfoHandler = (value) => {
    console.log("voterMoreInfoHandler");
    router.push(`../univercity/welcome/${value}`);
  };

  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const imageData = [
    {
      image1: illustration,
    },
    {
      image1: irankllustration,
    },
  ];
  return (
    <>
      <Modal
        show={show}
        onHide={close}
        animation={false}
        backdropClassName="votemodal voteForm"
        centered
        dialogClassName="modal-80w"
        backdrop="static"
        size="xl"
      >
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Modal.Header closeButton>
            <span className="Rankordered d-md-none">
              <span className="text-style-1">Rank</span>ordered
            </span>
          </Modal.Header>
          <Modal.Body>
            <div>
              <span className="Which-college-is-mor which-college-more-prestigious">
                Which college is more prestigious?
              </span>
            </div>

            <div className="card-content">
              <div
                className="slider_div"
                // style={{ width: "50%", height: "200px" }}
              >
                <div style={{ width: "50%", height: "200px" }}>
                  <Slider {...settings1} className="px-0 mx-0">
                    {voting.map((college, id) => {
                      return (
                        <Col key={id}>
                          <label
                            className={
                              selectedCollege === college.id
                                ? "voter-rectangle-earlham voter"
                                : "voter-rectangle-earlham>span,.voter-rectangle-earlham>span>img"
                            }
                          >
                            {/* <input
                              type="radio"
                              name="winner"
                              className="card-input-element voting-radio-selection"
                              value={college.id}
                              onClick={(e) => {
                                onSelectionChange(college.id);
                              }}
                            /> */}
                            <Image
                              className="voter-img-div voter-modal"
                              src={college.image}
                              alt="collegeimage"
                              // layout='fill'
                              width={400}
                              height={400}
                              // value={college.id}
                              onClick={console.log("gfhjfgi")}
                            />
                          </label>
                        </Col>
                      );
                    })}
                  </Slider>
                </div>
                <div style={{ width: "50%", height: "200px" }}>
                  <Slider {...settings1} className="px-0 mx-0">
                    {voting.map((college, id) => {
                      return (
                        <Col key={id}>
                          <label
                            className={
                              selectedCollege === college.id
                                ? "voter-rectangle-earlham voter"
                                : "voter-rectangle-earlham>span,.voter-rectangle-earlham>span>img"
                            }
                          >
                            <input
                              type="radio"
                              name="winner"
                              className="card-input-element voting-radio-selection"
                              value={college.id}
                              onChange={(e) => {
                                onSelectionChange(college.id);
                              }}
                            />
                            <Image
                              className="voter-img-div voter-modal"
                              src={college.image}
                              alt="collegeimage"
                              // layout='fill'
                              width={400}
                              height={400}
                            />
                          </label>
                        </Col>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="d-none d-md-block">
              <div className="capther-bg-box">
                <ReCAPTCHA
                  sitekey="6Lc6wswaAAAAAGbKqvqmL_eiyl-KR4pScQUY_rUw"
                  render="explicit"
                />
              </div>
              <div className="mt-2">
                <span className="Log-in-or-Register-t">
                  <Link className="text-style-re-login" href="/">
                    <a style={{ color: "#44ac80", textDecoration: "none" }}>
                      Log in
                    </a>
                  </Link>
                  &nbsp; or &nbsp;
                  <Link className="text-style-re-login" href="/">
                    <a style={{ color: "#44ac80", textDecoration: "none" }}>
                      Register
                    </a>
                  </Link>
                  &nbsp; to see less reCAPTCA
                </span>
              </div>
            </div>
            <div className="skip-div d-md-none">Skip</div>
          </Modal.Body>
          <Modal.Footer>
            <div className="d-flex">
              <button
                className="btn btn-success notika-btn-success waves-effect width-auto m-2"
                type="submit"
              >
                Submit
              </button>
              <button
                className="btn btn-danger notika-btn-danger waves-effect width-auto m-2"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </Modal.Footer>
        </form>

        {/* <Slider {...settings1} className="px-0 mx-0">

            </Slider> */}
        {/* <div className="slider_div" style={{width:'50%',height: "200px"}}>
          <div style={{width:'50%',height: "200px"}}>
            <Slider {...settings1} className="px-0 mx-0">
            {voting.map((college, id)=> {
                return (
                  <Col
                  key={id}             
                >
                  <label
                            className={
                              selectedCollege === college.id
                                ? "voter-rectangle-earlham voter"
                                : "voter-rectangle-earlham>span,.voter-rectangle-earlham>span>img"
                            }
                          >
                            <input
                              type="radio"
                              name="winner"
                              className="card-input-element voting-radio-selection"
                              value={college.id}
                              onChange={(e) => {
                                onSelectionChange(college.id);
                              }}
                            />
                            <Image
                              className="voter-img-div voter-modal"
                              src={college.image}
                              alt="collegeimage"
                              // layout='fill'
                              width={400}
                              height={400}
                            />
                          </label>           
                </Col>
                );
              })}
            </Slider>
          </div>
          <div style={{width:'50%',height: "200px"}}>
            <Slider {...settings1} className="px-0 mx-0">
            {voting.map((college, id)=> {
                return (
                  <Col
                  key={id}             
                >
                  <label
                            className={
                              selectedCollege === college.id
                                ? "voter-rectangle-earlham voter"
                                : "voter-rectangle-earlham>span,.voter-rectangle-earlham>span>img"
                            }
                          >
                            <input
                              type="radio"
                              name="winner"
                              className="card-input-element voting-radio-selection"
                              value={college.id}
                              onChange={(e) => {
                                onSelectionChange(college.id);
                              }}
                            />
                            <Image
                              className="voter-img-div voter-modal"
                              src={college.image}
                              alt="collegeimage"
                              // layout='fill'
                              width={400}
                              height={400}
                            />
                          </label>           
                </Col>
                );
              })}
            </Slider>
          </div>
        </div> */}
      </Modal>
    </>
  );
}

export default VoteForm;
