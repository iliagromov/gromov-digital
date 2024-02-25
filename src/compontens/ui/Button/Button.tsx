import React, { FC } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Button.sass";

type ButtonProps = {
  children?: string;
  handleClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, handleClick }) => {
  //   const {
  //     mainSlogan
  //   } = useStaticQuery(graphql`
  //     query  {
  //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
  //           publicURL
  //           name
  //       }
  //     }`);
  return (
    <button className="btn" onClick={handleClick}>
      {" "}
      {children}
    </button>
  );
};

export { Button };
