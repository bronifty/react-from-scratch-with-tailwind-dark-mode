import React from "react";

export default () => {
  // track theme in state
  // useEffect to trigger local storage update and document class update
  // toggle theme function
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = "";
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <button onClick={toggleTheme}>Click me</button>;
};
