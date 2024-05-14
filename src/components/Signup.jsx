import React from "react";
import logo from "../../public/logo.png";
import vector from "../../public/Vector.png";
import google from "../../public/google.png";
import apple from "../../public/apple.png";
import fb from "../../public/fb.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdKey } from "react-icons/io";

const Signup = () => {
  return (
    <div className="container">
      <div className="left">
        <img src={logo} alt="logo" width={250} />
      </div>
      <div className="right">
        <div className="vector">
          <img src={vector} alt="leaf" width={30} />
          <p>Leaf</p>
        </div>

        <img className="img" src={logo} alt="logo" width={180} />

        <h3>Create Account</h3>

        <form action="" onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <label>Full Name</label>
            <div>
              <CgProfile />
              <input type="text" placeholder="Enter Full Name" />
            </div>
          </div>

          <div className="input-container">
            <label>Email</label>
            <div>
              <MdOutlineEmail />
              <input type="email" placeholder="Enter Email" />
            </div>
          </div>

          <div className="input-container">
            <label>Password</label>
            <div>
              <IoMdKey />
              <input type="password" placeholder="Enter Password" />
            </div>
          </div>

          <button type="submit">Signup</button>
        </form>

        <div className="center">
          <p>-OR-</p>

          <div className="app-container">
            <img className="apps" src={google} alt="google" width={25} />

            <img className="apps" src={fb} alt="google" width={25} />

            <img className="apps" src={apple} alt="google" width={23} />
          </div>
          <div className="gray">
            Already have an Account? <span>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
