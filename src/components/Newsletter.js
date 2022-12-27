import { Col } from "react-bootstrap";
import logo from "../assets/img/tedxmec.png"

export const Newsletter = ({ status, onValidated }) => {



  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
         <img src={logo}></img>
        </div>
      </Col>
  )
}
