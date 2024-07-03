import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleShow = () => setShowModal(true);

  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all fields.");
    } else {
      alert(`Your message has been sent! \n ${name},\n ${email},\n ${message}`);
      handleClose();
    }
  };

  return (
    <>
      <div className="navbar-container">
        <nav className="navbar navbar-expand-lg border-radius-lg shadow-sm m-2">
          <div className="container-fluid">
            <h1 style={{ color: "red" }}>MediCare+</h1>
            <div
              className="d-flex"
              style={{ fontSize: "22px", fontWeight: "bold" }}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/news">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-primary mx-3"
                    style={{ fontSize: "22px", fontWeight: "bold" }}
                    onClick={handleShow}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* Contact Form Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
