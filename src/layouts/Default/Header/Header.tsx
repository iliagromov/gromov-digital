import React, { FC } from "react";
import { Logo } from "../../../compontens/common/Logo";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Header.sass";
import { Button } from "../../../compontens/ui/Button/Button";
import { Cheap } from "../../../compontens/ui/Cheap/Cheap";

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
    <header className="header">
      <div className="wrapper">
        <div className="page-inner header-inner">
          <div className="header__logo">
            <Logo />
          </div>

          <div className="header__action">
            <Cheap isIndicator>Готов к 2 новым проектам</Cheap>
            <Button>Написать</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
