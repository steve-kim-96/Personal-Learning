import AccessibilityHeader from "../../components/AccessibilityHeader";
import FragmentingExplanation from "../../components/FragmentingExplanation";
import AccessibleForms from "../../components/AccessibleForms";
import SkipNavigation from "../../components/SkipNavigation";
import Landmarks from "../../components/Landmarks"
import ManageFocus from "../../components/ManageFocus";
import React, { createRef } from "react";

const Accessibility = () => {
  const inputElement = createRef() as React.MutableRefObject<HTMLInputElement>

  function changeHandler (e: any) {
    e.preventDefault()
    inputElement.current.focus()
  }

  return (
  <div className="container">
    <a href="#skip-navigation">Skip to the description</a>
    <div className="title-header">
      <AccessibilityHeader />
    </div>
    <div className="fragmenting">
      <FragmentingExplanation />
    </div>
    <div className="error-form">
      <AccessibleForms />
    </div>
    <div id="skip-navigation">
      <SkipNavigation />
    </div>
    <div className="landmarks">
      <Landmarks />
    </div>
    <div className="manage-focus">
      <ManageFocus textInput={inputElement} onChange={changeHandler}/>
    </div>
  </div>
  )
};

export default Accessibility;
