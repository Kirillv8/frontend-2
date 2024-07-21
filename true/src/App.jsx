import React from "react";
import AuthModal from "./AuthModal";
import Header from "./Header";
import Filter from "./Filter";
import Menu from "./Menu";

const App = () => {
  return (
    <>
      <Header />
      <Filter />
      <AuthModal />
      <Menu />
    </>
  );
};

export default App;
