import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const Users = () => {
    const [users, setUsers] = useState([]);
    const { id } = useParams();


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUsers(result.data)
      }
    
      useEffect(() => {
        loadUser();
      }, [])
      

    return (
        <div className="container m-auto d-flex flex-column">
        <div className="card my-5" style={{ width: 'auto', margin:'auto', padding:'2rem 5rem', borderRadius:'25px', backgroundColor:'rgb(206 251 255 / 46%)' }}>
            <div className="card-body"  >
                <h5 className="card-title" style={{ fontSize:'4rem'}}> User ID : { users.id } </h5>
                <p className="card-text" style={{ fontSize:'2rem'}}><b>Name :</b> { users.name } </p>
                <p className="card-text" style={{ fontSize:'2rem'}}><b>Website :</b> { users.website } </p>
                <p className="card-text" style={{ fontSize:'2rem'}}><b>Mail :</b> { users.email } </p>
            </div>
        </div>
        <Link to="/" className="btn btn-dark" style={{width:'10rem', margin:'auto'}}>Back</Link>
        </div>
    )
}

export default Users