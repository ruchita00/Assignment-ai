import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../App";

const InputBox = ({ setFormElementList }) => {
  const {
    type: { type },
    setFormJson,
  } = useContext(DataProvider);

  const [placeholder, setPlaceholder] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = () => {
    if (!placeholder || !label) {
      return;
    }
    setFormElementList((prev) => [
      ...prev,
      {
        placeholder,
        label,
        value: "",
        type,
        error: false,
        errMsg: "",
      },
    ]);
    setPlaceholder("");
    setLabel("");
  };

  return (
    <div className="form_element_wrapper">
      <input
        className="input_element"
        name="label"
        type="text"
        required
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        onChange={(e) => setPlaceholder(e.target.value)}
        value={placeholder}
        className="input_element"
        name="placeholder"
        type="text"
        required
        placeholder="Placeholder"
      />{" "}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default InputBox;
