import React from "react";

function Contact() {
  return (
    <>
      <div>
        <h2>Contact Information</h2>
        <div>
          <strong>Email:</strong> example@example.com
        </div>
        <div>
          <strong>Phone:</strong> +1234567890
        </div>
        <div>
          <strong>Address:</strong> 123 Street, City, Country
        </div>
      </div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;
