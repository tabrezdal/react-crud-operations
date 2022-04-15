import axios from 'axios';
import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

  const {id} = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    website: "",
    email:""
  });

  const onChange = e => {
    console.log(user)
    setUser({...user, [e.target.name] : e.target.value})
  }

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(result);
    setUser(result.data)
  }

  useEffect(() => {
    loadUser();
  }, [])
  


  const updateData = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
    }

  return (
    <div className="container mt-5 w-50">
      <h1>Edit User</h1>
      <form onSubmit={e => updateData(e)}>
        <div className="form-group">
          <label htmlFor="exampleInputName1">Name</label>
          <input type="text" className="form-control" id="exampleInputWebsite1" placeholder="EnterName" name="name" value={user.name} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputWebsite1">Website</label>
          <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Website" name="website" value={user.website} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} placeholder="Enter email" onChange={onChange} />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <button type="submit" className="btn btn-dark">Update</button>
      </form>
    </div>
  )
}

export default Edit