import Contact from "./components/Contact-Form";
import NavBar from "./components/NavBar";

let nav = [
  { label: "Home", link: "index.html" },
  { label: "About us", link: "About-Us.html" },
  { label: "Contact Us", link: "Contact.html" },
];

function App() {
  return (
    <>
      <div>
        <NavBar items={nav} />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}

export default App;
