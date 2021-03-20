import React, { RefObject, useRef } from "react";

interface Props {
  textInput?: RefObject<HTMLInputElement>
}

const ManageFocus = ({textInput}: Props) => {

  return (
    <>
      <input 
      type="text"
      ref={textInput}
      />
    </>
  );
};

export default ManageFocus;