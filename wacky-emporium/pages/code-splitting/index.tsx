import CodeSplit from '../../components/CodeSplitting/CodeSplit'
import Bundling from "../../components/CodeSplitting/Bundling";
import React from "react";

const CodeSplitting = () => (
  <div className="container">
    <Bundling />
    <CodeSplit />
  </div>
);

export default CodeSplitting;
