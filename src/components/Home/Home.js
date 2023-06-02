import './home.css';
export default function Home() {
  return (
    <div className="home_container">
      <div className="formcontainer">
        <h1>Some Form</h1>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label for="email">Email:</label>
            </div>
            <div className="formelements">
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
          </fieldset>
        </div>

        <hr />
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label for="password">Password:</label>
            </div>
            <div className="formelements">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </fieldset>
        </div>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label for="confirm-password">Confirm-password</label>
            </div>
            <div className="formelements">
              <input
                type="text"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm-password"
              />
            </div>
          </fieldset>
        </div>
        <div className="formrows">
          <fieldset>
            <div className="formelements">
              <label for="secret-code"></label>Secret-code
            </div>
            <div className="formelements">
              <input
                type="text"
                id="secret-code"
                name="secret-code"
                placeholder="Secret-code"
                onchange="handleChange(event)"
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
