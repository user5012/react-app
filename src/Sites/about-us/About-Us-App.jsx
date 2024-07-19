import { useState } from "react";
import NavBar from "../../components/NavBar";
import Blog from "../../components/Blog";

let title = "Who am I";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Blog title={title} copyRight="">
          I am <strong>Kyriakos</strong> and I am{" "}
          <strong>
            <u>15 years old!</u>
          </strong>
          <br />
        </Blog>
      </div>
    </>
  );
}

export default App;
