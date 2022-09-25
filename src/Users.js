import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url).then((response) => {
      response.json().then((result) => {
        console.log(result);
        setData(result);
      });
    });
  }, []);

  return (
    <div>
      <h1>Data User</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <img src={item.url} style={{ width: 100, height: 100 }} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
