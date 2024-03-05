import "./App.css";
import FormCreator from "./components/FormCreator";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

export const DataProvider = createContext({});

function App() {
  const [formJson, setFormJson] = useState([]);
  const [type, setType] = useState("");
  console.log(formJson);
  return (
    <DataProvider.Provider value={{ formJson, setFormJson, type, setType }}>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/" element={<FormCreator />} />
      </Routes>
    </DataProvider.Provider>
  );
}

export default App;
