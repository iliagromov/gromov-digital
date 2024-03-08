import React, { FC, useState } from "react";

import classNames from "classnames";
// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import { Button } from "../../ui/Button/Button";

import { FormFields } from "./FormFields";

import "./styles.sass";
/**
 * 
 * @returns andreyOurCEO1366: imageSharp(
        fluid: { originalName: { eq: "andreyOurCEO1366.png" } }
      ) {
        gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 100)
      }
 */
interface IMainForm {
  handleFrom: () => void;
}
const MainForm: FC<IMainForm> = ({ handleFrom }) => {
  //   const {
  //     mainSlogan
  //   } = useStaticQuery(graphql`
  //     query  {
  //       mainSlogan: file(relativePath: { eq: "Main-slogan.svg" }) {
  //           publicURL
  //           name
  //       }
  //     }`);
  const [stepProgress, setStepProgress] = useState(0);
  const [isComplited, setStepComplit] = useState(true);
  const [isActive, setStepActive] = useState(true);
  const [formStep1, setformStep1] = useState(true);
  const [formStep2, setformStep2] = useState(false);
  const [formStep3, setformStep3] = useState(false);

  setTimeout(() => {
    setStepProgress(50);
  }, 1000);

  return (
    <div className={"form"}>
      <ul className={"formStepsPoints"}>
        <li
          className={classNames("formStepPointLi", {
            formStepPointLiComplited: isComplited,
            formStepPointLiActive: isActive,
          })}
        >
          <div className="formStepPointContainer">
            <div className="formStepPoint"></div>
            <div className="formStepPointLineLayout">
              <div
                className="formStepPointLine"
                style={{ width: isComplited ? "100%" : stepProgress }}
              ></div>
            </div>
          </div>

          <span className="formStepPointText">
            Оставь
            <br />
            контакты
          </span>
        </li>
        <li
          className={classNames("formStepPointLi", {
            formStepPointLiComplited: false,
            formStepPointLiActive: isActive,
          })}
        >
          <div className="formStepPointContainer">
            <div className="formStepPoint"></div>
            <div className="formStepPointLineLayout">
              <div
                className="formStepPointLine"
                style={{ width: false ? "100%" : stepProgress }}
              ></div>
            </div>
          </div>
          <span className="formStepPointText">
            Получи <br />
            бонус
          </span>
        </li>
        <li className={"formStepPointLi formStepPointLi_last"}>
          <div className="formStepPoint"></div>
          <span className="formStepPointText">
            Заверши <br />
            регистрацию
          </span>
        </li>
      </ul>
      <div className={"formBody"}>
        {formStep1 && (
          <div className={"formStep formStep1"}>
            <h3 className="page-title page-title-h3">
              Создам авторский сайт, с&nbsp;правильным позиционированием
            </h3>
            <p className="page-text">
              Привлекай, вовлекай и продавай, не рассказывая.
            </p>
            <FormFields />
          </div>
        )}

        {formStep2 && (
          <div className={"formStep formStep2"}>
            <h3>Скачай бонус “100 вопросов по распоковке личности”</h3>
            img
          </div>
        )}

        {formStep3 && (
          <div className={"formStep formStep3"}>
            <h3>спасибо за заявку</h3>
            <p className="page-text">
              Скоро я лично с вами свяжусь и мы обсудим все детали.
            </p>
            <p className="page-text">
              Больше информации ты найдешь на сайте Gromov digital по ссылке
              ниже
            </p>
          </div>
        )}
        <div className={"formFooter"}>
          {/* <Button handleClick={handleFrom}>Далее</Button> */}
        </div>
      </div>
    </div>
  );
};

export { MainForm };
