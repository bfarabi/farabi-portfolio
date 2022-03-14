import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ohs2sth",
        "template_3lowov8",
        formRef.current,
        "user_Epb38JaZZU1VktQU9M3B4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="bg-light">
    <div className="container py-5 " id="contact">
    
      <div className="row ">
        <div className="col-md-6">
          <div className="title-box-2">
            <h5 className="title-left text-primary">Get In Touch</h5>
            <div className=" mb-4 hr-line" />
          </div>
          <div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              id="my-form"
              role="form"
            >
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      //   data-rule="minlen:4"
                      //   data-msg="Please enter at least 4 chars"
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                      required
                      type="email"
                      className="form-control"
                      name="user_email"
                      id="email"
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                    <div className="validate" />
                  </div>
                </div>
                {/* <div className="col-md-12 mb-3">
                  <div className="form-group">
                    <input
                    
                      type="text"
                      className="form-control"
                      name="user_subject"
                      id="subject"
                      placeholder="Subject"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div className="validate" />
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      required
                      className="form-control"
                      name="message"
                      rows={5}
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                      defaultValue={""}
                    />
                    <div className="validate" />
                  </div>
                </div>
                <div className="col-md-12 text-center mb-3">
                  <div id="sendMessage" className="sent-message">
                    {done && (
                      <h5 class="messageStyle text-success ">
                        {" "}
                        Your message has been sent. Thank you!
                      </h5>
                    )}
                  </div>
                </div>
                <div className="col-md-12 text-center">
                  <button type="submit" className="btn btn-info rounded p-3 ">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="title-box-2 pt-4 pt-md-0">
            <h5 className="title-left text-primary">Contact Me</h5>
            <div className=" mb-4 hr-line" />
          </div>
          <div className="more-info">
            <p className="lead text-justify">
              You can contact me through the information given below.Thanks in Advance.
            </p>
            <ul className="list-ico">
              {/*
                    <li><span class="ion-ios-telephone"></span> 01400-880017</li>
                  */}
              <div className="d-flex ">
                <a className="lead mb-0 text-decoration-none" target="_blank" href="tel:+880 1625-594691">
                <span
                  class="iconify text-danger me-2 "
                  data-icon="bxs:phone-incoming"
                  data-width="35"
                ></span>
                +880 1625-594691
                </a>
              </div>

              <div>

              <a className="d-flex  align-items-center lead mb-0 text-decoration-none" href="mailto:Billal.Farabi1@gmail.com">
              <span
                    class="iconify rounded me-2"
                    data-icon="noto-v1:e-mail"
                    data-width="50"
                  ></span>
                  Billal.Farabi1@gmail.com
              </a>
                
              </div>

              <div className="messenger-app">
              <li><h5>You also can contact with Whatsapp, Telegram & Messenger : </h5></li>
              <a href="https://api.whatsapp.com/send?phone=8801625594591" target="_blank">
              <img
                  className=""
                  src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                />
              </a>
                
                <a 
                className="mx-3"
                href="https://telegram.me/Billal_Farabi" target="_blank">
                <span 
                  class="iconify telegram"
                  data-width="35"
                  data-icon="logos:telegram"
                ></span>
                </a>

                <a 
                href="https://m.me/billal.farabi1" target="_blank">
                <img src="https://img.icons8.com/fluency/43/000000/facebook-messenger--v2.png"/>
                </a>
                
              </div>

            </ul>
          </div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
