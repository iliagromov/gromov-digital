import React, { FC } from "react";

// import { ReactSVG } from "react-svg";
// import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
// import starUrl, { ReactComponent as Star } from "../../../assets/images/logo.svg";
// return <ReactSVG src={logo.publicURL} />;
const Logo: FC = () => {
  // const { logo } = useStaticQuery(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo.png" }) {
  //       publicURL
  //       name
  //     }
  //   }
  // `);

  return (
    <StaticImage
      className="page-img"
      src={"../../../assets/images/logo.png"}
      alt="Logo"
    />
  );
};

export { Logo };
