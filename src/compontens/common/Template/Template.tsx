import React, { FC } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Template.sass";
/**
 * 
 * @returns andreyOurCEO1366: imageSharp(
        fluid: { originalName: { eq: "andreyOurCEO1366.png" } }
      ) {
        gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 100)
      }
 */
const TemplateComponent: FC = () => {
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
    <section className="template">
      <div className="wrapper">
        <div className="template-inner"></div>
      </div>
    </section>
  );
};

export { TemplateComponent };
