import "./Copyright.css";

function Copyright({ copyright = "&copy; 2024 My Blog" }) {
  return (
    <div className="CP">
      <p>s{copyright}</p>
    </div>
  );
}

export default Copyright;
