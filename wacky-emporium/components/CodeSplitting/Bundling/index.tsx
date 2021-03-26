import React from "react";

const Bundling = () => (
  <div className='bundling'>
    <h3>Bundling...</h3>
    <p>
      Using a bundler was one of the pain points at the Enspiral Dev Academy
      when it came to web development, and honestly, choosing the right one,
      configuring it if need be is a good thing. We need bundlers; we can't
      always use Next.js or any other application that has bundlers built-in.
      Just make sure you're using the one that fits you!
    </p>
    <p>
      <strong>Why do we need to bundle at all?</strong> Web browsers accept
      vanilla JS, but not frameworks like React where it combines both. What a
      bundler does is gathers all of your code, dirty or not, and turns it into
      JS that the browser can read.
    </p>
  </div>
);

export default Bundling;
