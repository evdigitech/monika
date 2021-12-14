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
// import CollegeDetail from "../univercity/welcome/[CollegeDetailId]";

function VoteForm({ show, close }) {
  const router = useRouter();


  const { handleSubmit } = useForm();
  const [selectedCollege, setSelectedCollege] = useState();
  const [clgNotSelect, setClgNotSelect] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  const [voting, setVoting] = useState([]);
  const [votingError, setVotingError] = useState();

  const formSubmitHandler = () => {
    console.log("formSubmitHandler");
    if (userVerified) {
      setShowError(true);
      return;
    }
    router.push("./univercity/welcome/[CollegeDetailId]")
  };

  const submitVote = (value) => {
    console.log("hsfjg", value);
    if (!userVerified) {
      setShowError(true);
      return;
    }
  };

  const onSelectionChange = (id) => {
    console.log("setSelectedCollege");
    setSelectedCollege(id);
  };

  useEffect(() => {
    setVoting([]);
  }, []);
  useEffect(() => {
    axios({
      method: "GET",
      url: apiPath + "/api/v1/colleges/voting",
    })
      .then((res) => {
        setVoting((prevschools) => {
          return [...new Set([...prevschools, ...res.data])];
        });
        console.log("res", res);
      })
      .catch((e) => {
        setVotingError(error);
      });
    // return {voting,votingError};
  }, []);

const voterMoreInfoHandler=(value)=>{
  console.log("voterMoreInfoHandler")
  router.push(`../univercity/welcome/${value}`)
}

  return (
    <>
    {/* <CollegeDetail/> */}
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
            <span class="Rankordered d-md-none">
              <span class="text-style-1">Rank</span>ordered
            </span>
          </Modal.Header>
          <Modal.Body>
            <div>
              <span className="Which-college-is-mor which-college-more-prestigious">
                Which college is more prestigious?
              </span>
            </div>
            <div className="card-content">
              <Row>
                {voting.map((college, id) => {
                  return (
                    <>
                      <Col
                        sm={12}
                        md={6}
                        key={college.id}
                        className={
                          "card-voter" +
                          (selectedCollege === college.id
                            ? "selected-card"
                            : "")
                        }
                      >
                        <label className="voter-rectangle-earlham voter">
                          <input
                            type="radio"
                            name="winner"
                            className="card-input-element voting-radio-selection"
                            value={college.id}
                            onChange={(e) => {
                              onSelectionChange(college.id);
                            }}
                          />
                          <div className="Voter-Rectangle-modal Rectangle-modal">
                            <img
                              className="voter-img-div voter-modal"
                              src={college.image}
                            />
                          </div>
                          <div className="Path">
                            <BsFillFlagFill style={{ color: "#f3f3f3" }} />
                          </div>
                          <div className="card-body-Earlham-College d-flex">
                            <Row className="voting-heading">
                              <Col className="earlham-modal">
                                <div className="Earlham-college-name">
                                  <span className="Earlham-College">
                                    {college.name}
                                  </span>
                                  <p className="Richmond-IN">
                                    <BsGeoAlt
                                      className="shape"
                                      style={{
                                        color: "#44ac80",
                                      }}
                                    />
                                    &nbsp; {college.city} - {college.state}
                                  </p>
                                </div>
                              </Col>
                              <Col className="earlham-modal-more">
                                <div className="Rectangle-More-info">
                                  <button className="More-info" 
                                  onClick={()=>voterMoreInfoHandler()}
                                  >
                                    More Info
                                  </button>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </label>
                      </Col>
                    </>
                  );
                })}
              </Row>
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
            {/* <div className="row">
                            <button
                                className="btn btn-success notika-btn-success waves-effect width-auto"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="btn btn-danger notika-btn-danger waves-effect width-auto"
                                onClick={close}
                            >
                                Cancel
                            </button>
                        </div> */}
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default VoteForm;
