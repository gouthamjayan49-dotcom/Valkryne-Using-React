import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      
      {/* Main content area */}
      <div style={{ padding: 20, flexGrow: 1 }}>
        <h1>Hello! Sidebar is working </h1>
      </div>
    </div>
  );
}

export default App;
