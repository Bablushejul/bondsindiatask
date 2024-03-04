import React, { useState } from "react";
import { addNewTableData } from "../tableDataSave";
import { useDispatch, useSelector } from "react-redux";

const FormPage = () => {
  const dispatch = useDispatch();
  const allFormData = useSelector((state) => state.tableData.tablelist);

  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    age: "",
    pin: "",
  });

  const handleOnChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTableData(inputs));

    setInputs({
      name: "",
      city: "",
      age: "",
      pin: "",
    });
  };

  console.log(allFormData)

  console.log(inputs);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <div>
          <input
            type="text"
            name="name"
            value={inputs?.name}
            onChange={handleOnChange}
          />
        </div>{" "}
        <label>city</label>
        <div>
          <input
            type="text"
            name="city"
            value={inputs?.city}
            onChange={handleOnChange}
          />
        </div>{" "}
        <label>age</label>
        <div>
          <input
            type="text"
            name="age"
            value={inputs?.age}
            onChange={handleOnChange}
          />
        </div>{" "}
        <label>pin</label>
        <div>
          <input
            type="text"
            name="pin"
            value={inputs?.pin}
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div style={{display:"flex",justifyContent:"center"}}>
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
  );
};

export default FormPage;
