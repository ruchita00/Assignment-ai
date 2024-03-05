import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import Dropdown from "../Dropdown";
import InputBox from "../InputBox";
import Checkbox from "../Checkbox";
import TextArea from "../TextArea";
import Radio from "../Radio";
import { DataProvider } from "../../App";
import Button from "../Button";

const FormElement = ({ setFormElementList }) => {
  const {
    type: { type },
  } = useContext(DataProvider);
  function getElement(type) {
    switch (type) {
      case "input":
        return <InputBox type={type} setFormElementList={setFormElementList} />;
      case "radio":
        return <Radio type={type} setFormElementList={setFormElementList} />;

      case "textarea":
        return <TextArea type={type} setFormElementList={setFormElementList} />;

      case "dropdown":
        return <Dropdown type={type} setFormElementList={setFormElementList} />;
      case "checkbox":
        return <Checkbox type={type} setFormElementList={setFormElementList} />;
      case "button":
        return <Button type={type} setFormElementList={setFormElementList} />;
      default:
        return null;
    }
  }
  return getElement(type);
};

export default FormElement;
