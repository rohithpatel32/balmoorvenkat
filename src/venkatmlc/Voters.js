import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Voters.css";

import Navbar from "./Navbar";

import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import { LuImport } from "react-icons/lu";
import { IoPeople } from "react-icons/io5";
import { TiTick } from "react-icons/ti";

function Voters() {

    // =========================================
    // FORM STATE
    // =========================================

    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        age: "",
        mandal: "",
        village: "",
        phone: "",
    });

    // =========================================
    // VOTERS STATE
    // =========================================

    const [voters, setVoters] = useState([]);

    // =========================================
    // EDIT ID
    // =========================================

    const [editId, setEditId] = useState(null);

    // =========================================
    // SEARCH
    // =========================================

    const [search, setSearch] = useState("");

    // =========================================
    // LOADING
    // =========================================

    const [loading, setLoading] = useState(false);

    // =========================================
    // FORM OPEN/CLOSE
    // =========================================

    const [showForm, setShowForm] = useState(false);

    // =========================================
    // BACKEND URL
    // =========================================

    const API_URL = "http://127.0.0.1:8000/voters";


    // =========================================
    // GET
    // =========================================

    const getVoters = async () => {

        try {

            setLoading(true);

            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error("Unable to fetch voters");
            }

            const data = await response.json();

            setVoters(data);

        } catch (error) {

            console.error("GET Error:", error);

            alert("Unable to load voters");

        } finally {

            setLoading(false);

        }
    };


    // =========================================
    // GET WHEN PAGE LOADS
    // =========================================

    useEffect(() => {

        getVoters();

    }, []);


    // =========================================
    // HANDLE INPUT
    // =========================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

    };


    // =========================================
    // POST
    // =========================================

    const handleAddVoter = async (e) => {

        e.preventDefault();

        if (
            !formData.name ||
            !formData.gender ||
            !formData.age ||
            !formData.mandal
        ) {

            alert(
                "Please fill Name, Gender, Age and Mandal"
            );

            return;
        }


        try {

            const response = await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({

                    name: formData.name,

                    gender: formData.gender,

                    age: Number(formData.age),

                    mandal: formData.mandal,

                    village: formData.village,

                    phone: formData.phone,

                }),

            });


            if (!response.ok) {

                throw new Error(
                    "Unable to add voter"
                );

            }


            const data = await response.json();


            setVoters((prev) => [
                ...prev,
                data,
            ]);


            alert("Voter added successfully");


            resetForm();


        } catch (error) {

            console.error("POST Error:", error);

            alert("Unable to add voter");

        }

    };


    // =========================================
    // EDIT BUTTON
    // =========================================

    const handleEdit = (voter) => {

        setEditId(voter.id);

        setFormData({

            name: voter.name || "",

            gender: voter.gender || "",

            age: voter.age || "",

            mandal: voter.mandal || "",

            village: voter.village || "",

            phone: voter.phone || "",

        });

        setShowForm(true);

    };


    // =========================================
    // PUT
    // =========================================

    const handleUpdate = async (e) => {

        e.preventDefault();

        if (!editId) {

            alert("Please select voter to update");

            return;
        }


        try {

            const response = await fetch(
                `${API_URL}/${editId}`,
                {

                    method: "PUT",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({

                        name: formData.name,

                        gender: formData.gender,

                        age: Number(formData.age),

                        mandal: formData.mandal,

                        village: formData.village,

                        phone: formData.phone,

                    }),

                }
            );


            if (!response.ok) {

                throw new Error(
                    "Unable to update voter"
                );

            }


            const updatedVoter =
                await response.json();


            setVoters((prev) =>
                prev.map((voter) =>
                    voter.id === editId
                        ? updatedVoter
                        : voter
                )
            );


            alert("Voter updated successfully");


            resetForm();


        } catch (error) {

            console.error("PUT Error:", error);

            alert("Unable to update voter");

        }

    };


    // =========================================
    // DELETE
    // =========================================

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this voter?"
        );


        if (!confirmDelete) {

            return;

        }


        try {

            const response = await fetch(
                `${API_URL}/${id}`,
                {
                    method: "DELETE",
                }
            );


            if (!response.ok) {

                throw new Error(
                    "Unable to delete voter"
                );

            }


            setVoters((prev) =>
                prev.filter(
                    (voter) =>
                        voter.id !== id
                )
            );


            alert("Voter deleted successfully");


        } catch (error) {

            console.error(
                "DELETE Error:",
                error
            );

            alert("Unable to delete voter");

        }

    };


    // =========================================
    // RESET FORM
    // =========================================

    const resetForm = () => {

        setFormData({

            name: "",

            gender: "",

            age: "",

            mandal: "",

            village: "",

            phone: "",

        });

        setEditId(null);

        setShowForm(false);

    };


    // =========================================
    // SEARCH FILTER
    // =========================================

    const filteredVoters = voters.filter(
        (voter) => {

            const searchText =
                search.toLowerCase();

            return (

                voter.name
                    ?.toLowerCase()
                    .includes(searchText)

                ||

                voter.mandal
                    ?.toLowerCase()
                    .includes(searchText)

                ||

                voter.village
                    ?.toLowerCase()
                    .includes(searchText)

                ||

                voter.phone
                    ?.toLowerCase()
                    .includes(searchText)

            );

        }
    );


    // =========================================
    // DOWNLOAD CSV
    // =========================================

    const handleExport = () => {

        if (voters.length === 0) {

            alert("No voters available");

            return;

        }


        const headers =
            "ID,Name,Gender,Age,Mandal,Village,Phone\n";


        const rows = voters
            .map(
                (voter) =>
                    `${voter.id},${voter.name},${voter.gender},${voter.age},${voter.mandal},${voter.village},${voter.phone}`
            )
            .join("\n");


        const blob = new Blob(
            [headers + rows],
            {
                type: "text/csv;charset=utf-8;",
            }
        );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "voters.csv";


        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);

    };


    // =========================================
    // PRINT
    // =========================================

    const handlePrint = () => {

        window.print();

    };


    return (

        <div className="voters-page">

            {/* ================= NAVBAR ================= */}

            <Navbar />


            {/* ================= MAIN ================= */}

            <main className="voters-main">


                {/* ================= HEADER ================= */}

                <div className="voters-header">

                    <div>

                        <h1>
                            Voters Dashboard
                        </h1>

                        <p>
                            Ramagundam Assembly Constituency
                        </p>

                        <div className="constituency-text">

                            <span>
                                Constituency No. 209
                            </span>

                            <span>•</span>

                            <span>
                                Ramagundam District,
                                Telangana
                            </span>

                            <span>•</span>

                            <span>
                                Lok Sabha: Hyderabad
                            </span>

                        </div>

                    </div>


                    <button
                        className="download-btn"
                        onClick={handlePrint}
                    >

                        <FaDownload />

                        Download Receipt

                    </button>

                </div>


                {/* ================= SUMMARY CARDS ================= */}

                <div className="voter-summary">


                    <div className="summary-card orange-card">

                        <IoPeople />

                        <p>
                            Total Voters
                        </p>

                        <h2>
                            {voters.length}
                        </h2>

                        <span>
                            Total Electors
                        </span>

                    </div>


                    <div className="summary-card green-card">

                        <TiTick />

                        <p>
                            Male Voters
                        </p>

                        <h2>
                            {
                                voters.filter(
                                    (v) =>
                                        v.gender === "Male"
                                ).length
                            }
                        </h2>

                        <span>
                            Registered Male Voters
                        </span>

                    </div>


                    <div className="summary-card blue-card">

                        <TiTick />

                        <p>
                            Female Voters
                        </p>

                        <h2>
                            {
                                voters.filter(
                                    (v) =>
                                        v.gender === "Female"
                                ).length
                            }
                        </h2>

                        <span>
                            Registered Female Voters
                        </span>

                    </div>


                    <div className="summary-card purple-card">

                        <TiTick />

                        <p>
                            Total Mandals
                        </p>

                        <h2>
                            {
                                new Set(
                                    voters.map(
                                        (v) =>
                                            v.mandal
                                    )
                                ).size
                            }
                        </h2>

                        <span>
                            Mandals Covered
                        </span>

                    </div>

                </div>


                {/* ================= QUICK LINKS ================= */}

                <div className="quick-links">

                    <h3>
                        Quick Links
                    </h3>


                    <div className="quick-link-buttons">

                        <Link
                            to="/dashboard"
                            className="quick-link"
                        >
                            Dashboard
                        </Link>


                        <Link
                            to="/voters"
                            className="quick-link active"
                        >
                            Voters
                        </Link>


                        <Link
                            to="/developmentworks"
                            className="quick-link"
                        >
                            Development Works
                        </Link>


                        <Link
                            to="/reports"
                            className="quick-link"
                        >
                            Reports
                        </Link>


                        <Link
                            to="/grievances"
                            className="quick-link"
                        >
                            Grievances
                        </Link>

                    </div>

                </div>


                {/* ================= VOTER TABLE ================= */}

                <div className="voter-table-section">


                    <div className="table-header">

                        <div>

                            <h3>
                                Voter Information
                            </h3>

                            <p>
                                Manage all registered
                                voters
                            </p>

                        </div>


                        <div className="table-actions">


                            <button
                                className="add-btn"
                                onClick={() => {

                                    resetForm();

                                    setShowForm(true);

                                }}
                            >

                                <FaPlus />

                                Add Voter

                            </button>


                            <button
                                className="action-btn"
                                onClick={handleExport}
                            >

                                <BiExport />

                                Export Excel

                            </button>


                            <button
                                className="action-btn"
                                onClick={() =>
                                    alert(
                                        "Import functionality can be connected to your backend."
                                    )
                                }
                            >

                                <LuImport />

                                Import Excel

                            </button>

                        </div>

                    </div>


                    {/* ================= SEARCH ================= */}

                    <div className="search-box">

                        <IoSearch />

                        <input
                            type="text"
                            placeholder="Search voter, mandal, village or phone..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                        />

                    </div>


                    {/* ================= LOADING ================= */}

                    {loading && (

                        <div className="loading">
                            Loading voters...
                        </div>

                    )}


                    {/* ================= TABLE ================= */}

                    {!loading && (

                        <div className="table-container">

                            <table>

                                <thead>

                                    <tr>

                                        <th>
                                            S.No
                                        </th>

                                        <th>
                                            Name
                                        </th>

                                        <th>
                                            Gender
                                        </th>

                                        <th>
                                            Age
                                        </th>

                                        <th>
                                            Mandal
                                        </th>

                                        <th>
                                            Village
                                        </th>

                                        <th>
                                            Phone
                                        </th>

                                        <th>
                                            Actions
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {filteredVoters.length ===
                                    0 ? (

                                        <tr>

                                            <td
                                                colSpan="8"
                                                className="no-data"
                                            >
                                                No voters found
                                            </td>

                                        </tr>

                                    ) : (

                                        filteredVoters.map(
                                            (voter, index) => (

                                                <tr
                                                    key={
                                                        voter.id
                                                    }
                                                >

                                                    <td>
                                                        {index + 1}
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.name
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.gender
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.age
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.mandal
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.village
                                                        }
                                                    </td>

                                                    <td>
                                                        {
                                                            voter.phone
                                                        }
                                                    </td>

                                                    <td>

                                                        <div className="action-buttons">

                                                            <button
                                                                className="edit-btn"
                                                                onClick={() =>
                                                                    handleEdit(
                                                                        voter
                                                                    )
                                                                }
                                                            >

                                                                <FaEdit />

                                                                Edit

                                                            </button>


                                                            <button
                                                                className="delete-btn"
                                                                onClick={() =>
                                                                    handleDelete(
                                                                        voter.id
                                                                    )
                                                                }
                                                            >

                                                                <FaTrash />

                                                                Delete

                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            )
                                        )

                                    )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>


                {/* ================= OTHER LINKS ================= */}

                <div className="bottom-links">

                    <Link to="/dashboard">
                        Go to Dashboard →
                    </Link>

                    <Link to="/developmentworks">
                        Development Works →
                    </Link>

                    <Link to="/reports">
                        Generate Reports →
                    </Link>

                </div>


                {/* ================= ADD / EDIT FORM ================= */}

                {showForm && (

                    <div className="modal-overlay">

                        <div className="voter-modal">


                            <div className="modal-header">

                                <h2>
                                    {editId
                                        ? "Update Voter"
                                        : "Add Voter"}
                                </h2>

                                <button
                                    onClick={resetForm}
                                    className="close-btn"
                                >
                                    ×
                                </button>

                            </div>


                            <form
                                onSubmit={
                                    editId
                                        ? handleUpdate
                                        : handleAddVoter
                                }
                            >


                                <div className="form-grid">


                                    <div className="form-group">

                                        <label>
                                            Voter Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            value={
                                                formData.name
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Enter voter name"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Gender
                                        </label>

                                        <select
                                            name="gender"
                                            value={
                                                formData.gender
                                            }
                                            onChange={
                                                handleChange
                                            }
                                        >

                                            <option value="">
                                                Select Gender
                                            </option>

                                            <option value="Male">
                                                Male
                                            </option>

                                            <option value="Female">
                                                Female
                                            </option>

                                            <option value="Other">
                                                Other
                                            </option>

                                        </select>

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Age
                                        </label>

                                        <input
                                            type="number"
                                            name="age"
                                            value={
                                                formData.age
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Enter age"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Mandal
                                        </label>

                                        <input
                                            type="text"
                                            name="mandal"
                                            value={
                                                formData.mandal
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Enter mandal"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Village
                                        </label>

                                        <input
                                            type="text"
                                            name="village"
                                            value={
                                                formData.village
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Enter village"
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label>
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            name="phone"
                                            value={
                                                formData.phone
                                            }
                                            onChange={
                                                handleChange
                                            }
                                            placeholder="Enter phone"
                                        />

                                    </div>

                                </div>


                                <div className="modal-buttons">

                                    <button
                                        type="button"
                                        className="cancel-btn"
                                        onClick={
                                            resetForm
                                        }
                                    >
                                        Cancel
                                    </button>


                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >

                                        {editId
                                            ? "Update Voter"
                                            : "Add Voter"}

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                )}

            </main>

        </div>
    );
}

export default Voters;