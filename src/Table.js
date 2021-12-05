import React from "react";
import "./Table.css";
import { useEffect, useState } from "react";
const Table = () => {
  const [initalState, setInitialState] = useState([]);
  useEffect(() => {
    fetch("/allUsers")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonResponse) => console.log(jsonResponse));
  }, []);
  console.log(initalState);

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
        <tr>
          <td>name</td>
          <td>email</td>
          <td>pathname</td>
          <td>certificate</td>
          <td>paydate</td>
          <td>no of videos</td>
          <td>updateddate</td>
          <td>activeorinactive</td>
        </tr>
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
