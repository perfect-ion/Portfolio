import { Form, Row, Col,Button,Popover,OverlayTrigger } from "react-bootstrap";
import React,{useState} from "react";
import emailjs from 'emailjs-com'

export const Frm = ({ position, string }) => {
  const [checked, setChecked] = useState(false);

  let [state,setState] = useState({
    user:{
      name:'',
      email:'',
      subject:'',
      message:''
    }
  })

  let updateInput = (e)=>{
    setState({
      ...state,
      user:{
        ...state.user,
        [e.target.name]: e.target.value
      }
    })
  }


  // const handleSubmit = e=>{
  //   e.preventDefault()
  //   console.log(e.target)
  // }

  function sendEmail(e){
    e.preventDefault();
    // emailjs.sendForm('service_c8wu0hi','template_3mbc0mn',e.target,'Vzgw9EW2XjjqmJtm0')
  }

  // let register = (e)=>{
  //   e.preventDefault();
  //   console.log(state.user)
  // }

  let FormStyle = {
    backgroundColor: "#292929",
    borderColor:"#292929",
    color:"#999999",
    maxWidth: "35vw",
    // borderBottomColor:"white",
    // borderBottomWidth:"1px"
  }

  let FormStyle1 = {
    backgroundColor: "#292929",
    borderColor:"#292929",
    color:"#999999",
    maxWidth: "15vw",
    // borderBottomColor:"white",
    // borderBottomWidth:"1px"
  }

  return (
    <>
      <Form onSubmit={sendEmail} >
        <Row>
          <Col >
            <Form.Control placeholder="Name" onChange={updateInput} name="name" htmlSize="34" style={FormStyle1}/>
          </Col> 
          <Col>
            <Form.Control type="email" placeholder="Email" onChange={updateInput} name="email" style={FormStyle1}/>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Subject" onChange={updateInput} name="subject" style={FormStyle}/>
          </Col>
        </Row>
        <br />
            <Row>
        <Col>
          <Form.Control type="text" placeholder="Message" as="textarea" onChange={updateInput} name="message" rows={5} style={FormStyle}/>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col>
        <>
  {['right'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Header as="h3">{`Message Sent!!`}</Popover.Header>
          <Popover.Body>
            <strong>Hola como estas?</strong> Thanks for contacting.
          </Popover.Body>
        </Popover>
      }
    >
      <Button variant="outline-light" type="submit" size="lg">Send Message!</Button>
    </OverlayTrigger>
  ))}
</>
        
        </Col>
      </Row>
      
      </Form>


    </>
  );
};
