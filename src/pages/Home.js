import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import '../styles/home.css'

const Home = () => {
  const [users, setUsers] = useState([]);

  const loadUser = () => {
    axios.get("http://localhost:3003/users")
    .then(res => {
      console.log(res.data);
      setUsers(res.data);
      // setUsers(res.data.reverse());
    }).catch = (e) => {
      console.log({ e });
    }
  }

  useEffect(() => {
    loadUser();
  }, [])


  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`)
    .then(res => {
      loadUser();
  })}

  return (
    <div className="container my-4">
      <div className="row">
        

      { users.map((user, index) =>
        (
        <div className="card text-white bg-dark mb-3 mx-2" style={{maxWidth: '20em', minWidth:'16.5rem'}}>
          <div className="card-header">{ user.name } </div>
          <div className="card-body">
            <h5 className="card-title"> <FontAwesomeIcon icon={faGlobe} /> { user.website } </h5>
            <p className="card-text"> <FontAwesomeIcon icon={faMailForward} /> {  user.email } </p>
          </div>
          <div class="actions d-flex justify-content-between p-2" style={{borderTop: '1px #0f0f0f solid'}}>
            <Link className="action-links" to="view">View</Link>
            <Link className="action-links"  to="Edit">Edit</Link>
            <Link className="action-links"  to="/" onClick={ () => deleteUser(user.id)}>Delete</Link>
          </div>
        </div>
        ))}
        </div>
     </div>
  )
}

export default Home;