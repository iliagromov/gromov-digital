import React, { FC, useState } from "react";

// import { ReactSVG } from 'react-svg';
// import { useStaticQuery, graphql, Link, navigate } from "gatsby";

import { Button } from "../../ui/Button/Button";
import { Timer } from "../Timer/Timer";

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
  const [] = useState();

  return (
    <div className={"form"}>
      <div className={"formSteps"}>
        <ul className={"formStepsPoints"}>
          <li className={"formStepPointLi isActive"}>
            <span className="formStepPoint"></span>
            <div className="formStepPointLine"></div>
          </li>
          <li className={"formStepPointLi"}>
            <span className="formStepPoint"></span>
            <div className="formStepPointLine"></div>
          </li>
          <li className={"formStepPointLi"}>
            <span className="formStepPoint"></span>
          </li>
        </ul>
      </div>
      <div className={"formBody"}>
        <div className={"formStep formStep1"}>
          <h3>Заполни данные</h3>
          <p className="page-text">и получи 100 вопросов по личному бренду</p>
          <div className="form-fields">input</div>
        </div>
        <div className={"formStep formStep2"}>
          <h3>Скачай бонус “100 вопросов по распоковке личности”</h3>
          img
        </div>
        <div className={"formStep formStep3"}>
          <h3>спасибо за заявку</h3>
          <p className="page-text">
            Скоро я лично с вами свяжусь и мы обсудим все детали.
          </p>
          <p className="page-text">
            Больше информации ты найдешь на сайте Gromov digital по ссылке ниже
          </p>
        </div>
      </div>
      <div className={"formFooter"}>
        <Button handleClick={handleFrom}>Далее</Button>
        <Timer />
      </div>
    </div>
  );
};

export { MainForm };
