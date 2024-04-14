import { useState } from "react";
import Button from "./Button";

const FormHead = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submit data");
  };
  return (
    <>
      {/* <div className="container"> */}
      {/* <Button text="VIA MESSAGE" /> */}
      {/* <Button text="VIA PHONE" /> */}
      {/* </div> */}

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {/* <!-- First part --> */}
            <div className="p-3">
              <Button text="VIA MESSAGE" />
            </div>
          </div>
          <div className="col-md-6">
            {/* <!-- Second part --> */}
            <div className="p-3 d-flex justify-content-end">
              <Button text="VIA PHONE" />
            </div>
          </div>
        </div>
      </div>

      {/* form start */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center mb-4">Contact Us</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={onSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{message}</h1>
      </div>
    </>
  );
};

export default FormHead;
