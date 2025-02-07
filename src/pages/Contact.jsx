import React from "react";
import { useState } from "react";

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === name) {
      setName(inputValue);
    } else if (inputType === email) {
      setEmail(inputValue);
    } else if (inputType === text) {
      setText(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Please fill out name field');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!text) {
      setErrorMessage('Please fill out text field');
      return;
    }

    alert("Thank you for filling out the form! I'll be in touch soon.")

    setName('');
    setEmail('');
    setText('');
  };
}

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-1">
        Contact Me
        <br />
        <i class="fa-solid fa-envelope mt-3"></i>
      </h1>

      <form>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">
            Email Address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
          <textarea
            class="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
