import { useState } from "react";
import "./home.css";
export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confPass: "",
    secretCode: "",
  });
  const { email, password, confPass, secretCode } = formData;
  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="home_container">
      <div className="formcontainer">
        <h1>Some Form</h1>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label htmlFor="email">Email:</label>
            </div>
            <div className="formelements">
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={handleFormData}
                placeholder="Email"
              />
            </div>
          </fieldset>
        </div>

        <hr />
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label htmlFor="password">Password:</label>
            </div>
            <div className="formelements">
              <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={handleFormData}
                placeholder="Password"
              />
            </div>
          </fieldset>
        </div>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label htmlFor="confirm-password">Confirm-password</label>
            </div>
            <div className="formelements">
              <input
                type="text"
                id="confPass"
                name="confPass"
                placeholder="Confirm-password"
                onChange={handleFormData}
                value={confPass}
              />
            </div>
          </fieldset>
        </div>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label htmlFor="secret-code"></label>Secret-code
            </div>
            <div className="formelements">
              <input
                type="text"
                id="secret-code"
                name="secretCode"
                placeholder="Secret-code"
                onChange={handleFormData}
                value={secretCode}
              />
            </div>
          </fieldset>
        </div>
        <div className="btnrow">
          <div className="buttons">
            <input type="button" value="SignUp" />
          </div>
          <div className="buttons">
            <input type="button" id="signin" value="SignIn" />
          </div>
        </div>
      </div>
    </div>
  );
}
