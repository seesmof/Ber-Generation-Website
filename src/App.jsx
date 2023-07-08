import { useState } from "react";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Recent from "./components/Recent";

function App() {
  return (
    <>
      <main className="flex flex-col bg-background min-h-screen">
        <Navbar />
        <div className="flex flex-col py-6">
          <Create />
          <Recent />
        </div>
      </main>
    </>
  );
}

export default App;
