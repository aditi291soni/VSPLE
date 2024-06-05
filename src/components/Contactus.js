import React, { useState } from "react";
import "./contactus.css";
import Card from "react-bootstrap/Card";
import "../common/thankyoumodal/thankyoumodal.css";
import Modal from "../common/thankyoumodal/thankyoumodal";
import thanks from "../assest/main-icons/icons/Thankyou.png";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";
// import location from "../assest/main-icons/Group 611.png";
// import contact from "../assest/main-icons/Group 617.png";
import {
  main,
  account,
  email,
  telephone,
  message,
  contactMail,
  btnsvg,
  loader,
} from "../common/images";

// import premiumIcon from "../assest/icons/premium.png";

const ContactusComponent = () => {
  const [loading, setLoading] = useState(false);
  const [commentor, setCommentor] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  // const closeModal = () => setModalOpen(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Dummy",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleKeyDown = (event) => {
    // Disallow the character 'e' and other non-numeric characters
    if (event.key === 'e' || event.key === 'E' || event.key === '+' || event.key === '-' || event.key === '.') {
      event.preventDefault();
    }
  };
  const [thankyouToggle, setthankyouToggle] = useState(false);

  const handleSubmit = async (e) => {
    console.log(e);
    setLoading(true);
    e.preventDefault();
    console.log(state);

    const mail = await emailjs.send(
      "service_bq1f7qi",
      "template_ycr0e7u",
      state,
      "35JIdQtUBW4uBv-hX"
    );
    setthankyouToggle(true);
    setLoading(false);
    console.log(mail);
    setState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Dummy",
  })
 
    // if (1) {
    //   try {
    // const response = await fetch("http://localhost:3000/send_email.php", {
    //   method: "POST",
    //   body: JSON.stringify(state),
    // });
    // console.log(response)
    //     if (response.ok) {
    //       setShowModal(true);
    //       const modalId = document.getElementById("modal");
    //       modalId.style.display = "block";
    //       setLoading(true);
    //       setTimeout(() => {
    //         setLoading(false);
    //       }, 2500);
    //     } else {
    //       console.error("Form submission failed");
    //     }
    //   } catch (error) {
    //     console.error("Error submitting form:", error);
    //   }
    // } else {
    //   console.error("Form validation failed");
    // }
  };

  return (
    <>
      {thankyouToggle && (
        <div
          style={{ zIndex: 10 }}
          onClick={() => setthankyouToggle(false)}
          className="bg-black bg-opacity-75 w-100 h-100 position-fixed translate-middle top-50 start-50"
        ></div>
      )}
      {thankyouToggle && (
        <Card className="position-fixed translate-middle opacity-100 top-50 start-50 thankyou bg-white">
          <Card.Body>
            <div className="center-x">
              <Card.Img variant="top" style={{ width: "5rem" }} src={thanks} />
              <Card.Title className="mx-auto ">
                <h2 className="custom-title"> Thankyou!</h2>
              </Card.Title>
            </div>
            <div class="text-center mx-auto">
              <Card.Text>
                Thank you for reaching out to us at Vsple. We appreciate your
                interest and value your inquiry.
              </Card.Text>
              <Card.Text>
                Our team is actively reviewing your message and will respond to
                your inquiry as soon as possible. We strive to address all
                inquiries as soon as possible.
              </Card.Text>
              <Card.Text>
                In the meantime, we invite you to explore our website for more
                information about our services and our company values. If your
                matter requires urgent attention, please feel free to contact us
                directly at
                <a
                  className="black"
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9009797197
                </a>
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      )}
      <div className="contact-page container web">
        <div className="contact-page text-start">
          <img src={contactMail} width={"2%"} alt="" />
          {/* <div className="GeeksforGeeks">
            <button onClick={notify}>Click Me!</button>
          </div> */}
          <h5 className="head m-0">You Can Trust Us</h5>
          <span className="title m-0">Get In Touch</span>
          <span className="des">
            At VSPLE, we're eager to connect with you. Whether you have
            inquiries, project ideas, <br /> or simply want to say hello, our
            dedicated team is ready to listen and assist.
          </span>
        </div>
        <div className="main">
          <div className="side-content-box">
            <img src={main} width={"85%"} alt="" />
          </div>
          <div className="form-content-box">
            <div className="contacts">
              <div className="h-contact-form w-100">
                <h5>Let's Discuss</h5>
                <p>
                  Reach out to VSPLE - Where Your Needs Meet Our Expertise.
                  Please fill out the contact form below and one of our
                  representatives shall get in touch with you within the next 24
                  hours.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="Name">
                    <img width={"6%"} src={account} alt="" />
                    <input
                      type="text"
                      name="name"
                      value={state.name}
                      onChange={handleInputChange}
                      placeholder="* Name"
                      autocomplete="off"
                      required
                    />
                    {/* {errors.name && <p className="error">{errors.name}</p>} */}
                  </div>

                  <div className="email">
                    <img width={"6%"} src={email} alt="" />
                    <input
               
                      swd
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                      placeholder="* Email"
                      autocomplete="off"
                      required
                    />
                    {/* {errors.email && <p className="error">{errors.email}</p>} */}
                  </div>

                  <div className="mobileSec">
                    <img width={"5%"} src={telephone} alt="" />
                    <input
                      type="number"
                      onKeyDown={handleKeyDown}
                      name="phone"
                      value={state.phone}
                      autocomplete="off"
                      inputMode="numeric" 
                  
                      onChange={handleInputChange}
                      placeholder="* Mobile Numbers"
                      required
                    />
                    {/* {errors.phone && (
                      <p className="error">{errors.phone}</p>
                    )} */}
                  </div>

                  <div className="message">
                    <img width={"6%"} src={message} alt="" />
                    <textarea
                      type="text"
                      rows="4"
                      cols="50"
                      name="message"
                      value={state.message}
                      autocomplete="off"
                      onChange={handleInputChange}
                      placeholder="* Message"
                      required
                    />
                    {/* {errors.message && (
                      <p className="error">{errors.message}</p>
                    )} */}
                  </div>
                  <div className="button text-right">
                    <button type="submit">{loading? "Loading" : "Send"}</button>
                  </div>
                </form>
                {showModal && (
                  <Modal id="modal" isOpen={showModal}>
                    <div className="text-center">
                      <h5>Thankyou!</h5>
                      <p>
                        Thank you for reaching out to us at Vsple. We appreciate
                        your interest and value your inquiry.
                      </p>
                      <p>
                        Our team is actively reviewing your message and will
                        respond to your inquiry as soon as possible. We strive
                        to address all inquiries as soon as possible.
                      </p>
                      <p>
                        In the meantime, we invite you to explore our website
                        for more information about our services and our company
                        values. If your matter requires urgent attention, please
                        feel free to contact us directly at +91 9009797197
                      </p>
                      <span onClick={closeModal}>Close</span>
                    </div>
                  </Modal>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="map container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0379644626737!2d75.89611687545778!3d22.763972325928844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d45471322b1%3A0xef446c3272c938cd!2sVsple%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691647108311!5m2!1sen!2sin"
            style={{ border: 0, borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      {/* <img className="loader" src={loader} alt="" /> */}
      {loading ? <img className="loader" src={loader} alt="" /> : <div></div>}
      <div className="contact-page container mobile">
        <div className="contact-page text-start">
          <img src={contactMail} width={"7%"} alt="" />
          <span className="head m-0">Contact Us</span>
          <span className="title">Get In Touch</span>
          <p className="des">
            At VSPLE, we're eager to connect with you. Whether you have
            inquiries, project ideas, <br /> or simply want to say hello, our
            dedicated team is ready to listen and assist.
          </p>
        </div>
        <div className="mai w-100">
          <div className="form-content-box">
            <div className="contacts">
              <div className="h-contact-form ">
                {/* <h5>Contact Here</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                </p> */}
                <form onSubmit={handleSubmit}>
                  <div className="Name">
                    <img width={"5%"} src={account} alt="" />
                    <input
                      type="text"
                      name="name"
                      value={state.name}
                      onChange={handleInputChange}
                      placeholder="* Name"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div className="email">
                    <img width={"5%"} src={email} alt="" />
                    {/* <label>Password</label> */}
                    <input
                      type="email"
                      name="email"
                      value={state.email}
                      onChange={handleInputChange}
                      placeholder="* Email"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div className="mobile">
                    {/* <label>Password</label> */}
                    <img width={"4%"} src={telephone} alt="" />
                    <input
                      type="number"
                      name="phone"
                      value={state.phone}
                      onChange={handleInputChange}
                      placeholder="* Mobile Number"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div className="message">
                    {/* <label>Password</label> */}
                    <img width={"5%"} src={message} alt="" />
                    <textarea
                      type="text"
                      rows="4"
                      cols="50"
                      name="message"
                      value={state.message}
                      onChange={handleInputChange}
                      placeholder="* Message"
                      autocomplete="off"
                      required
                    />
                  </div>
                  <div className="button text-center">
                    <button type="submit">
                      Send
                      <img src={btnsvg} className="ms-1" width={"32%"} alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="side-content-box text-center mt-4">
            <div className="row">
              <div className="col-5">
                <div>
                  <span>Contact Us</span>
                  <p>+91 9009797197</p>
                </div>
              </div>

              <div className="col-2 mt-3">
                <hr className="contact-seperator" />
              </div>

              <div className="col-5">
                <div>
                  <span>Write Us</span>
                  <p>info@vsple.com</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <span>Reach Us</span>
              <p>702 Skye corporate park, Indore, Madhya Pradesh 452010</p>
            </div>
          </div>
        </div>
        <div className="map container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0379644626737!2d75.89611687545778!3d22.763972325928844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631d45471322b1%3A0xef446c3272c938cd!2sVsple%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1691647108311!5m2!1sen!2sin"
            style={{ border: 0, borderRadius: "20px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </div>
      </div>
      <div></div>
      {/* <div className="side-box">
      <div className="tx-cox d-flex">
        <img src={contact} width={"18%"} alt="" />
        <div className="ms-4">
          <span className="">Contact Us</span>
          <br />
          <span>+91 9009797197</span>
        </div>
      </div>
      <hr />
    </div>
    <div className="side-box">
      <div className="tx-cox d-flex">
        <img src={contact} width={"18%"} alt="" />
        <div className="ms-4">
          <span className="">Write Us</span>
          <br />
          <span>info@vsple.com</span>
        </div>
      </div>
      <hr />
    </div>
    <div className="side-box">
      <div className="tx-cox d-flex">
        <img src={contact} width={"18%"} alt="" />
        <div className="ms-4">
          <span className="">Reach Us</span>
          <br />
          <span>702 Skye corporate park, Indore, Madhya Pradesh 452010</span>
        </div>
      </div>
      <hr />
    </div> */}
    </>
  );
};

export default ContactusComponent;
