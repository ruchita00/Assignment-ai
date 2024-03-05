import React, { useContext, useState } from "react";
import { DataProvider } from "../../App";

const Radio = (props) => {
  const {
    type: { type },
  } = useContext(DataProvider);

  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const [noOfOptions, setNoOfOptions] = useState(0);
  const [options, setOptions] = useState([]);

  const handleNumberChange = (e) => {
    let items = [];
    const value = e.target.value;
    for (let i = 0; i < value; i++) {
      items[i] = { label: "", value: "" };
    }
    setNoOfOptions(value);
    setOptions(items);
  };

  const handleChangeOptions = (e, idx) => {
    const newListItems = [...options];
    newListItems[idx].label = e.target.value;
    newListItems[idx].value = e.target.value;
    setOptions(newListItems);
  };

  const handleSubmit = () => {
    if (!noOfOptions || !label || !options?.length) {
      return;
    }
    props.setFormElementList((prev) => [
      ...prev,
      {
        label,
        value: "",
        name: name,
        type,
        error: false,
        errMsg: "",
        options: options,
      },
    ]);
    setNoOfOptions(0);
    setLabel("");
    setName("");
    setOptions([]);
  };

  return (
    <div className="form_element_wrapper">
      <input
        className="input_element"
        type="text"
        name="label"
        required
        placeholder="Label"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />
      <input
        className="input_element"
        type="text"
        name="name"
        required
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input_element"
        type="number"
        min={0}
        value={noOfOptions}
        onChange={handleNumberChange}
        required
        name="options"
        placeholder="Number of options"
      />
      {options?.map((item, idx) => (
        <input
          className="input_element"
          key={idx}
          required
          value={options[idx]?.value}
          onChange={(e) => handleChangeOptions(e, idx)}
          type="text"
          placeholder={`Enter your ${idx + 1} radio label`}
        />
      ))}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Radio;
