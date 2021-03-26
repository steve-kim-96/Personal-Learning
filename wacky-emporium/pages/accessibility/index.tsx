import AccessibilityHeader from "../../components/Accessibility/AccessibilityHeader";
import FragmentingExplanation from "../../components/Accessibility/FragmentingExplanation";
import AccessibleForms from "../../components/Accessibility/AccessibleForms";
import SkipNavigation from "../../components/Accessibility/SkipNavigation";
import Landmarks from "../../components/Accessibility/Landmarks";
import ManageFocus from "../../components/Accessibility/ManageFocus";
import MousePointerEvent from "../../components/Accessibility/MousePointerEvent";
import React, { useRef } from "react";

const Accessibility = () => {
  const inputElement = useRef<HTMLInputElement | null>(null);

  function changeHandler() {
    if (inputElement && inputElement.current) inputElement.current.focus();
  }

  return (
    <div className="container">
      <a href="#skip-navigation">Skip to the description</a>
      <AccessibilityHeader />
      <FragmentingExplanation />
      <AccessibleForms />
      <SkipNavigation />
      <Landmarks />
      <ManageFocus textInput={inputElement} onChange={changeHandler} />
      <MousePointerEvent />
    </div>
  );
};

export default Accessibility;
