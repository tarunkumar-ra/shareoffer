import React, { Fragment, useState } from "react";
import "../index.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [user, setUser] = useState(false);
  const [student, setStudent] = useState({
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    setStudent({ email: "", password: "" });
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/Students`, student);
      toast("Wow so easy!");
    } catch (error) {
      console.log("error is the function");
    }
  };

  const handlechangelogin = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <div id="login-page">
        <div id="login-card">
          <h2>Welcome to the Unichat</h2>
          <form onSubmit={(e) => handlesubmit(e)}>
            <div className="email">
              <input
                type="text"
                onChange={(e) => handlechangelogin(e)}
                name="email"
                value={student.email}
                placeholder="Email"
              />
            </div>

            <div className="email">
              <input
                type="password"
                name="password"
                onChange={(e) => handlechangelogin(e)}
                value={student.password}
                placeholder="Password"
              />
            </div>
            <div className="submit_btn">
              <input type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
