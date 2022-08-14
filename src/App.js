import React, { useState } from "react";

import Header from "./Component/Header";
import TodoList from "./Component/TodoList";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header title="Todo App" className="title" />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
