import React, { useContext, useState } from "react";
import { elementList } from "../../constants";
import "./index.css";
import FormElement from "../FormElements";
import FormElementList from "../FormElementList";
import { DataProvider } from "../../App";

const FormCreator = () => {
  const { setType, formJson } = useContext(DataProvider);

  const [formElementList, setFormElementList] = useState([...formJson]);

  const handleSelect = (e) => {
    setType({ type: e.target.value });
  };

  return (
    <div className="container">
      <div className="left_section">
        <h2 className="title">Form Creator</h2>
        <select onChange={handleSelect} className="dropdown">
          <option disabled selected value={""} className="option">
            Select{" "}
          </option>
          {elementList?.map((item) => (
            <option value={item.type} key={item.type} className="option">
              {item.label}
            </option>
          ))}
        </select>
        <FormElement setFormElementList={setFormElementList} />
      </div>
      <div className="right_section">
        <FormElementList
          formElementList={formElementList}
          setFormElementList={setFormElementList}
        />
      </div>
    </div>
  );
};

export default FormCreator;
