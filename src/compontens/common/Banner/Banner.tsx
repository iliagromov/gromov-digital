import React, { FC, useState } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Banner.sass";
import { Button } from "../../ui/Button/Button";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { Timer } from "../Timer/Timer";
import { MainForm } from "../MainForm/MainForm";

const Banner: FC = () => {
  //   const {
  //     mainSlogan
  //   } = useStaticQuery(graphql`
  //     query  {
  //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
  //           publicURL
  //           name
  //       }
  //     }`);
  const [isFormVisible, setFormVisible] = useState(true);
  const openForm = () => {
    setFormVisible(!isFormVisible);
  };
  const nextStep = () => {};

  return (
    <section className="banner">
      <div className="wrapper">
        <div className="banner-inner">
          {!isFormVisible && (
            <div className="banner__text">
              <div className={classNames("banner__text-content")}>
                <h1 className="page-title-h1">
                  Сайты для <div className="page-title_markup">инфобизнеса</div>
                </h1>
                <p className="page-text">
                  Как заинтересовать клиента{" "}
                  <span className="page_it-green">за 3 секунды</span> и повысить
                  ценность продукта{" "}
                  <span className="page_it-green">в 1.5 раза</span>
                </p>
                <Button handleClick={openForm}>Узнай как</Button>
              </div>
            </div>
          )}
          {isFormVisible && (
            <div className={classNames("banner__form")}>
              <MainForm handleFrom={openForm} />
            </div>
          )}
          {/* <div className="banner__img">
            <StaticImage
              src={"../../../assets/images/bannerImg@1.png"}
              alt="Илья Громов"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export { Banner };
