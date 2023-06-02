export default function Home() {
  return (
    <>
      <div class="formcontainer">
        <h1>Some Form</h1>
        <div class="formrows">
          <fieldset>
            <div class="formelements"><label for="email">Email:</label></div>
            <div class="formelements">
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>
          </fieldset>
        </div>

        <hr />
        <div class="formrows">
          <fieldset>
            <div class="formelements">
              <label for="password">Password:</label>
            </div>
            <div class="formelements">
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
          </fieldset>
        </div>
        <div class="formrows">
          <fieldset>
            <div class="formelements">
              <label for="confirm-password">Confirm-password</label>
            </div>
            <div class="formelements">
              <input
                type="text"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm-password"
              />
            </div>
          </fieldset>
        </div>
        <div class="formrows">
          <fieldset>
            <div class="formelements">
              <label for="secret-code"></label>Secret-code
            </div>
            <div class="formelements">
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
        <div class="btnrow">
          <div class="buttons"><input type="button" value="SignUp" /></div>
          <div class="buttons">
            <input
              type="button"
              id="signin"
              value="SignIn"
            />
          </div>
        </div>
      </div>
      
    </>
  );
}
