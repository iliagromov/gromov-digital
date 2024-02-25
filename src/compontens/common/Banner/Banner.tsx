import React, { FC, useState } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import "./Banner.sass";
import { Button } from "../../ui/Button/Button";
import { StaticImage } from "gatsby-plugin-image";
import classNames from "classnames";
import { Timer } from "../Timer/Timer";

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
  const [isFormVisible, setFormVisible] = useState(false);
  const openForm = () => {
    setFormVisible(!isFormVisible);
  };
  const nextStep = () => {};

  return (
    <section className="banner">
      <div className="wrapper">
        <div className="banner-inner">
          <div className="banner__text">
            {!isFormVisible && (
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
            )}
            {isFormVisible && (
              <div className={classNames("banner__form")}>
                <div className="form">
                  <div className="form__steps">
                    <ul className="form-steps">
                      <li className="form-step form-step-1">Оставь контакты</li>
                      <li className="form-step form-step-2">Получи бонус</li>
                      <li className="form-step form-step-3">
                        Заверши регистрацию
                      </li>
                    </ul>
                  </div>
                  <div className="form__body">
                    <div className="form-step-1">
                      <h3>
                        Создам авторский сайт,  с правильным позиционированием
                      </h3>
                      <p className="page-text">
                        Привлекай, вовлекай и продавай, не рассказывая
                      </p>
                      <div className="form-fields">input</div>
                    </div>
                    <div className="form-step-2">
                      <h3>
                        Скачай бонус “100 вопросов по распоковке личности”
                      </h3>
                      img
                    </div>
                    <div className="form-step-3">
                      <h3>спасибо за заявку</h3>
                      <p className="page-text">
                        Скоро я лично с вами свяжусь и мы обсудим все детали.
                      </p>
                      <p className="page-text">
                        Больше информации ты найдешь на сайте Gromov digital по
                        ссылке ниже
                      </p>
                    </div>
                  </div>
                  <div className="form__footer">
                    <Button handleClick={openForm}>Далее</Button>
                    <Timer />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="banner__img">
            <StaticImage
              src={"../../../assets/images/bannerImg@1.png"}
              alt="Илья Громов"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
