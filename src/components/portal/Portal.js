import React, { useState, useRef } from "react";

import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import DataViewer from "./DataViewer"; // Import the DataViewer component
import "./Portal.css";
import pgif from "./pgif.gif";
import fgif from "./fgif.gif";
import { saveAs } from "file-saver";


function Portal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const [fetchedData, setFetchedData] = useState(null); // New state to store fetched data
  const [fetchedCSVData, setFetchedCSVData] = useState(null); // New state to store fetched data
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Successfull login",
      life: 3000,
    });
  };

  const convertToCSV = (data) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      data.map((row) => Object.values(row).join(",")).join("\n");
     
    return csvContent;
  };

  // const downloadCSV = (csvData) => {
  //   const link = document.createElement("a");
  //   link.setAttribute("href", csvData);
  //   link.setAttribute("download", result + ".csv");
  //   document.body.appendChild(link);
  //   link.click();
  // };


  const downloadCSV = (csvData) => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", result + ".csv");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Release the object URL
  };
  
  
  // Assuming this function is within a React component
  const handleDownloadCSV = () => {
    console.log(fetchedData);
    const csvData = convertToCSV(fetchedData);
    downloadCSV(csvData);
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "Invalid Credentials",
      life: 3000,
    });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://moksha-9bmv.onrender.com/checkCredentials", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setResult(data.name);
        setFetchedData(data.row);
        setFetchedCSVData(data.csvData);

        showSuccess();
      } else {
        showError();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="portal">
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
        <div className="flex flex-wrap gap-2"></div>
      </div>
      <div className="pgif_dash">
        <img src={pgif} className="pgif" style={{ marginRight: "20px" }} />
        <div className="p_name">{result ? result : "MV PORTAL"}</div>
        <img src={pgif} className="pgif" style={{ marginLeft: "20px" }} />
      </div>
      {!fetchedData && (
        <form onSubmit={handleSubmit} className="pform">
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="pemail"
              placeholder="email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="ppassword"
              placeholder="password"
            />
          </div>
          <button type="submit" className="pbtn">
            Submit
          </button>
        </form>
      )}
      {fetchedData && (
        <DataViewer data={fetchedData} fetchedCSVData={fetchedCSVData} />
      )}{" "}
      {fetchedData && (
        <button onClick={handleDownloadCSV} className="csvbtn">
          Download CSV
        </button>
      )}
      {/* Conditionally render DataViewer */}
      {!fetchedData && (
        <div className="ppgif">
          <img src={fgif} className="fgif" />
          <img src={fgif} className="fgif_2" />
        </div>
      )}
    </div>
  );
}

export default Portal;
