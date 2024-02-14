import React, { useEffect, useState } from "react";
import data from "./data";
import Eventgall from "./Eventgall";
import Eventmicro from "./Eventmicro";
import Eventmic1 from "./Eventmic1";
import Eventmic2 from "./Eventmic2";
import "./Events.css";
import cds from "./assets/cds.gif";
import queryString from "query-string";
import {encode, decode} from 'string-encode-decode'
import Loader from "../loader/Loader";


function Events() {


  const [eventsData, setEventsData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [day, setDay] = useState("");

  useEffect(() => {
    // Fetch events data from localhost:3002/getEvents
    const fetchData = async () => {
      try {
        const response = await fetch("https://moksha-9bmv.onrender.com/getEvents");
        const data = await response.json();
        console.log(data);
        // Remove the first entry from the array
        const newData = data.message.slice(1);
        const reqData=newData.filter(array => array[15] !== "NO")
        setEventsData(reqData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render
  

  const filteredEvents = eventsData.filter(
    (event) =>
   
      event[13] &&
      event[13].toLowerCase().includes(selectedFilter.toLowerCase()) &&
      event[4].toLowerCase().includes(searchValue.toLowerCase()) && 
      (day === "" || day === event[14] )
     
  );

if(!eventsData){
  return <Loader/>
}else{
  return (
    <div className="events">
      <div className="img_em_w">
        <img src={cds} className="e_m_wrap" />
        <div className="e_h_head">EVENTS</div>
        <img src={cds} className="e_m_wrap" />
      </div>
      <Eventgall imgs={eventsData} />
      <div className="filter-section">
        <select
          id="filterDropdown"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="">All</option>
          {/* Create options based on unique values in data[13] */}
          {Array.from(new Set(eventsData.map((event) => event[13]))).map(
            (value, index) => (
            value&&value.length>0&&<option key={index} value={value}>
                {value}
              </option>
            )
          )}
        </select>
        <div className="days-filter">

          <div className={day!==""?"btn-day-filter":"btn-day-filter addon-u-d"} onClick={()=>setDay("")}>All Days</div>
          <div className={day!=="1"?"btn-day-filter":"btn-day-filter addon-u-d"} onClick={()=>setDay("1")}>Day 1</div>
          <div className={day!=="2"?"btn-day-filter":"btn-day-filter addon-u-d"} onClick={()=>setDay("2")}>Day 2</div>
          <div className={day!=="3"?"btn-day-filter":"btn-day-filter addon-u-d"} onClick={()=>setDay("3")}>Day 3</div>
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
          const encodedArray = event.map(e=>encode(e,'gbk'));
          const params = { UIMV: JSON.stringify(encodedArray) };
          const queryStringParams = queryString.stringify(params);

          return (
            <React.Fragment key={index}>
              <div style={{ margin: "30px" }}>
                {randomComponent === "Eventmicro" && (
                  <a href={`/mv?${queryStringParams}`} target="_blank" style={{textDecoration:"none",color:"black"}}>
                    <Eventmicro eventData={event} />
                  </a>
                )}
                {randomComponent === "Eventmic1" && (
                  <a href={`/mv?${queryStringParams}`} target="_blank" style={{textDecoration:"none",color:"black"}}>
                    <Eventmic1 eventData={event} />
                  </a>
                )}
                {randomComponent === "Eventmic2" && (
                  <a href={`/mv?${queryStringParams}`} target="_blank" style={{textDecoration:"none",color:"black"}}>
                    <Eventmic2 eventData={event} />
                  </a>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

// Function to randomly select a component
function getRandomComponent(index) {
  if (index % 3 === 0) {
    return "Eventmicro";
  } else if (index % 3 === 1) {
    return "Eventmic1";
  } else if (index % 3 === 2) {
    return "Eventmic2";
  } else {
    // Add more conditions or fallback logic if needed
    return "Eventmicro";
  }
}
}

export default Events;
