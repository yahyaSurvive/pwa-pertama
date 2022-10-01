import React, { useEffect, useRef, useState } from "react";
import Table from "react-bootstrap/Table";

const Users = () => {
  const shouldLog = useRef(true);
  const [start, setStart] = useState(0);
  const [dataUser, setDataUser] = useState([]);

  const handleSrcoll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setStart((prev) => prev + 5);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSrcoll);
    return () => window.removeEventListener("scroll", handleSrcoll);
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=5`)
      .then((response) => response.json())
      .then((json) => setDataUser((prev) => [...prev, ...json]));
  }, [start]);

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
          {dataUser.map((item, i) => (
            <tr key={i}>
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
