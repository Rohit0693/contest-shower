import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <Card className="text-center position-fixed min bottom-0 w-100" bg="secondary" variant="dark">
      <Card.Body>
        <Card.Title>&copy; {new Date().getFullYear()} Copyright:{' '}Contest-Shower by Rohit Kumar</Card.Title>
      </Card.Body>
    </Card>
  )
}