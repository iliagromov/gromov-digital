import { GatsbyBrowser, GatsbySSR } from "gatsby";
import React from "react";

// eslint-disable-next-line react/display-name,react/prop-types
export const WrapWithProvidert:
  | GatsbyBrowser["wrapPageElement"]
  | GatsbySSR["wrapPageElement"] = ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts

  return (
    <div className="provider">
      <h1>Hello World</h1>
      {element}
    </div>
  );
};
