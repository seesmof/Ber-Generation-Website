import { useState } from "react";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Recent from "./components/Recent";

function App() {
  return (
    <>
      <main className="flex flex-col bg-background min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Navbar />
          <div className="flex flex-col py-6">
            <Create />
            <Recent />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
