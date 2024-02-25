import React, { FC } from "react";

import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

const Logo: FC = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
        name
      }
    }
  `);
  return <ReactSVG src={logo.publicURL} />;
};

export { Logo };
