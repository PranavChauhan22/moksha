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

// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from 'primereact/button';
// import { Tooltip } from 'primereact/tooltip';
// import DataViewer from './DataViewer'; // Import the DataViewer component

// export default function DataViewer() {
//     const [products, setProducts] = useState([]);
//     const [fetchedCSVData, setFetchedCSVData] = useState([]); // State to store fetched CSV data
//     const dt = useRef(null);

//     useEffect(() => {
//         // Simulate fetching products data
//         const fetchedProducts = [
//             { code: '001', name: 'Product 1', category: 'Category 1', quantity: 10 },
//             { code: '002', name: 'Product 2', category: 'Category 2', quantity: 20 },
//             { code: '003', name: 'Product 3', category: 'Category 3', quantity: 30 }
//         ];

//         // Set products data
//         setProducts(fetchedProducts);

//         // Extract headers for CSV export
//         if (fetchedProducts.length > 0) {
//             const headers = Object.keys(fetchedProducts[0]);
//             setFetchedCSVData(headers);
//         }
//     }, []); // eslint-disable-line react-hooks/exhaustive-deps

//     const exportCSV = (selectionOnly) => {
//         dt.current.exportCSV({ selectionOnly });
//     };

//     const exportPdf = () => {
//         // Keep exportPdf function as it is
//     };

//     const exportExcel = () => {
//         // Keep exportExcel function as it is
//     };

//     const header = (
//         <div className="flex align-items-center justify-content-end gap-2 export-buttons">
//             <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
//             <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
//             <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
//         </div>
//     );

//     return (
//         <div className="card">
//             <Tooltip target=".export-buttons>button" position="bottom" />

//             <DataViewer data={products} fetchedCSVData={fetchedCSVData} /> {/* Render DataViewer with fetched data */}

//             {/* Hide DataTable, as we're not using it anymore */}
//             {/* <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
//                 {cols.map((col, index) => (
//                     <Column key={index} field={col.field} header={col.header} />
//                 ))}
//             </DataTable> */}
//         </div>
//     );
// }
