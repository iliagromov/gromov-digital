import React, { FC } from "react";
import cn from "classnames";
import SEO from "./seo";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
// import { DebugGridComponent } from "../../components/common/DebugGrid/DebugGrid";

// import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Helmet from "react-helmet";

// import { YMInitializer } from "react-yandex-metrika";

// style={{
//       backgroundColor: 'var(--theme-bg)',
//       color: 'var(--theme-color)',
//       transition: 'color 0.2s ease-out, background 0.2s ease-out',
//     }}
// <DebugGridComponent isVisible={true}/> ?
{
  /* <ThemeToggler>
        {({ theme, toggleTheme }) => {
          console.log("🚀 ~ file: index.tsx:32 ~ Layout ~ theme:", theme)
          
          setTimeout(()=>{toggleTheme('dark')})
        }}
      </ThemeToggler> */
}

type LayoutProps = {
  children: any;
  title: string;
  pageType?: HeaderPageType;
  classNames?: string;
  classNamesBody?: string;
};

const Layout: FC<LayoutProps> = ({
  children,
  title,
  pageType,
  classNames,
  classNamesBody,
}) => {
  return (
    <>
      <SEO title={title} />
      {/* <YMInitializer
        accounts={[84473377]}
        options={{ webvisor: true }}
        version="2"
      /> */}
      {/* <Script
        id="gtm-data-layer"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = [{
    'event': 'send_form',
  }];`,
        }}
      ></Script> */}
      <div className={cn("page-body", [classNamesBody])}>
        {/* <Helmet>
          <script src="https://qtickets.ru/js/openapi" />
        </Helmet> */}

        <Header pageType={pageType} />
        <main className={cn("page", [classNames])}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
