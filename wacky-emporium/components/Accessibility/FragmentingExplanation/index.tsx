import React from "react";

const FragmentingExplanation = () => (
  <div className="fragmenting">
    <h3>Fragmenting and a bit of code splitting</h3>
    <p>
      So, instead of returning divs inside of divs inside of divs, and so on,
      fragmenting is just a clean way to lay things out. Obviously we need divs,
      but I've always asked myself from all those different group projects at
      EDA... Why so many divs we have???
    </p>
    <h5>
      Little side note... that high contrast theme though <span role="img" aria-label="smiley-heart">😍</span>
    </h5>
    <img src="/images/fragmenting.PNG" alt="fragmented code"/>
  </div>
);

export default FragmentingExplanation;
