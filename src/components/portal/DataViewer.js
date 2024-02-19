import React, { useState } from 'react';
import "./Portal.css";

function DataViewer({ data,fetchedCSVData }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Render table rows for current page data
  const renderRows = () => {
    return data.map((row, index) => (
      <tr key={index}>
        {row.map((entry, entryIndex) => (
          <td key={entryIndex}>
            {entry.includes('https') ? (
              <a href={entry} target="_blank" rel="noopener noreferrer">
                {entry}
              </a>
            ) : (
              entry
            )}
          </td>
        ))}
      </tr>
    ));
  };
  
  const renderHead = () => {
    return fetchedCSVData.map((row, index) => (
      <th key={index}>
        {row}
        
      </th>
    ));
  };

  return (
    <div className="data-viewer-container">
      <table>
        <thead>{renderHead()}</thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
}

export default DataViewer;
