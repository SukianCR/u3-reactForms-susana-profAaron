import { useState } from "react";

export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [sucM, setSucM] = useState(null);

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
      result.success && setSucM(result.message);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2> Sign Up !</h2>

      {error && <p className="message">{error}</p>}
      {sucM && <p className="message">{sucM}</p>}
      {/* <p> {error ? error : "bien"} </p> */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            Username:
            <input
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:{" "}
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
}
