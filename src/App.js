import React from "react";
import BtnToggleTheme from "./components/BtnToggleTheme";

export default () => {
  return (
    <div className="bg-sky-300 px-4 dark:bg-sky-900">
      <h1>React 18</h1>
      <BtnToggleTheme />
    </div>
  );
};
