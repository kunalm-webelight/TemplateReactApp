import { useState ,useEffect} from "react";
import "./home.css";
export default function Home() {

const [email, setEmail] = useState();
const [password, setPassword] = useState();
const [confPass, setConfPass] = useState();
const [secretCode, setSecretCode] = useState();

const handleEmail=(event)=>{
  setEmail(event.target.value);
}
const handlePassword=(event)=>{
  setPassword(event.target.value);
}
const handleConfPass=(event)=>{
  setConfPass(event.target.value);
}
const handleSecretCode=(event)=>{
  setSecretCode(event.target.value);
}

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
              <input type="text" id="email" name="email" value={email} onChange={handleEmail} placeholder="Email" />
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
                onChange={handlePassword}
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
                id="confirm-password"
                name="something"
                placeholder="Confirm-password"
                value={confPass}
                onChange={handleConfPass}
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
                name="secret-code"
                placeholder="Secret-code"
                onChange={handleSecretCode}
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
