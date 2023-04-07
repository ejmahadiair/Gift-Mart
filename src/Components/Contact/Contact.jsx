import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useLocation } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showMessage, setShoWMessage] = useState(false);
  const [errMessage, setErrMessage] = useState(false);
  const form = useRef();
  const {pathname} = useLocation();
  console.log("pth: ",pathname)
  const sendEmail = (e) => {
    console.log(name, number, email, message);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ihiuz7n",
        "template_rf639rm",
        form.current,
        "oCyubclz2c46gnCqs"
      )
      .then((res) => {
        setName("");
        setNumber("");
        setEmail("");
        setMessage("");
        setShoWMessage(true);
      })
      .catch((err) => {
        setErrMessage(true);
      });
  };

  useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShoWMessage(false);
      }, 2000);
    } else if (errMessage) {
      setTimeout(() => {
        setErrMessage(false);
      }, 2000);
    }
  }, [showMessage, errMessage]);
  
  return (
    <>
      <div className="contact-container w-full min-h-[100vh] my-5">
        <h1 className="text-center my-10 text-[40px]">{pathname.includes("Book") ? "Booking Form": "Contact Us"}</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-[80%] h-full flex gap-10 max-md:flex-col justify-center items-center mx-auto"
        >
          <div className="left w-[49%] max-md:w-[100%]">
            <input
              type="text"
              name="name"
              value={name}
              className="w-full p-4 outline-none my-2 rounded-lg"
              style={{ border: "1px solid gray" }}
              placeholder="Your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              name="number"
              value={number}
              className="w-full p-4 outline-none my-2 rounded-lg"
              style={{ border: "1px solid gray" }}
              placeholder="Your Phone Number"
              required
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="w-full p-4 outline-none my-2 rounded-lg"
              style={{ border: "1px solid gray" }}
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="w-full p-4 outline-none my-2 rounded-lg"
              style={{ border: "1px solid gray" }}
              placeholder="Your Comment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {showMessage && (
              <p className="text-[green]">Message successfully delivered!</p>
            )}
            {errMessage && (
              <p className="text-[red]">
                Check Your Internet Connection or fill up form correctly{" "}
              </p>
            )}
            <button type="submit" className="ej-btn-round">
              Send
            </button>
          </div>
          <div className="right w-[49%] max-md:w-[100%] h-full rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1705.2577166893416!2d90.33346247944307!3d23.75283424160464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1678182098946!5m2!1sen!2sbd"
              width={"100%"}
              height={540}
              className="rounded-lg"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
