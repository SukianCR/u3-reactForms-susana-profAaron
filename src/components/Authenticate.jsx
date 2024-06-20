import { useState } from "react";

export default function Authenticate({ setToken, token }) {
  const [errM, setErrM] = useState("");
  const [suxM, setSuxM] = useState("");

  async function handleClick(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuxM("Thank you  " + result.data.username + "  . " + result.message);
    } catch (e) {
      setErrM(e.message);
      console.log(e.message);
    }
  }

  return (
    <>
      <h2>Authenticate </h2>
      <p className="pink">
        token: <span className="message"> {token}</span>
      </p>
      {suxM && <p className="pink">{suxM}</p>}
      {errM && <p className="pink">{errM}</p>}

      <button onClick={handleClick}>Authenticate Token !</button>
    </>
  );
}
