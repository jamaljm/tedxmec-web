import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import logo from "../assets/img/tedxmec.png"

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
         <img src={logo}></img>
        </div>
      </Col>
  )
}
