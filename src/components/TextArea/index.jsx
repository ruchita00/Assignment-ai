import React, { useContext, useState } from "react";
import { DataProvider } from "../../App";

const TextArea = (props) => {
  const {
    type: { type },
  } = useContext(DataProvider);

  const [placeholder, setPlaceholder] = useState("");
  const [count, setCount] = useState(null);
  const [label, setLabel] = useState("");

  const handleSubmit = () => {
    if (!placeholder || !label || !count) {
      return;
    }
    props.setFormElementList((prev) => [
      ...prev,
      {
        placeholder,
        label,
        rows: count,
        value: "",
        type,
        error: false,
        errMsg: "",
      },
    ]);
    setPlaceholder("");
    setLabel("");
    setCount("");
  };
  return (
    <div className="form_element_wrapper">
      <input
        className="input_element"
        name="label"
        type="text"
        value={label}
        required
        placeholder="Label"
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        className="input_element"
        type="text"
        required
        name="placeholder"
        value={placeholder}
        placeholder="Placeholder"
        onChange={(e) => setPlaceholder(e.target.value)}
      />
      <input
        className="input_element"
        type="number"
        name="no_of_rows"
        min={0}
        value={count}
        required
        placeholder="no_of_rows"
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TextArea;
