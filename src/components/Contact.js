import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-head">
        <h3>Contact Us</h3>
      </div>
      <div className="contact_box">
        <div className="contact_databox">
          <div className="contact_data_left">
            <h4 className="contact_data_title">Amith Tony Joseph</h4>
            <p className="contact_data_text">Operations Head</p>

            <div className="contact_data_right">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3VzyoFYRjA4RGHOpfB2SpyC+rYuwcW3ICs2ShxEYe9TpT7YINroGw4xaMv32GaZiZTrxW/C3ifvj/zTVH81yUcY+K7d1xhLgp4Ud9KFPDcAAyjgLsGYDcKGDcA51HAfgMwigLWaoY/YTEEyMhtBdgMG56B7dLwVwyigQU8lJBrzEQjG/krnnYQCmTk9Gv8Z4fllWAJZ+mGYQfrWMbsT4EeLitI2q5BOvh8u+oad1lFvwZJB9/WW9et6uGkciatdQKmpQcP978GpDCPLdy0zJ8UEWEVe7jIr/Bj/lkdhQDFn+kDZFFDBt8rh0QAAAAASUVORK5CYII="></img>
              <p className="contact_data_text">+91 974 239 232</p>
            </div>
          </div>
        </div>

        <div className="contact_databox">
          <div className="contact_data_left">
            <h4 className="contact_data_title">Janice Maria Jons</h4>
            <p className="contact_data_text">Co-organizer</p>

            <div className="contact_data_right">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3VzyoFYRjA4RGHOpfB2SpyC+rYuwcW3ICs2ShxEYe9TpT7YINroGw4xaMv32GaZiZTrxW/C3ifvj/zTVH81yUcY+K7d1xhLgp4Ud9KFPDcAAyjgLsGYDcKGDcA51HAfgMwigLWaoY/YTEEyMhtBdgMG56B7dLwVwyigQU8lJBrzEQjG/krnnYQCmTk9Gv8Z4fllWAJZ+mGYQfrWMbsT4EeLitI2q5BOvh8u+oad1lFvwZJB9/WW9et6uGkciatdQKmpQcP978GpDCPLdy0zJ8UEWEVe7jIr/Bj/lkdhQDFn+kDZFFDBt8rh0QAAAAASUVORK5CYII="></img>
              <p className="contact_data_text">+91 974 239 232</p>
            </div>
          </div>
        </div>

        <div className="contact_databox">
          <div className="contact_data_left">
            <h4 className="contact_data_title">Vishnumaya S Unni</h4>
            <p className="contact_data_text">Licensee</p>

            <div className="contact_data_right">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA6UlEQVR4nO3VzyoFYRjA4RGHOpfB2SpyC+rYuwcW3ICs2ShxEYe9TpT7YINroGw4xaMv32GaZiZTrxW/C3ifvj/zTVH81yUcY+K7d1xhLgp4Ud9KFPDcAAyjgLsGYDcKGDcA51HAfgMwigLWaoY/YTEEyMhtBdgMG56B7dLwVwyigQU8lJBrzEQjG/krnnYQCmTk9Gv8Z4fllWAJZ+mGYQfrWMbsT4EeLitI2q5BOvh8u+oad1lFvwZJB9/WW9et6uGkciatdQKmpQcP978GpDCPLdy0zJ8UEWEVe7jIr/Bj/lkdhQDFn+kDZFFDBt8rh0QAAAAASUVORK5CYII="></img>
              <p className="contact_data_text">+91 974 239 232</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
