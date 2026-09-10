import React, { useState } from "react";
import "../style/Adddevelopmentwork.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function AddDevelopmentwork() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    workName: "",
    category: "",
    village: "",
    mandal: "",
    description: "",
    estimatedAmount: "",
    startDate: "",
    endDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Development Work Added Successfully");

    navigate("/developmentworks");
  };

  return (
    <div className="development-page">

      <Navbar />

      <div className="development-container">

        <div className="development-header">
          <h2>Add Development Work</h2>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/developmentworks")}
          >
            Back
          </button>
        </div>

        <form
          className="development-form"
          onSubmit={handleSubmit}
        >

          {/* Work Name */}
          <div className="form-group">
            <label>Work Name</label>

            <input
              type="text"
              name="workName"
              placeholder="Enter work name"
              value={form.workName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Roads">Roads</option>
              <option value="Drainage">Drainage</option>
              <option value="Street Lights">
                Street Lights
              </option>
              <option value="Water Supply">
                Water Supply
              </option>
              <option value="Sewerage">Sewerage</option>
              <option value="Parks">Parks</option>
            </select>
          </div>

          {/* Village */}
          <div className="form-group">
            <label>Village</label>

            <input
              type="text"
              name="village"
              placeholder="Enter village"
              value={form.village}
              onChange={handleChange}
              required
            />
          </div>

          {/* Mandal */}
          <div className="form-group">
            <label>Mandal</label>

            <input
              type="text"
              name="mandal"
              placeholder="Enter mandal"
              value={form.mandal}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              name="description"
              placeholder="Enter development work description"
              value={form.description}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          {/* Estimated Amount */}
          <div className="form-group">
            <label>Estimated Amount</label>

            <input
              type="number"
              name="estimatedAmount"
              placeholder="Enter amount"
              value={form.estimatedAmount}
              onChange={handleChange}
              required
            />
          </div>

          {/* Start Date */}
          <div className="form-group">
            <label>Start Date</label>

            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
            />
          </div>

          {/* End Date */}
          <div className="form-group">
            <label>End Date</label>

            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Completed">
                Completed
              </option>
            </select>
          </div>

          {/* Buttons */}
          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/developmentworks")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Add Development Work
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddDevelopmentwork;