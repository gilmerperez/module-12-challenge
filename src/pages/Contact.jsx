import React from "react";

const Contact = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Contact Me</h1>

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
