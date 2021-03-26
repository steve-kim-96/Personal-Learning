import React from "react";

const CodeSplitting = () => (
  <div className="code-splitting">
    <h3>Code-splitting entails something like this:</h3>
    <img src="/images/code-splitting.PNG" alt="code splitting image" />
    <p>
      Luckily for me, Next.js automatically does it for me, but when you use
      syntax like this, the bundler automatically recognizes it and splits the
      code into multiple bundlers for you! Although... I'm not using this syntax
      at the moment...
    </p>
  </div>
);

export default CodeSplitting;
