import React from "react";

function Doctor() {
  return (
    <>
      <h1
        className="doctor "
        style={{ textAlign: "center", fontWeight: "800", fontSize: "80px",marginTop:"250px",color:"#032352" }}
      >
        We have the Best Specialist
      </h1>
      <br />
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        We have a wide experience design and strategy ,with locally-rooted
        knowledge.
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
          <img src="dendoc.jpeg" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontWeight: "800", fontSize: "22px" }}
            >
              Dr. Sukhdev Sinha
            </h5>
            <p className="card-text">Dental Care</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="cardio.jpeg" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontWeight: "800", fontSize: "22px" }}
            >
              Dr. Filipa Gaspar
            </h5>
            <p className="card-text">Cardiology</p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="neuro.jpeg" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontWeight: "800", fontSize: "22px" }}
            >
              Dr.Sukhmeet Gorae
            </h5>
            <p className="card-text">Neurological</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="Pred.avif" className="card-img-top" alt="Card 4" />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ fontWeight: "800", fontSize: "22px" }}
            >
              Dr. Siri Jacobsson
            </h5>
            <p className="card-text">Prediatrics</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctor;
