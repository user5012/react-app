import "./Contact-Form.css";

function Contact() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="futuristic-box w-50 p-4">
        {/* Adjust width as needed */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            What's about?
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Aa..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Contact;
