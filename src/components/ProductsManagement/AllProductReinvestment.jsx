import React from 'react'
import "./AllProductReinvestment.css"
const AllProductReinvestment = () => {
    const data = [
        {
          name: "John Doe",
          mob: "1234567890",
          uniqid:"01235",
           InvestmentOne: "10",
           InvestmentTwo: "20",
           InvestmentThree:"50",
           InvestmentFour:"80",
           InvestmentFive:"90",
           InvestmentTotal:"250",
        },
        // Add more entries as needed
      ];
  return (
    <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mob</th>
          <th>Uniq Id</th>
          <th>Investment 1</th>
          <th>Investment 2</th>
          <th>Investment 3</th>
          <th>Investment 4</th>
          <th>Investment 5</th>

          <th>Total Investment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.mob}</td>
            <td>{item.uniqid}</td>
            <td>{item.InvestmentOne}</td>
            <td>{item.InvestmentTwo}</td>
            <td>{item.InvestmentThree}</td>
            <td>{item.InvestmentFour}</td>
            <td>{item.InvestmentFive}</td>
            <td>{item.InvestmentTotal}</td>

          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default AllProductReinvestment
