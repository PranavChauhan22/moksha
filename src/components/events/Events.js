import React, { useEffect, useState, useRef } from "react";
import Eventgall from "./Eventgall";
import Eventmicro from "./Eventmicro";
import Eventmic1 from "./Eventmic1";
import Eventmic2 from "./Eventmic2";
import "./Events.css";
import cds from "./assets/cds.gif";
import queryString from "query-string";
import { encode } from "string-encode-decode";
import Loader from "../loader/Loader";
import { Toast } from "primereact/toast";

function Events() {
  const toast = useRef(null);
  const [eventsData, setEventsData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://moksha-9bmv.onrender.com/getEvents"
        );
        const data = await response.json();
        const newData = data.message.slice(1);
        const reqData = newData.filter((array) => array[15] !== "NO");
        setEventsData(reqData);
        // showSuccess(); // Call showSuccess after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  const showSuccess = () => {
    toast.current.show({
      severity: "info",
      summary: "Important Info",
      sticky: true,
    key:"1",
      detail: (
        <a
          href="https://innohacks.devfolio.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="a_inno"
        >
          Register for InnoHacks (The greatest hack of all time)
        </a>
      )
    });
  };

  const filteredEvents = eventsData.filter(
    (event) =>
      event[13] &&
      event[13].toLowerCase().includes(selectedFilter.toLowerCase()) &&
      event[4].toLowerCase().includes(searchValue.toLowerCase()) &&
      (day === "" || day === event[14])
  );

  if (!eventsData) {
    return <Loader />;
  } else {
    return (
      <div className="events">
        <div className="card flex justify-content-center">
          <Toast ref={toast} />
          <div className="flex flex-wrap gap-2"></div>
        </div>
        <div className="img_em_w">
          <img src={cds} className="e_m_wrap" alt="cds" />
          <div className="e_h_head">EVENTS</div>
          <img src={cds} className="e_m_wrap" alt="cds" />
        </div>
        <Eventgall imgs={eventsData} />
        <div className="filter-section">
          <select
            id="filterDropdown"
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="">All</option>
            {Array.from(new Set(eventsData.map((event) => event[13]))).map(
              (value, index) =>
                value &&
                value.length > 0 && (
                  <option key={index} value={value}>
                    {value}
                  </option>
                )
            )}
          </select>
          <div className="days-filter">
            <div
              className={
                day !== "" ? "btn-day-filter" : "btn-day-filter addon-u-d"
              }
              onClick={() => setDay("")}
            >
              All Days
            </div>
            {[1, 2, 3].map((dayNumber) => (
              <div
                key={dayNumber}
                className={
                  day !== dayNumber.toString()
                    ? "btn-day-filter"
                    : "btn-day-filter addon-u-d"
                }
                onClick={() => setDay(dayNumber.toString())}
              >
                Day {dayNumber}
              </div>
            ))}
          </div>
          <input
            type="text"
            id="searchInput"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
          />
        </div>

        <div className="events_display">
          {filteredEvents.map((event, index) => {
            const randomComponent = getRandomComponent(index);
            const encodedArray = event.map((e) => encode(e, "gbk"));
            const params = { UIMV: JSON.stringify(encodedArray) };
            const queryStringParams = queryString.stringify(params);

            return (
              <div key={index} style={{ margin: "30px" }}>
                {randomComponent === "Eventmicro" && (
                  <a
                    href={event[4]==="InnoHacks"?'https://innohacks.devfolio.co/':`/mv?${queryStringParams}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Eventmicro eventData={event} />
                  </a>
                )}
                {randomComponent === "Eventmic1" && (
                  <a
                  href={event[4]==="InnoHacks"?'https://innohacks.devfolio.co/':`/mv?${queryStringParams}`}
                  target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Eventmic1 eventData={event} />
                  </a>
                )}
                {randomComponent === "Eventmic2" && (
                  <a
                  href={event[4]==="InnoHacks"?'https://innohacks.devfolio.co/':`/mv?${queryStringParams}`}
                  target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Eventmic2 eventData={event} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function getRandomComponent(index) {
    if (index % 3 === 0) {
      return "Eventmicro";
    } else if (index % 3 === 1) {
      return "Eventmic1";
    } else if (index % 3 === 2) {
      return "Eventmic2";
    } else {
      return "Eventmicro";
    }
  }
}

export default Events;
