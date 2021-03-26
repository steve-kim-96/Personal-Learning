import React, { useState, useRef } from "react";

const AccessibleForms = () => (
  <div className="error-form">
    <form>
      <label htmlFor="namedInput">Name:</label>
      <input id="namedInput" type="text" name="name" required />
      <button>Submit</button>
    </form>
    <p>
      See how this form highlights red if the box is empty? And also, if you
      hover, it tells the user they need to fill out the field. You need to make
      errors explicit so that users understand what's going on and what they
      need to do.
    </p>
  </div>
);

export default AccessibleForms;
