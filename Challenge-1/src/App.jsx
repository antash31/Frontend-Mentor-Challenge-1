import { useState, useEffect } from "react";
import FrontScreen from "./FrontScreen";
import "./App.css";
import Button from "./Button";
import Card from "./Card";
import BackScreen from "./BackScreen";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  const [numIwant, setNumIwant] = useState(null);
  const navigate = useNavigate();

  const frontScreenToAppCallback = (NumIwant) => {
    setNumIwant(NumIwant);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      setNumIwant(null); // Reset state
      navigate("/"); // Navigate to root path
    };

    window.addEventListener("load", handleBeforeUnload);

    // Cleanup: Remove event listener when component unmounts
    return () => window.removeEventListener("load", handleBeforeUnload);
  }, [navigate]);

  console.log(numIwant);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <FrontScreen frontScreenToAppCallback={frontScreenToAppCallback} />
          }
        />
        <Route
          path="/backscreen"
          element={<BackScreen ratingNumber={numIwant} />}
        />
      </Routes>
    </>
  );
}

export default App;
