import React, { useState } from "react";

const MousePointerEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function clickHandler() {
    setIsOpen(!isOpen);
  }

  function onBlurHandler() {
    setTimeout(() => {
      setIsOpen(false);
    });
  }

  function onFocusHandler() {
    if (!isOpen) setIsOpen(true)
  }
  return (
    <div
      className="mouse-pointer-event"
      onBlur={onBlurHandler}
      onFocus={onFocusHandler}
    >
      <button
        onClick={clickHandler}
        aria-haspopup="tree"
        aria-expanded={isOpen}
      >
        Select an option
      </button>
      <button>Load the option</button>
      <button>Remove the option</button>
      {isOpen && (
        <ul>
          <li>option 1</li>
          <li>option 2</li>
          <li>option 3</li>
        </ul>
      )}
      <h3>Mouse and pointer events</h3>
      <p>Still a work in progress <span>😅🧰</span></p>
      <p>For some reason the docs only gives me part of the code to interpret so I'm having to kind of work it out</p>
    </div>
  );
};

export default MousePointerEvent;
