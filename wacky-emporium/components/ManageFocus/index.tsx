import React, { RefObject, useRef } from "react";

interface Props {
  textInput?: RefObject<HTMLInputElement>;
  onChange?: any;
}

const ManageFocus = ({ textInput, onChange }: Props) => {
  return (
    <>
      <h3>As Dwayne the Rock Johnson says... FOCUS!</h3>
      <input type="text" ref={textInput} onChange={onChange} />
      <p>
        Although I haven't really implemented in properly, focusing a certain
        element on the page alerts the user where they are and what they've
        clicked on. May seem obvious but it really does help and saves any
        unnecessary wondering and keeps the user alert and bothered with your
        website.
      </p>
    </>
  );
};

export default ManageFocus;
