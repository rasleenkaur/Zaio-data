import React from "react";
import "./Table.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {
  const url = "http://localhost:5000/allUsers";
  const [initalState, setInitialState] = useState([]);
  let content = null;
  useEffect(() => {
    axios.get(url).then((res) => {
      setInitialState(res.data);
      console.log(res.data);
    });
  }, [url]);

  if (initalState) {
    content = (
      <tr>
        <td>{initalState.data[0].username}</td>
        <td>{initalState.data[0].email}</td>
        <td>{initalState.data[1].username}</td>
        <td>{initalState.data[2].username}</td>
        <td>certificate</td>
        <td>paydate</td>
        <td>no of videos</td>
        <td>updateddate</td>
        <td>activeorinactive</td>
      </tr>
    );
  }

  return (
    <>
      <h1>Showing Contents</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Learning Pathname</th>
          <th>Current certificate</th>
          <th>Payment Date</th>
          <th>Number of videos Watched</th>
          <th>Latest Updated Date</th>
          <th>Active or inactive</th>
        </tr>
        {content}
      </table>

      <button
        className="button"
        // onClick={}
      >
        GetData
      </button>
    </>
  );
};

export default Table;
