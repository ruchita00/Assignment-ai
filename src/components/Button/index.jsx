import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../App";

const Button = ({ setFormElementList, type }) => {
  const [title, setTitle] = useState("");
  const [submitType, setSubmitType] = useState("");

  const handleSubmit = () => {
    if (!title || !submitType) {
      return;
    }
    setFormElementList((prev) => [
      ...prev,
      {
        label: title,
        title,
        type,
        submitType,
      },
    ]);
    setSubmitType("");
    setTitle("");
  };

  return (
    <div className="form_element_wrapper">
      <input
        className="input_element"
        name="title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        onChange={(e) => setSubmitType(e.target.value)}
        value={submitType}
        className="input_element"
        name="submitType"
        type="text"
        required
        placeholder="Enter button type"
      />{" "}
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default Button;
