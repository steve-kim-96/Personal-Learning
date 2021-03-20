import AccessibilityHeader from "../../components/AccessibilityHeader";
import FragmentingExplanation from "../../components/FragmentingExplanation";
import AccessibleForms from "../../components/AccessibleForms";
import SkipNavigation from "../../components/SkipNavigation";
import Landmarks from "../../components/Landmarks"
import ManageFocus from "../../components/ManageFocus";
import React, { useRef } from "react";

const Accessibility = () => {
  const inputElement = useRef()

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
      <ManageFocus textInput={inputElement}/>
    </div>
  </div>
  )
};

export default Accessibility;
