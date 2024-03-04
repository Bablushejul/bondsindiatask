import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {


    const allFormData = useSelector((state) => state.tableData.tablelist);


  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>city</th>
              <th>age</th>
              <th>pin</th>
            </tr>
          </thead>
          <tbody>
            {allFormData?.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>{item.city}</td>
                <td>{item.age}</td>
                <td>{item.pin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
