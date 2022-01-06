import React, { useState, useEffect } from "react";
import data from "./productData";
import Project from "./components/Project";

function App() {
  const [projects, setProject] = useState([]);

  // useEffect is used in preparation for a version 2 build
  useEffect(() => {
    setProject(data);
  }, []);

  return (
    <main>
      <section className="projectSection">
        <Project projects={projects} />
      </section>
    </main>
  );
}

export default App;
