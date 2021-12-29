import React, {useState,useEffect } from "react";
import Image from "next/image";
import { Row, Col, Card, Modal, Button } from "react-bootstrap";
// import Carousel from "react-slick";
import logo from "../../styles/assets/images/ranklogo.jpg";
import apiPath from "../api/commonPath";
import axios from "axios";

function Contact(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const universityDataAsync = async (payload) =>
    await axios
      .get(apiPath + `/api/v1/colleges`)
      .then((res) => {
        console.log("resvghgjhk", res);
        return res.data.items;
      })
      .catch((error) => {
        return error;
      });

  useEffect(() => {
    universityDataAsync();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <Card className="" style={{width:"40%"}}>
        <Carousel {...settings}>
          <div>
            <Image
              src={logo}
              alt="First slide"
              className="slick-image"
              width={200}
              height={200}
            />
            <div className="slick-caption">
              <h4>
                Yellowstone National Park, United States
              </h4>
            </div>
          </div>
          <div>
            <Image
              src={logo}
              alt="Second slide"
              className="slick-image"
              width={200}
              height={200}
            />
            <div className="slick-caption">
              <h4>
                Somewhere Beyond, United States
              </h4>
            </div>
          </div>
          <div>
            <Image
              src={logo}
              alt="Third slide"
              className="slick-image"
              width={200}
              height={200}
            />
            <div className="slick-caption">
              <h4>
                Yellowstone National Park, United States
              </h4>
            </div>
          </div>
        </Carousel>
      </Card> */}

       <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
