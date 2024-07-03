import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Appointment from "./Appointment";
import { CgArrowLeftO } from "react-icons/cg";
import { CgArrowRightO } from "react-icons/cg";

const departments = [
  "Cardiology",
  "Neurology",
  "Oncology",
  "Pediatrics",
  "Orthopedics",
  "Radiology",
  "Gastroenterology",
  "Dermatology",
  "General Surgery",
  "Urology",
];

const images = ["About.jpeg", "neuro.jpeg","a.jpeg","b.jpeg","c.jpeg"];

function About() {
  const [showAppointmentModal, setShowAppointmentModal] = useState(false);
  const [showDepartmentsModal, setShowDepartmentsModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleCloseAppointment = () => {
    setShowAppointmentModal(false);
    setSubmitted(false);
  };

  const handleShowAppointment = () => setShowAppointmentModal(true);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  const handleShowDepartments = () => setShowDepartmentsModal(true);
  const handleCloseDepartments = () => setShowDepartmentsModal(false);

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="hero" style={{ marginTop: "200px" }}>
      <div className="about-left">
        <h5>Welcome to MediCare+ Clinic</h5>
        <h1 style={{ fontWeight: "600", fontSize: "60px", color: "#032352" }}>
          Best Specialists
        </h1>
        <p style={{ fontSize: "20px" }}>
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer and supportive care services in a single
          convenient location.
        </p>

        <div className="d-flex gap-2">
          <Button variant="primary" onClick={handleShowAppointment}>
            Make an Appointment
          </Button>
          <Button variant="primary" onClick={handleShowDepartments}>
            Departments
          </Button>
        </div>
      </div>

      <div className="about-right main"   >
        <CgArrowLeftO onClick={ prevImage } style={{ fontSize: "50px" }} id="left" />

        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
          style={{ width: "350px", height: "40vh" }}
        />
        

        <CgArrowRightO onClick={nextImage} style={{ fontSize: "50px" }} id="right"/>
      </div>


      <Modal show={showAppointmentModal} onHide={handleCloseAppointment}>
        <Modal.Header closeButton>
          <Modal.Title>Make an Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitted ? (
            <div>Your appointment has been booked!</div>
          ) : (
            <Appointment onSubmit={handleFormSubmit} />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAppointment}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDepartmentsModal} onHide={handleCloseDepartments}>
        <Modal.Header closeButton>
          <Modal.Title>Departments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {departments.map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDepartments}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default About;



