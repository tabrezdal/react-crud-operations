import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailForward } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3003/users")
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      }).catch = (e) => {
        console.log({ e });
      }
  }, [])


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
            <div>View</div>
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
        ))}
        </div>
     </div>
  )
}

export default Home;