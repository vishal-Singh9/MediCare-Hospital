import React, { useState } from "react";

function News() {
  const [email, setEmail] = useState("");

  const handleSendNow = () => {
    if(email.length>0){
      alert(`Your message has been sent!\n ${email}`);

    }

    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h1
        className="news"
        style={{
          fontWeight: "600",
          fontSize: "80px",
          marginTop: "200px",
          marginLeft: "95px",
          color: "#032352",
        }}
      >
        What Our Customers Say!!
      </h1>
      <div
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{ height: "200px", width: "850px", padding: "2px" }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontWeight: "500", fontSize: "18px" }}
                >
                  I wanted to thank everyone at this facility for the quality of
                  care and compassion they showed during my stay.
                </p>
                <h2 className="card-title mx-2" style={{ color: "blue" }}>
                  John Asong
                </h2>
                <p className="card-text mx-2" style={{ color: "blue" }}>
                  Patient
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ height: "200px", width: "850px", padding: "2px" }}
            >
              <div className="card-body">
                <p
                  className="card-text"
                  style={{ fontWeight: "500", fontSize: "18px" }}
                >
                  I wanted to thank everyone at this facility for the quality of
                  care and compassion they showed during my stay.
                </p>
                <h2 className="card-title mx-2" style={{ color: "blue" }}>
                  Olivia Ribeiro
                </h2>
                <p className="card-text mx-2" style={{ color: "blue" }}>
                  Patient
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="col-sm-17 mt-5 d-flex justify-content-center">
          <div
            className="car"
            style={{
              height: "350px",
              width: "90%",
              backgroundColor: "#0dcaf0",
            }}
          >
            <div className="car-body">
              <h5
                className="car-title d-flex justify-content-center"
                style={{
                  fontWeight: "600",
                  fontSize: "50px",
                  marginTop: "20px",
                }}
              >
                Subscribe to Newsletter
              </h5>
              <p
                className="car-text d-flex justify-content-center"
                style={{ fontWeight: "500", fontSize: "18px" }}
              >
                We have a wide experience in experience design and strategy.
              </p>
              <div
                className="newsletter"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <div>
                  <input
                    type="text"
                    placeholder="Enter your message here"
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <button onClick={handleSendNow}>Send Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
