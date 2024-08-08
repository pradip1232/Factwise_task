import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button ${
                    expanded === "panel2" ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => handleChange("panel2")}
                  aria-expanded={expanded === "panel2" ? "true" : "false"}
                  aria-controls="collapseTwo"
                >
                  <div className="d-flex w-50">
                    <div className="flex-shrink-0" style={{ width: "33%" }}>
                      <img
                        src="your-image-url-here"
                        alt="Icon"
                        className="img-fluid"
                      />
                    </div>
                    <div style={{ color: "#6c757d" }}>
                      <h3>John Doe</h3>
                    </div>
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${
                  expanded === "panel2" ? "show" : ""
                }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body position-relative">
                  <div className="container">
                    <div className="row text-center mb-3">
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Age</p>
                        <h6 className="text-dark">19 Years</h6>
                      </div>
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Gender</p>
                        <h6 className="text-dark">Male</h6>
                      </div>
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Country</p>
                        <h6 className="text-dark">India</h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-start">
                        <p className="text-muted">Description:</p>
                        <h5 className="text-dark">
                          Donec placerat, lectus sed mattis semper, neque lectus
                          feugiat lectus, varius pulvinar diam eros in elit.
                          Pellentesque convallis laoreet laoreet.
                        </h5>
                      </div>
                    </div>
                  </div>
                  {expanded === "panel2" && (
                    <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                      <FaTrash className="text-danger" />
                      <FaEdit className="text-secondary me-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
