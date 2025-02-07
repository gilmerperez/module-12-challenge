import React from "react";

const Contact = () => {
  return (
    <form>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom" />
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      />
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-1">Contact Me</span>

      <div class="mb-3">
        <label for="name" class="form-label">
          Name:
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
          Email Address:
        </label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter your email"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
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
  );
};

export default Contact;
