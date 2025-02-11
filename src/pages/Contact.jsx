import { useState } from "react";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "text") {
      setText(value);
    }

    setErrorMessage("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage("Please fill out the Name field");
      return;
    } else if (!email) {
      setErrorMessage("Please fill out the Email Address field");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    } else if (!text) {
      setErrorMessage("Please fill out the Message field");
      return;
    }

    alert("Thank you for filling out the form! I'll be in touch soon.");

    setName("");
    setEmail("");
    setText("");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-1">
        Contact Me
        <br />
        <i className="fa-solid fa-envelope mt-3"></i>
      </h1>

      <form className="form" onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            value={text}
            name="text"
            onChange={handleInputChange}
            className="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
