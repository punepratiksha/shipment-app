import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup} style={styles.button}>Sign Up</button>
      <p style={styles.link} onClick={() => navigate("/login")}>
        Already have an account? Login
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "100px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial",
  },
  title: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    width: "90%",
    padding: "10px",
    margin: "10px auto",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px 20px",
    marginTop: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  link: {
    marginTop: "15px",
    color: "#007bff",
    cursor: "pointer",
    textDecoration: "underline"
  }
};

export default Signup;
