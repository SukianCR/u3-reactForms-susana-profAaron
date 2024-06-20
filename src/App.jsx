import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {token ? (
        <Authenticate setToken={setToken} token={token} />
      ) : (
        <SignUpForm setToken={setToken} token={token} />
      )}
    </>
  );
}

export default App;
