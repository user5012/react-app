import NavBar from "../../components/NavBar";
import Blog from "../../components/Blog";
import Copyright from "../../components/Copyright";
import "./blog-app.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content">
        <Blog title={"Hello World"}></Blog>
      </div>
      <Copyright />
    </div>
  );
}

export default App;
