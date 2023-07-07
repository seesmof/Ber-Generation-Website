import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="flex flex-col bg-background min-h-screen">
        <Navbar />
      </main>
    </>
  );
}

export default App;
