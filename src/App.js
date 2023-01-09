import "./App.css";
import React from "react";
import Header from "./components/header/header";
import Searchbox from "./components/searchbox/searchbox";
import Countries from "./components/countries/countries";

export const App = () => {
  return (
    <div>
      <Header />
      <Searchbox />
      <Countries />
    </div>
  );
};
