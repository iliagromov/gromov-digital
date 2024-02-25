import React, { FC } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Timer.sass";

const Timer: FC = () => {
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
    <section className="timer">
      <div className="wrapper">
        <div className="timer-inner">01:29</div>
      </div>
    </section>
  );
};

export { Timer };
