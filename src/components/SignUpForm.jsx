import { useState } from "react";

export default function SignUpForm({ setToken, token }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errM, setErrM] = useState("");
  const [suxM, setSuxM] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        setSuxM(result.message);
        setToken(result.token);
      }
    } catch (err) {
      setErrM(err.message);
    }
  }

  return (
    <>
      <h2> Sign Up !</h2>
      {suxM && <p className="message">{suxM}</p>}
      {errM && <p className="message">{errM}</p>}

      {/* <p> {error ? error : "bien"} </p> */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              required
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
