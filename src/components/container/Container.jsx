import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./Container.css"

export const Containr = () => {
  const [val,setVal]=useState();
  const navigate=useNavigate();
    const fn=()=>{
    //       fetch(`https://kontests.net/api/v1/`+val)
    // .then((response) => response.json())
    // .then((actualData) => {
    //   return (
    //     <ListGroup variant="flush">
    //   actualData.map((data)=>
    //         <ListGroup.Item>data.name</ListGroup.Item>
    //       )
    //       </ListGroup>
    //     );
    // });
    // .then((actualData) => console.log(actualData));
    navigate('/'+val);
    }
    
    // const AsyncAwait = () => {
    //   const [users, setUsers] = useState([])
    
      // const fetchData = async () => {
      //   const response = await fetch(`https://kontests.net/api/v1/`+val)
      //   const data = await response.json()
      //   setUsers(data)
      // }
    
      // useEffect(() => {
      //   fetchData()
      // }, [])
    //   fetch(`https://kontests.net/api/v1/`+val)
    // .then(response => response.json())
    // .then(data => setUsers(data))
    
    //   return (
    //     <div>
    //       {users.length > 0 && (
    //         <ul>
    //           {users.map(user => (
    //             <li key={user.name}>{user.name}</li>
    //           ))}
    //         </ul>
    //       )}
    //     </div>
    //   )
    // }

  return (
    <div className='container p-1 newcontainer'>
        <big>Please choose the coding platform</big>
        <Form.Select value={val} onChange={(e) => setVal(e.target.value)} aria-label="Default select example" size='md'>
      <option>Coding Platform</option>
      <option value="codeforces">Codeforces</option>
      <option value="code_chef">Codechef</option>
      <option value="leet_code">LeetCode</option>
      <option value="kick_start">Kickstart</option>
      <option value="hacker_rank">HackerRank</option>
      <option value="hacker_earth">HackerEarth</option>
      <option value="at_coder">Atcoder</option>
      <option value="top_coder">TopCoder</option>
      <option value="codeforces_gym">Codeforces::Gym</option>
      <option value="cs_academy">CS Academy</option>
      <option value="all">All of the above</option>
    </Form.Select>
    <Button variant="primary" onClick={fn}>Get contest details</Button>
    </div>
  )
}
