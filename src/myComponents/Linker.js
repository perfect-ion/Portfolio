import {Nav, Card} from 'react-bootstrap';
import React from 'react'
import {Link} from 'react-router-dom'

export const Linker = () => {

  let ButStyle = {
    backgroundColor:"#121212",
    borderBottomColor:"#121212",
    maxWidth: '7rem',
    color:"white",
    height:"30rem",
  }

  let CardStyle = {
    backgroundColor:"#000000",
    borderBottomColor:"#000000",
    maxWidth: '7rem',
    color:"white",
  }

  let BStyle = {
    color:"#999999",
    borderBottomColor:"#202020",
    borderBottomWidth:"1px",
    borderTopWidth:"1px",
    borderTopColor:"#595959",
    height:"3.3rem"
  }

  return (
    <>
    <div style={ButStyle}>

    <Card style={CardStyle}>
    <Card.Img variant="top" src="../images/g_image.jpg" />
    <Card.Body>
      <Card.Title>Gaurav</Card.Title>
      <Card.Text>
        <small className="text-muted">web developer</small>
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
  <br/>

  <Nav variant="tabs" className="flex-column" defaultActiveKey="/home" style={ButStyle}>
  <Nav.Item>
    <Nav.Link as={Link} to={"/"} style = {BStyle}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to={"about"} style = {BStyle}>About Me</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to={"contact"} style = {BStyle}>Contact</Nav.Link>
  </Nav.Item>  
  <Nav.Item>
    <Nav.Link as={Link} to={"about"} style = {BStyle}>My Skills</Nav.Link>
  </Nav.Item>
</Nav>
    </div>

</>

  )
}
