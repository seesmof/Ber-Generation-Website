import { useState } from "react";
import Navbar from "./components/Navbar";
import Create from "./components/Create";

function App() {
  return (
    <>
      <main className="flex flex-col bg-background min-h-screen">
        <Navbar />
        <div className="flex flex-col py-6">
          <Create />
        </div>
      </main>
    </>
  );
}

export default App;
