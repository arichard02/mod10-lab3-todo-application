import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./contexts/ThemeContext";
import { FilterProvider } from "./contexts/FilterContext";
import { TodoProvider } from "./contexts/TodoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <FilterProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </FilterProvider>
  </ThemeProvider>
);