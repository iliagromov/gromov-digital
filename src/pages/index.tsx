import * as React from "react";
import type { PageProps } from "gatsby";

import Layout from "../layouts/Default";
import { PageMainContainer } from "../compontens/containers/PageMain/PageMain";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Gromov Main" classNamesBody={"page-main "}>
      <PageMainContainer />
    </Layout>
  );
};

export default IndexPage;
