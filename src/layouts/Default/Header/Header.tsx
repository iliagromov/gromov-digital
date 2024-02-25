import React, { FC } from "react";
import { Logo } from "../../../compontens/common/Logo";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

const Header: FC = () => {
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
    <header className="header ">
      <div className="wrapper">
        <div className="page-inner">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export { Header };
