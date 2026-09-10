import React from "react";
import "../style/Grievances.css";

import { FaPlus, FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import Get from "./get";
import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";

function Grievances() {
  const navigate = useNavigate();

  const handleAddComplaint = () => {
    navigate("/complaint");
  };

  return (
    <div className="give">

      <Navbar />

      {/* Page Header */}
      <div className="give1">

        <h2 className="give2">
          Grievances
        </h2>

        <button
          type="button"
          className="give3"
          onClick={handleAddComplaint}
        >
          <FaPlus />
          Add Complaint
        </button>

      </div>

      {/* Search + Filter */}
      <div className="give4">

        <input
          type="text"
          placeholder="Search Complaint...."
          className="give5"
        />

        <select
          id="status"
          name="status"
          defaultValue="all"
        >
          <option value="all">
            All Status
          </option>

          <option value="unread">
            Unread
          </option>

          <option value="read">
            Read
          </option>
        </select>

      </div>

      {/* Grievances Table */}
      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Village</th>
            <th>Complaint</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          <tr>

            <td>1</td>

            <td>Ravi</td>

            <td>9999999999</td>

            <td>Huzurabad</td>

            <td>
              Water supply problem
            </td>

            <td>
              Pending
            </td>

            <td>

              <div className="give11">

                {/* View */}
                <button
                  type="button"
                  className="give12"
                >
                  <FaEye className="give13" />
                </button>

                {/* Edit */}
                <button
                  type="button"
                  className="give14"
                >
                  <FaEdit className="give15" />
                </button>

                {/* Delete */}
                <button
                  type="button"
                  className="give16"
                >
                  <MdDelete className="give17" />
                </button>

              </div>

            </td>

          </tr>

        </tbody>

      </table>

      {/* API GET Component */}
      <div>
        <Get />
      </div>

    </div>
  );
}

export default Grievances;