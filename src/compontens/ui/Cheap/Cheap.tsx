import React, { FC } from "react";

import { ReactSVG } from "react-svg";
import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Cheap.sass";

type CheapProps = {
  children?: string;
  isIndicator?: boolean;
};

const Cheap: FC<CheapProps> = ({ children, isIndicator }) => {
  const { indicator } = useStaticQuery(graphql`
    query {
      indicator: file(relativePath: { eq: "indicator.svg" }) {
        publicURL
        name
      }
    }
  `);
  return (
    <div className="cheap">
      {isIndicator && (
        <ReactSVG
          src={indicator.publicURL}
          className="indicator"
          beforeInjection={(svg) => {
            svg.classList.add("page-svg");
          }}
          wrapper="span"
        />
      )}
      {children}
    </div>
  );
};

export { Cheap };
