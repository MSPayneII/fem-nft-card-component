import React, { useState } from "react";
import data from "./productData";
import Project from "./components/Project";

function App() {
  const [projects, setProject] = useState(data);

  return (
    <main>
      <section className="projectSection">
        <Project projects={projects} />
      </section>
    </main>
  );
}

export default App;
