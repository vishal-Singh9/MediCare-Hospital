import React from "react";

function Innovative() {
  const handleLearnMore = () => {
    window.open("https://www.medicare.gov/", "_blank");
  };

  return (
    <>
      <div
        className="innvo"
        style={{
          display: "flex",
          marginTop: "100px",
        }}
      >
        <div className="innovo-left">
          <h1
            className="headin"
            style={{ fontWeight: "800", fontSize: "60px",marginLeft:"200px",color:"#032352",marginTop:"200px"}}
          >
            Clinic With Innovatives
          </h1>
          <p  style={{ fontWeight: "500", fontSize: "18px" ,marginLeft:"200px"}}>
            We provide the most full Medical services,so every person could have the opportunity to receive qualitative medical help.
          </p>
          <button className="btn btn-primary  mt-4" style={{ marginLeft:"150px"}} onClick={handleLearnMore} >Learn More</button>
        </div>
        <div
          className="innovo-right"
          style={{
            marginTop: "250px",
            marginRight: "100px",
          }}
        >
          <div>
            <div
              className="card "
              style={{ height: "250px", width: "250px", marginLeft: "50vh" }}
            >
              <div className="card-body">
                <img
                  src="qualified-removebg-preview.png "
                  className="img-cart"
                  style={{
                    height: "250px",
                    width: "200px",
                    marginTop: "-150px",
                  }}
                  alt=""
                />
                <h5
                  className="card-title"
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Qualified Doctors
                </h5>
              </div>
            </div>
            <div
              className="card "
              style={{ height: "250px", width: "250px", marginLeft: "90vh" }}
            >
              <div className="card-body">
                <img
                  src="emergency-removebg-preview (1).png "
                  className="img-cart"
                  style={{
                    height: "250px",
                    width: "200px",
                    marginTop: "-150px",
                  }}
                  alt=""
                />
                <h5
                  className="card-title"
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Emergency Services
                </h5>
              </div>
            </div>
            <br />

            <div
              className="card "
              style={{ height: "250px", width: "250px", marginLeft: "50vh" }}
            >
              <div className="card-body">
                <img
                  src="ambulance-removebg-preview.png "
                  className="img-cart"
                  style={{
                    height: "250px",
                    width: "200px",
                    marginTop: "-100px",
                  }}
                  alt=""
                />
                <h5
                  className="card-title"
                  style={{
                    marginTop: "35px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Ambulance
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Innovative;
