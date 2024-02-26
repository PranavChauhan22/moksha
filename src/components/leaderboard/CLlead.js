import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import "./Leaderboard.css";
import Loader from "../loader/Loader";
import Graph from "./Graph";
import lgif from "./lead.gif";
import data from "../events/data";
export default function CLlead() {
  const [customers, setCustomers] = useState(null);


  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    "country.name": {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: {
      operator: FilterOperator.OR,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  });

  const processData = (data, setData, vr) => {
    if (data.message) {
      const respD = vr=="a"?data.message.slice(1):data.reg.slice(1);
      const arrayOfObjects = respD.map(([name, points]) => ({
        name,
        points: parseInt(points),
      }));
  
      arrayOfObjects.sort((a, b) => b.points - a.points);
  
      arrayOfObjects.slice(0, 5).forEach((entry, index) => {
        switch (index) {
          case 0:
            entry.name = "🥇 " + entry.name;
            break;
          case 1:
            entry.name = "🥈 " + entry.name;
            break;
          case 2:
            entry.name = "🥉 " + entry.name;
            break;
          case 3:
            entry.name = "🎖️ " + entry.name;
            break;
          case 4:
            entry.name = "🏅 " + entry.name;
            break;
          default:
            break;
        }
      });
  
      setData(arrayOfObjects);
    }
  };
  
  const GetLeaderboard = async () => {
    try {
      const response = await fetch("https://moksha-9bmv.onrender.com/getCLLeaderboard", {
      // const response = await fetch("http://localhost:3002/getCLLeaderboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      processData(data, setCustomers,"a"); // Assuming this is for customers
    
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    GetLeaderboard();
  }, []);
  
  

  const onGlobalFilterChange = (event) => {
    const value = event.target.value;
    let _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
  };

  const renderHeader = () => {
    const value = filters["global"] ? filters["global"].value : "";

    return (
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          value={value || ""}
          onChange={(e) => onGlobalFilterChange(e)}
          placeholder="Leaderboard Search"
        />
      </span>
    );
  };

  const header = renderHeader();
  if (!customers ) {
    return <Loader />;
  }
  return (
    <div className="card leaderboard">
      <div className="lead_gif">
        <img src={lgif} className="lgif" />
        <img src={lgif} className="lgif" />
        <div className="lead_head">CL LEADERBOARD</div>
        <img src={lgif} className="lgif" />
        <img src={lgif} className="lgif" />
      </div>
      <div className="tabs_l">
      </div>
      <DataTable
        value={customers}
        paginator
        rows={10}
        header={header}
        filters={filters}
        onFilter={(e) => setFilters(e.filters)}
        selection={selectedCustomer}
        onSelectionChange={(e) => setSelectedCustomer(e.value)}
        selectionMode="single"
        dataKey="id"
        stateStorage="session"
        stateKey="dt-state-demo-local"
        emptyMessage="No customers found."
        className="table_leader"
      >
        <Column
          field="name"
          header="Name"
          sortable
          filter
          filterPlaceholder="Search"
          style={{
            width: "25%",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bolder",
          }}
        ></Column>
        <Column
          field="points"
          header="Points"
          sortable
          filterPlaceholder="Search"
          style={{
            width: "25%",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bolder",
          }}
        ></Column>
      </DataTable>
      <Graph Mdata={customers} />
    </div>
  );
}
