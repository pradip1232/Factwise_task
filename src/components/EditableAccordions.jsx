import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSave, FaTrash, FaEdit } from "react-icons/fa";

export default function EditableAccordions() {
  const [expanded, setExpanded] = useState(null);
  const [editing, setEditing] = useState(false);
  const [details, setDetails] = useState({
    age: "19 Years",
    gender: "Male",
    country: "India",
    description: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
  });

  const handleChange = (panel) => {
    setExpanded(expanded === panel ? null : panel);
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    setEditing(false);
    // Here you can add code to save the updated details
  };

  const handleChangeDetail = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center text-center">
        <div className="col-md-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button ${
                    expanded === "panel1" ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => handleChange("panel1")}
                  aria-expanded={expanded === "panel1" ? "true" : "false"}
                  aria-controls="collapseOne"
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
                id="collapseOne"
                className={`accordion-collapse collapse ${
                  expanded === "panel1" ? "show" : ""
                }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body position-relative">
                  <div className="container">
                    <div className="row text-center mb-3">
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Age</p>
                        {editing ? (
                          <input
                            type="text"
                            name="age"
                            value={details.age}
                            onChange={handleChangeDetail}
                            className="form-control"
                          />
                        ) : (
                          <h6 className="text-dark">{details.age}</h6>
                        )}
                      </div>
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Gender</p>
                        {editing ? (
                          <input
                            type="text"
                            name="gender"
                            value={details.gender}
                            onChange={handleChangeDetail}
                            className="form-control"
                          />
                        ) : (
                          <h6 className="text-dark">{details.gender}</h6>
                        )}
                      </div>
                      <div className="col-md-4 text-start">
                        <p className="text-muted">Country</p>
                        {editing ? (
                          <input
                            type="text"
                            name="country"
                            value={details.country}
                            onChange={handleChangeDetail}
                            className="form-control"
                          />
                        ) : (
                          <h6 className="text-dark">{details.country}</h6>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col text-start">
                        <p className="text-muted">Description:</p>
                        {editing ? (
                          <textarea
                            name="description"
                            value={details.description}
                            onChange={handleChangeDetail}
                            className="form-control"
                            rows="4"
                          />
                        ) : (
                          <h5 className="text-dark">
                            {details.description}
                          </h5>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="position-absolute end-0 bottom-0 mb-3 me-3">
                    {editing ? (
                      <>
                        <button className="btn btn-success me-2" onClick={handleSave}>
                          <FaSave /> Save
                        </button>
                        <button className="btn btn-secondary" onClick={handleEditToggle}>
                          <FaEdit /> Cancel
                        </button>
                      </>
                    ) : (
                      <button className="btn btn-secondary" onClick={handleEditToggle}>
                        <FaEdit /> Edit
                      </button>
                    )}
                    <FaTrash className="text-danger ms-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
