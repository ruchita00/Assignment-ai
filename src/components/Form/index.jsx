import React, { useContext, useState } from "react";
import { DataProvider } from "../../App";
import { Link } from "react-router-dom";
import "./index.css";

const Form = () => {
  const { formJson } = useContext(DataProvider);
  const [formFields, setFormFields] = useState(formJson || []);

  const handleLabelChange = (index, e) => {
    let newList = [...formFields];
    newList[index].value = e.target.value;
    setFormFields(newList);
  };
  const handleCheckboxChange = (index, e) => {
    const { checked, value } = e.target;
    let newList = [...formFields];
    if (checked) {
      newList[index].value = [...newList[index].value, e.target.value];
    } else {
      newList[index].value = newList[index].value.filter(
        (item) => item !== e.target.value
      );
    }
    setFormFields(newList);
  };

  const handleSubmit = (e) => {
    console.log(formFields);
  };
  const renderField = (field, index) => {
    switch (field.type) {
      case "input":
        return (
          <div key={index}>
            <label style={{ padding: "5px" }}>{field.label} :</label>
            <input
              style={{ margin: "10px", padding: "8px" }}
              value={field.value}
              type="text"
              onChange={(e) => handleLabelChange(index, e)}
            />
          </div>
        );
      case "textarea":
        return (
          <div key={index}>
            <label style={{ padding: "4px" }}>{field.label} :</label>
            <textarea
              {...field}
              value={field.value}
              onChange={(e) => handleLabelChange(index, e)}
            />
          </div>
        );
      case "button":
        return (
          <div key={index}>
            <button onClick={handleSubmit}>{field.title}</button>
          </div>
        );
      case "radio":
        return (
          <div key={index}>
            <h2>{field.label}</h2>
            {field?.options?.map((item, idx) => (
              <div>
                <input
                  className="radiobu"
                  style={{ margin: "5px" }}
                  type="radio"
                  id={item.label}
                  name={field.name}
                  value={item.value}
                  onChange={(e) => handleLabelChange(index, e)}
                />
                <label for="option1">{item.label}</label>
              </div>
            ))}
          </div>
        );
      case "checkbox":
        return (
          <div key={index}>
            <h2>{field.label}</h2>
            {field?.options?.map((item, idx) => (
              <div>
                <input
                  className="checkbox"
                  type="checkbox"
                  id={item.label}
                  name={field.name}
                  value={item.value}
                  onChange={(e) => handleCheckboxChange(index, e)}
                />
                <label for={field.label}>{item.label}</label>
              </div>
            ))}
          </div>
        );
      case "dropdown":
        return (
          <div key={index}>
            <label style={{ margin: "0px 20px 20px 10px" }}>
              {field.label} :
            </label>
            <select
              className="dropdown"
              onChange={(e) => handleLabelChange(index, e)}
            >
              {field.options.map((option, i) => (
                <option key={i} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ padding: "2rem 4rem" }}>
      <Link to="/">
        <i class="fa-solid fa-chevron-left"></i>
        Back
      </Link>
      {formFields?.map((field, index) => (
        <div key={index}>{renderField(field, index)}</div>
      ))}

      <div style={{ marginTop: "4rem" }}>{JSON.stringify(formFields)}</div>
    </div>
  );
};

export default Form;
