import React from "react";
import { Helmet } from "react-helmet";

const HelmetHead = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>My Title</title>

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default HelmetHead;
