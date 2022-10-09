import React from 'react'
import { useState } from 'react'
import { Navbr } from '../../components/navbar/Navbar'
import Table from 'react-bootstrap/Table';
import { useEffect } from 'react';
import { Footer } from '../../components/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const All=()=>{
    const [users, setUsers] = useState([])
    const fetchData = async () => {
        const response = await fetch(`https://kontests.net/api/v1/all`)
        const data = await response.json()
        setUsers(data)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    console.log(users);
      return (
        <div className='nc'>
            <Navbr/>
          {users.length>0 && (
            <Table striped bordered hover size="sm">
            <thead className='fhead'>
              <tr>
                <th>S.No.</th>
                <th>Contest</th>
                <th>Site</th>
                <th>Start-time</th>
                <th>End-time</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {users.length>0 && users.map((item,i)=>(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td><a href={item.url}> {item.name} </a></td>
                    <td>{item.site}</td>
                    <td>{item.start_time}</td>
                    <td>{item.end_time}</td>
                    <td>{parseInt(item.duration/3600)} hr {((item.duration)%3600)/60} min</td>
                </tr>
              ))}
            </tbody>
          </Table>
          )}
          <Footer/>
        </div>
      )
    }
