import React, { RefObject, useRef } from "react";

interface Props {
  textInput?: RefObject<HTMLInputElement>;
  onChange?: any;
}

const ManageFocus = ({ textInput, onChange }: Props) => {
  return (
    <div className="manage-focus">
      <h3>As Dwayne the Rock Johnson says... FOCUS!</h3>
      <input type="text" ref={textInput} onChange={onChange} />
      <p>
        Although I haven't really implemented in properly, focusing a certain
        element on the page alerts the user where they are and what they've
        clicked on. May seem obvious but it really does help and saves any
        unnecessary wondering and keeps the user alert and bothered with your
        website.
      </p>
      <p>
        <strong>
          See how the box lights up when you're clicked onto it, which indicates
          that you're about to type into that box? Focus baby~
        </strong>
      </p>
    </div>
  );
};

export default ManageFocus;
