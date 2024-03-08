import React, { FC } from "react";
import { object, number, string, ObjectSchema, boolean } from "yup";
import { useFormik } from "formik";

import { Input } from "../../ui/Input/Input";

import { Link } from "gatsby";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import { Button } from "../../ui/Button/Button";

import "./FormFields.sass";
import { Timer } from "../Timer/Timer";

interface Person {
  name: string;
  phone: string;
  comment?: string;
  checkbox: boolean;
}

// will raise a compile-time type error if the schema does not produce a valid Person
const validationSchema: ObjectSchema<Person> = object({
  name: string().defined(),
  phone: string().defined(),
  comment: string().defined(),
  checkbox: boolean().required(),
});

const FormFields: FC = () => {
  const initialValues: Person = {
    name: "",
    phone: "",
    comment: "",
    checkbox: true,
  };

  const onSubmit = async (values: Person) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log(values);
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    formik;
  const onCheckoutButtonClick = () => {
    formik.submitForm();
  };

  return (
    <form className="formFields" onSubmit={handleSubmit}>
      <Input
        required
        type="text"
        name="name"
        isError={Boolean(errors.name && touched.name)}
        onChange={handleChange}
        onBlur={handleBlur}
        label={"Имя"}
        hint={errors.name && touched.name ? "Введите имя" : undefined}
      />
      <Input
        required
        type="tel"
        name="phone"
        isError={Boolean(errors.phone && touched.phone)}
        onChange={handleChange}
        onBlur={handleBlur}
        label={"Телефон"}
        hint={errors.phone && touched.phone ? "Введите телефон" : undefined}
      />
      <Input
        type="text"
        name="comment"
        isError={Boolean(errors.comment && touched.comment)}
        onChange={handleChange}
        onBlur={handleBlur}
        label={"Ниша"}
        hint={errors.comment && touched.comment ? "Введите нишу" : undefined}
      />
      <div className="formFieldsSubmit">
        <Button
          disabled={formik.isSubmitting}
          handleClick={onCheckoutButtonClick}
        >
          Далее
        </Button>
        <Timer />
      </div>

      <Checkbox
        required
        type="checkbox"
        name="checkbox"
        onChange={handleChange}
        defaultChecked
        checked={values.checkbox}
        hint={errors.checkbox && touched.checkbox ? errors.checkbox : undefined}
      >
        {"Даю согласие на обработку персональных данных в соотвествии с "}
        <Link
          to="/privacy"
          target="_blank"
          className="p-0 input__checkbox-link"
        >
          {"политикой конфиденциальности"}
        </Link>
      </Checkbox>
    </form>
  );
};

export { FormFields };
