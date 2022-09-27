import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const firstLoad = 0;

const Users = () => {
  const [data, setData] = useState([]);
  const [start, setStart] = useState(firstLoad);
  // let url = `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=5`;
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=5`).then((response) => {
      response.json().then((result) => {
        setData(result);
      });
    });
  }, [start]);

  const scrollToEnd = () => {
    setStart(start + 5);
  };

  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      scrollToEnd();
      console.log(data);
    }
  };
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
          {data.map((item, i) => (
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
