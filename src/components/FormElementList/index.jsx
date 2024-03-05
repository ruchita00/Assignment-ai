import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../App";
import { useNavigate } from "react-router-dom";

const FormElementList = (props) => {
  const [elementList, setElementList] = useState(props.formElementList);
  const { setFormJson } = useContext(DataProvider);
  const navigate = useNavigate();

  const handleDelete = (item) => {
    setElementList((prev) => prev.filter((obj) => obj.label !== item.label));
    props.setFormElementList((prev) =>
      prev.filter((obj) => obj.label !== item.label)
    );
  };

  const handleCreate = () => {
    setFormJson(elementList);
    navigate("/form");
  };

  useEffect(() => {
    setElementList(props.formElementList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.formElementList.length]);

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {elementList?.map((item, idx) => (
        <div
          key={item?.value}
          style={{
            margin: "0.2rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>{item.label}</span>
          <span
            onClick={(e) => handleDelete(item)}
            style={{ cursor: "pointer", color: "red" }}
          >
            <i class="fa-solid fa-trash"></i>
          </span>
        </div>
      ))}
      <button
        style={{
          position: "absolute",
          bottom: "20px",
          left: "4rem",
          cursor: "pointer",
        }}
        onClick={handleCreate}
      >
        Create Form JSON
      </button>
    </div>
  );
};

export default FormElementList;
