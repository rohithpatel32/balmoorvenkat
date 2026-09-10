import React, { useEffect, useState } from "react";
import "../style/Developmentworks.css";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Developmentworks() {
  const navigate = useNavigate();

  // ==========================================
  // FORM STATE
  // ==========================================

  const [form, setForm] = useState({
    title: "",
    mandal: "",
    category: "",
    status: "",
    date: ""
  });

  // ==========================================
  // WORKS DATA
  // ==========================================

  const [works, setWorks] = useState([]);

  // ==========================================
  // EDIT ID
  // ==========================================

  const [editId, setEditId] = useState(null);

  // ==========================================
  // SEARCH
  // ==========================================

  const [search, setSearch] = useState("");

  // ==========================================
  // FILTER
  // ==========================================

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  // ==========================================
  // GET ALL DEVELOPMENT WORKS
  // ==========================================

  const getWorks = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/developmentworks"
      );

      if (!response.ok) {
        throw new Error("Failed to get development works");
      }

      const data = await response.json();

      console.log("GET SUCCESS:", data);

      setWorks(data);
    } catch (error) {
      console.log("GET ERROR:", error);
    }
  };

  // ==========================================
  // GET DATA WHEN PAGE LOADS
  // ==========================================

  useEffect(() => {
    getWorks();
  }, []);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // ==========================================
  // ADD / UPDATE
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !form.title ||
      !form.mandal ||
      !form.category ||
      !form.status ||
      !form.date
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      // ======================================
      // UPDATE
      // ======================================

      if (editId !== null) {
        const response = await fetch(
          `http://127.0.0.1:8000/developmentworks/${editId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );

        if (!response.ok) {
          const errorData = await response.json();

          console.log("PUT ERROR:", errorData);

          alert("Unable to update work");

          return;
        }

        const data = await response.json();

        console.log("PUT SUCCESS:", data);

        setWorks((prevWorks) =>
          prevWorks.map((work) =>
            work.id === editId ? data : work
          )
        );

        alert("Development work updated successfully");

        setEditId(null);
      }

      // ======================================
      // ADD
      // ======================================

      else {
        const response = await fetch(
          "http://127.0.0.1:8000/developmentworks",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          }
        );

        if (!response.ok) {
          const errorData = await response.json();

          console.log("POST ERROR:", errorData);

          alert("Unable to add development work");

          return;
        }

        const data = await response.json();

        console.log("POST SUCCESS:", data);

        setWorks((prevWorks) => [
          ...prevWorks,
          data
        ]);

        alert("Development work added successfully");
      }

      // ======================================
      // CLEAR FORM
      // ======================================

      setForm({
        title: "",
        mandal: "",
        category: "",
        status: "",
        date: ""
      });

    } catch (error) {
      console.log("POST / PUT ERROR:", error);

      alert("Something went wrong. Please check backend.");
    }
  };

  // ==========================================
  // EDIT
  // ==========================================

  const handleEdit = (work) => {
    setEditId(work.id);

    setForm({
      title: work.title,
      mandal: work.mandal,
      category: work.category,
      status: work.status,
      date: work.date
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // ==========================================
  // CANCEL EDIT
  // ==========================================

  const handleCancel = () => {
    setEditId(null);

    setForm({
      title: "",
      mandal: "",
      category: "",
      status: "",
      date: ""
    });
  };

  // ==========================================
  // DELETE
  // ==========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this development work?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/developmentworks/${id}`,
        {
          method: "DELETE"
        }
      );

      if (!response.ok) {
        const errorData = await response.json();

        console.log("DELETE ERROR:", errorData);

        alert("Unable to delete work");

        return;
      }

      const data = await response.json();

      console.log("DELETE SUCCESS:", data);

      setWorks((prevWorks) =>
        prevWorks.filter((work) => work.id !== id)
      );

      alert("Development work deleted successfully");

    } catch (error) {
      console.log("DELETE ERROR:", error);

      alert("Something went wrong");
    }
  };

  // ==========================================
  // SEARCH + FILTER
  // ==========================================

  const filteredWorks = works.filter((work) => {
    const searchText = search.toLowerCase();

    const searchMatch =
      work.title?.toLowerCase().includes(searchText) ||
      work.mandal?.toLowerCase().includes(searchText) ||
      work.category?.toLowerCase().includes(searchText);

    const categoryMatch =
      category === "" ||
      work.category === category;

    const statusMatch =
      status === "" ||
      work.status === status;

    return (
      searchMatch &&
      categoryMatch &&
      statusMatch
    );
  });

  // ==========================================
  // RETURN JSX
  // ==========================================

  return (
    <>
      <div className="development">

        {/* ====================================
            NAVBAR
        ==================================== */}

        <Navbar />

        {/* ====================================
            HEADER
        ==================================== */}

        <div className="ment2">

          <h1 className="ment1">
            Development Works
          </h1>

          <button
            className="pdev"
            onClick={() =>
              navigate("/Adddevelopmentwork")
            }
          >
            <FaPlus />

            Add Development Work
          </button>

        </div>

        {/* ====================================
            ADD / EDIT FORM
        ==================================== */}

        <div className="development-form">

          <h3>
            {editId !== null
              ? "Edit Development Work"
              : "Add Development Work"}
          </h3>

          {/* TITLE */}

          <input
            type="text"
            name="title"
            placeholder="Enter Work Title"
            value={form.title}
            onChange={handleChange}
          />

          {/* MANDAL */}

          <input
            type="text"
            name="mandal"
            placeholder="Enter Mandal"
            value={form.mandal}
            onChange={handleChange}
          />

          {/* CATEGORY */}

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="">
              Select Category
            </option>

            <option value="Roads">
              Roads
            </option>

            <option value="Drainages">
              Drainages
            </option>

            <option value="Street Lights">
              Street Lights
            </option>

            <option value="Water Supply">
              Water Supply
            </option>

            <option value="Sewerage">
              Sewerage
            </option>

            <option value="Parks">
              Parks
            </option>

            <option value="Buildings">
              Buildings
            </option>

            <option value="Schools">
              Schools
            </option>

            <option value="Hospitals">
              Hospitals
            </option>

            <option value="Others">
              Others
            </option>

          </select>

          {/* STATUS */}

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >

            <option value="">
              Select Status
            </option>

            <option value="Proposed">
              Proposed
            </option>

            <option value="Approved">
              Approved
            </option>

            <option value="Work Started">
              Work Started
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="On Hold">
              On Hold
            </option>

            <option value="Delayed">
              Delayed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>

          </select>

          {/* DATE */}

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          {/* ADD / UPDATE BUTTON */}

          <button
            className="save-btn"
            onClick={handleSubmit}
          >

            {editId !== null
              ? "Update Work"
              : "Add Work"}

          </button>

          {/* CANCEL BUTTON */}

          {editId !== null && (

            <button
              className="cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>

          )}

        </div>

        {/* ====================================
            SEARCH + FILTER
        ==================================== */}

        <div className="ac1">

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search Development Work..."
            className="ac2"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {/* CATEGORY FILTER */}

          <select
            className="ac3"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option value="">
              All Category
            </option>

            <option value="Roads">
              Roads
            </option>

            <option value="Drainages">
              Drainages
            </option>

            <option value="Street Lights">
              Street Lights
            </option>

            <option value="Water Supply">
              Water Supply
            </option>

            <option value="Sewerage">
              Sewerage
            </option>

            <option value="Parks">
              Parks
            </option>

            <option value="Buildings">
              Buildings
            </option>

            <option value="Schools">
              Schools
            </option>

            <option value="Hospitals">
              Hospitals
            </option>

            <option value="Others">
              Others
            </option>

          </select>

          {/* STATUS FILTER */}

          <select
            className="ac4"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >

            <option value="">
              All Status
            </option>

            <option value="Proposed">
              Proposed
            </option>

            <option value="Approved">
              Approved
            </option>

            <option value="Work Started">
              Work Started
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="On Hold">
              On Hold
            </option>

            <option value="Delayed">
              Delayed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>

          </select>

        </div>

        {/* ====================================
            TABLE
        ==================================== */}

        <table className="tble">

          <thead className="tble1">

            <tr>

              <th>S.NO</th>

              <th>Title</th>

              <th>Mandal</th>

              <th>Category</th>

              <th>Status</th>

              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredWorks.length === 0 ? (

              <tr>

                <td
                  colSpan="7"
                  style={{
                    textAlign: "center"
                  }}
                >
                  No Development Works Found
                </td>

              </tr>

            ) : (

              filteredWorks.map(
                (work, index) => (

                  <tr key={work.id}>

                    <td>
                      {index + 1}
                    </td>

                    <td>
                      {work.title}
                    </td>

                    <td>
                      {work.mandal}
                    </td>

                    <td>
                      {work.category}
                    </td>

                    <td>
                      {work.status}
                    </td>

                    <td>
                      {work.date}
                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(work)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(work.id)
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Developmentworks;