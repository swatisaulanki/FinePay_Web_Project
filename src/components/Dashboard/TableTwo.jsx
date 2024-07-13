import React from 'react'
import './TableTwo.css';

const TableTwo = () => {

    const data = [
        {
          rm: "Branch A",
          agency: "Agency 1",
          bc: "BC 1",
        },
        {
          rm: "Branch B",
          agency: "Agency 2",
          bc: "BC 2",
        },
        // Add more entries as needed
      ];
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>RM</th>
          <th>Agency</th>
          <th>BC</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.rm}</td>
            <td>{item.agency}</td>
            <td>{item.bc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
}

export default TableTwo
