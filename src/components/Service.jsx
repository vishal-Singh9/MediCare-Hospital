import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function Service() {
  return (
    <>
      <h1 className="head " style={{ textAlign: "center",fontWeight:"800",fontSize:"80px",marginTop:"200px",color:"#032352" }}>
        Our Services
      </h1>
      <br />
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        We provide the most full medical services,so every person could have the
        opportunity to receive qualitative medical help.
      </p>
      <br />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "50px",
          flexWrap: "wrap",
          justifyContent: "center",
        
        }}
      >
        <div className="card" style={{ width: "18rem" }}>
          <img src="dental.webp" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5 className="card-title"style={{fontWeight:"800",fontSize:"22px" }} >Dental Care</h5>
            <p className="card-text">
              Dental care is medical care and hygiene relating to your teeth.
              This coverage will help pay for dental treatment and allow you to
              make decisions about your dental care based on need rather than
              cost.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="Pulmonary1.png" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"800",fontSize:"22px" }}>Pulmonary</h5>
            <p className="card-text">
              The blood passes through a large blood vessel called the pulmonary
              artery. Blood usually flows easily through blood vessels in the
              lungs to the left side of the heart.
            </p>
          </div>
        </div>
        
        <div className="card" style={{ width: "18rem" }}>
          <img src="neurological.jpeg" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"800",fontSize:"22px" }}>Neurological</h5>
            <p className="card-text">
              The term 'neurological' comes from neurology – the branch of
              medicine that deals with problems affecting the nervous system.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="Pediatrician.jpeg" className="card-img-top" alt="Card 4" />
          <div className="card-body">
            <h5 className="card-title" style={{fontWeight:"800",fontSize:"22px" }}>Prediatrics</h5>
            <p className="card-text">
              Pediatrics is the branch of medicine dealing with the health and
              medical care of infants, children, and adolescents from birth up
              to the age of 18.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
