import AccessibilityHeader from "../../components/Accessibility/AccessibilityHeader";
import FragmentingExplanation from "../../components/Accessibility/FragmentingExplanation";
import AccessibleForms from "../../components/Accessibility/AccessibleForms";
import SkipNavigation from "../../components/Accessibility/SkipNavigation";
import Landmarks from "../../components/Accessibility/Landmarks"
import ManageFocus from "../../components/Accessibility/ManageFocus";
import MousePointerEvent from "../../components/Accessibility/MousePointerEvent";
import React, { createRef } from "react";

const Accessibility = () => {
  const inputElement = createRef() as React.MutableRefObject<HTMLInputElement>

  function changeHandler (e: any) {
    e.preventDefault()
    inputElement.current.focus()
  }

  function mousePointerHandler () {

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
      <MousePointerEvent clickHandler={mousePointerHandler}/>
  </div>
  )
};

export default Accessibility;
