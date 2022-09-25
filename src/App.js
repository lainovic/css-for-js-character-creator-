import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "60%",
          width: "100%",
          height: "400px",
          backgroundColor: "hsl(195deg, 20%, 86%)",
          zIndex: -1,
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
