import React from "react";

import ReactGA from "react-ga";

export const Home = () => {
  const handlerClick = () => {
    ReactGA.event({
      category: "Button",
      action: "Click the button",
    });

    alert("Send the information to google analytics that I thouched the click");
  };

  return (
    <div>
      <button onClick={handlerClick}>Click</button>
      Page Home
    </div>
  );
};
