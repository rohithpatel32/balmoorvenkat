import React, { useEffect, useState } from "react";
import "../style/Reports.css";
import { TbReportSearch } from "react-icons/tb";
import Navbar from "./Navbar";

function Reports() {
    // =========================
    // FORM STATE
    // =========================
    const [formData, setFormData] = useState({
        fromDate: "",
        toDate: "",
        reportType: "",
        category: "",
        mandal: "",
    });

    // =========================
    // REPORT DATA
    // =========================
    const [reports, setReports] = useState([]);

    // Loading state
    const [loading, setLoading] = useState(false);

    // =========================
    // BACKEND API URL
    // =========================
    const API_URL = "http://127.0.0.1:8000/reports";


    // ==================================================
    // GET API
    // Get all reports
    // ==================================================
    const getReports = async () => {
        try {
            setLoading(true);

            const response = await fetch(API_URL);

            console.log("GET Status:", response.status);

            if (!response.ok) {
                throw new Error(
                    `GET failed: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            console.log("GET Data:", data);

            setReports(data);

        } catch (error) {
            console.error("GET Error:", error);
            alert(`Unable to load reports: ${error.message}`);

        } finally {
            setLoading(false);
        }
    };


    // ==================================================
    // GET API WHEN PAGE LOADS
    // ==================================================
    useEffect(() => {
        getReports();
    }, []);


    // ==================================================
    // HANDLE INPUT CHANGE
    // ==================================================
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((previousData) => ({
            ...previousData,
            [name]: value,
        }));
    };


    // ==================================================
    // POST API
    // Create new report
    // ==================================================
    const handleGenerateReport = async (e) => {
        e.preventDefault();

        // Validation
        if (
            !formData.reportType ||
            !formData.category ||
            !formData.mandal
        ) {
            alert(
                "Please select Report Type, Category and Mandal"
            );
            return;
        }

        // Data which will be sent to backend
        const newReport = {
            fromDate: formData.fromDate,
            toDate: formData.toDate,
            reportType: formData.reportType,
            category: formData.category,
            mandal: formData.mandal,
        };

        console.log("POST Data:", newReport);

        try {
            const response = await fetch(API_URL, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(newReport),
            });

            console.log("POST Status:", response.status);

            if (!response.ok) {
                throw new Error(
                    `POST failed: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            console.log("POST Response:", data);

            // Add newly created report to UI
            setReports((previousReports) => [
                data,
                ...previousReports,
            ]);

            alert("Report added successfully");

            // Clear form
            setFormData({
                fromDate: "",
                toDate: "",
                reportType: "",
                category: "",
                mandal: "",
            });

        } catch (error) {
            console.error("POST Error:", error);
            alert(`Unable to add report: ${error.message}`);
        }
    };


    // ==================================================
    // PUT API
    // Update report
    // ==================================================
    const handleUpdateReport = async (report) => {

        // Change status
        const updatedStatus =
            report.status === "Completed"
                ? "Pending"
                : "Completed";

        // Data to send backend
        const updatedReport = {
            fromDate: report.fromDate,
            toDate: report.toDate,
            reportType: report.reportType,
            category: report.category,
            mandal: report.mandal,
            status: updatedStatus,
        };

        console.log("PUT ID:", report.id);
        console.log("PUT Data:", updatedReport);

        try {
            const response = await fetch(
                `${API_URL}/${report.id}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(updatedReport),
                }
            );

            console.log("PUT Status:", response.status);

            if (!response.ok) {
                throw new Error(
                    `PUT failed: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            console.log("PUT Response:", data);

            // Update UI
            setReports((previousReports) =>
                previousReports.map((item) =>
                    item.id === report.id
                        ? data
                        : item
                )
            );

            alert("Report updated successfully");

        } catch (error) {
            console.error("PUT Error:", error);
            alert(`Unable to update report: ${error.message}`);
        }
    };


    // ==================================================
    // DELETE API
    // Delete report
    // ==================================================
    const handleDeleteReport = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this report?"
        );

        if (!confirmDelete) {
            return;
        }

        console.log("DELETE ID:", id);

        try {
            const response = await fetch(
                `${API_URL}/${id}`,
                {
                    method: "DELETE",
                }
            );

            console.log("DELETE Status:", response.status);

            if (!response.ok) {
                throw new Error(
                    `DELETE failed: ${response.status} ${response.statusText}`
                );
            }

            // Remove from UI
            setReports((previousReports) =>
                previousReports.filter(
                    (item) => item.id !== id
                )
            );

            alert("Report deleted successfully");

        } catch (error) {
            console.error("DELETE Error:", error);
            alert(`Unable to delete report: ${error.message}`);
        }
    };


    // ==================================================
    // EXPORT EXCEL / CSV
    // ==================================================
    const handleExportExcel = () => {

        if (reports.length === 0) {
            alert("No reports available");
            return;
        }

        const headers =
            "ID,Report Type,Category,Mandal,From Date,To Date,Status\n";

        const rows = reports
            .map(
                (report) =>
                    `${report.id},${report.reportType},${report.category},${report.mandal},${report.fromDate || ""},${report.toDate || ""},${report.status || ""}`
            )
            .join("\n");

        const blob = new Blob(
            [headers + rows],
            {
                type: "text/csv;charset=utf-8;",
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = `Reports_${new Date()
            .toISOString()
            .split("T")[0]}.csv`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    };


    // ==================================================
    // PRINT / PDF
    // ==================================================
    const handleExportPDF = () => {
        window.print();
    };


    // ==================================================
    // SUMMARY
    // ==================================================
    const totalReports = reports.length;

    const completedReports = reports.filter(
        (report) => report.status === "Completed"
    ).length;

    const pendingReports = reports.filter(
        (report) =>
            report.status === "Pending" ||
            !report.status
    ).length;


    // ==================================================
    // UI
    // ==================================================
    return (
        <>
            <Navbar />

            <div className="enfield1">

                {/* ================= HEADER ================= */}

                <div className="re1">

                    <div className="re2">

                        <div className="re6">

                            <TbReportSearch className="re7" />

                            <h3>
                                Reports Engine
                            </h3>

                        </div>


                        <div className="re3">

                            <button
                                className="re4"
                                onClick={handleExportPDF}
                            >
                                Export PDF
                            </button>


                            <button
                                className="re5"
                                onClick={handleExportExcel}
                            >
                                Excel Spreadsheet
                            </button>

                        </div>

                    </div>

                </div>


                {/* ================= GENERATE REPORT ================= */}

                <div className="enfield2">

                    <h3>
                        Generate Reports
                    </h3>


                    <form
                        className="enfield0"
                        onSubmit={handleGenerateReport}
                    >

                        <div className="form-group-grid">

                            {/* FROM DATE */}

                            <div>

                                <label htmlFor="fromDate">
                                    From Date
                                </label>

                                <input
                                    type="date"
                                    id="fromDate"
                                    name="fromDate"
                                    value={formData.fromDate}
                                    onChange={handleInputChange}
                                />

                            </div>


                            {/* TO DATE */}

                            <div>

                                <label htmlFor="toDate">
                                    To Date
                                </label>

                                <input
                                    type="date"
                                    id="toDate"
                                    name="toDate"
                                    value={formData.toDate}
                                    onChange={handleInputChange}
                                />

                            </div>


                            {/* REPORT TYPE */}

                            <div>

                                <label htmlFor="reportType">
                                    Report Type
                                </label>

                                <select
                                    id="reportType"
                                    name="reportType"
                                    value={formData.reportType}
                                    onChange={handleInputChange}
                                >

                                    <option value="">
                                        -- Select Report Type --
                                    </option>

                                    <option value="summary">
                                        Summary Report
                                    </option>

                                    <option value="detailed">
                                        Detailed Report
                                    </option>

                                    <option value="expense">
                                        Expense Report
                                    </option>

                                    <option value="development">
                                        Development Works Report
                                    </option>

                                    <option value="grievance">
                                        Grievance Report
                                    </option>

                                </select>

                            </div>


                            {/* CATEGORY */}

                            <div>

                                <label htmlFor="category">
                                    Category
                                </label>

                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                >

                                    <option value="">
                                        -- Select Category --
                                    </option>

                                    <option value="roads">
                                        Roads
                                    </option>

                                    <option value="drainage">
                                        Drainage
                                    </option>

                                    <option value="waterSupply">
                                        Water Supply
                                    </option>

                                    <option value="streetLights">
                                        Street Lights
                                    </option>

                                    <option value="parks">
                                        Parks
                                    </option>

                                    <option value="buildings">
                                        Buildings
                                    </option>

                                    <option value="education">
                                        Education
                                    </option>

                                    <option value="health">
                                        Health
                                    </option>

                                </select>

                            </div>


                            {/* MANDAL */}

                            <div>

                                <label htmlFor="mandal">
                                    Mandal
                                </label>

                                <select
                                    id="mandal"
                                    name="mandal"
                                    value={formData.mandal}
                                    onChange={handleInputChange}
                                >

                                    <option value="">
                                        -- Select Mandal --
                                    </option>

                                    <option value="karimnagar">
                                        Karimnagar
                                    </option>

                                    <option value="choppadandi">
                                        Choppadandi
                                    </option>

                                    <option value="gangadhara">
                                        Gangadhara
                                    </option>

                                    <option value="ganneruvaram">
                                        Ganneruvaram
                                    </option>

                                    <option value="manakondur">
                                        Manakondur
                                    </option>

                                    <option value="ramadugu">
                                        Ramadugu
                                    </option>

                                    <option value="thimmapur">
                                        Thimmapur
                                    </option>

                                    <option value="veenavanka">
                                        Veenavanka
                                    </option>

                                </select>

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="enfield100"
                        >
                            Generate Report
                        </button>

                    </form>

                </div>


                {/* ================= REPORT TABLE ================= */}

                <div className="report-list-wrapper">

                    <h3>
                        Live Data Registry
                    </h3>


                    {loading ? (

                        <p>
                            Loading reports...
                        </p>

                    ) : (

                        <div className="report-table-container">

                            <table className="report-data-table">

                                <thead>

                                    <tr>

                                        <th>
                                            Type
                                        </th>

                                        <th>
                                            Category
                                        </th>

                                        <th>
                                            Mandal
                                        </th>

                                        <th>
                                            From Date
                                        </th>

                                        <th>
                                            To Date
                                        </th>

                                        <th>
                                            Status
                                        </th>

                                        <th>
                                            Actions
                                        </th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {reports.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan="7"
                                                style={{
                                                    textAlign: "center",
                                                }}
                                            >
                                                No reports found
                                            </td>

                                        </tr>

                                    ) : (

                                        reports.map((report) => (

                                            <tr key={report.id}>

                                                <td>
                                                    {report.reportType}
                                                </td>

                                                <td>
                                                    {report.category}
                                                </td>

                                                <td>
                                                    {report.mandal}
                                                </td>

                                                <td>
                                                    {report.fromDate || "-"}
                                                </td>

                                                <td>
                                                    {report.toDate || "-"}
                                                </td>

                                                <td>

                                                    <span
                                                        className={`status-badge ${
                                                            report.status
                                                                ?.toLowerCase() ||
                                                            "pending"
                                                        }`}
                                                    >
                                                        {report.status ||
                                                            "Pending"}
                                                    </span>

                                                </td>

                                                <td>

                                                    <div className="table-action-buttons">

                                                        <button
                                                            className="put-action-btn"
                                                            onClick={() =>
                                                                handleUpdateReport(
                                                                    report
                                                                )
                                                            }
                                                        >
                                                            Update
                                                        </button>


                                                        <button
                                                            className="delete-action-btn"
                                                            onClick={() =>
                                                                handleDeleteReport(
                                                                    report.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>

                                                    </div>

                                                </td>

                                            </tr>

                                        ))

                                    )}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>


                {/* ================= SUMMARY ================= */}

                <div className="enfield305">

                    <h3>
                        Summary Cards
                    </h3>


                    <div className="enfield200">

                        <div className="enfield101">

                            <span>
                                Total Reports
                            </span>

                            <strong>
                                {totalReports}
                            </strong>

                        </div>


                        <div className="enfield102">

                            <span>
                                Completed Reports
                            </span>

                            <strong>
                                {completedReports}
                            </strong>

                        </div>


                        <div className="enfield103">

                            <span>
                                Pending Reports
                            </span>

                            <strong>
                                {pendingReports}
                            </strong>

                        </div>


                        <div className="enfield104">

                            <span>
                                Total
                            </span>

                            <strong>
                                {totalReports}
                            </strong>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Reports;