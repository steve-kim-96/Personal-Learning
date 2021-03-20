import AccessibilityHeader from "../../components/AccessibilityHeader";
import FragmentingExplanation from "../../components/FragmentingExplanation";
import AccessibleForms from "../../components/AccessibleForms";
import React from "react";

const Accessibility = () => (
  <div className='container'>
    <div className="title-header">
      <AccessibilityHeader />
    </div>
    <div className="fragmenting">
      <FragmentingExplanation/>
    </div>
    <div className="error-form">
      <AccessibleForms />
    </div>
  </div>
);

export default Accessibility;
