import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Header from "../components/header";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Login successful");
      router.push("/dashboard"); // redirect after login
    } else {
      alert(data.message || "Login failed");
    }
  };

  return <Layout>
    <div style={styles.container}>
      <img src="act+ logo.png" alt="Logo" style={styles.logo} />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  </Layout>
}

const styles = {
  container: {
    margin: "auto",
    marginTop: "100px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    width: "150px",
    marginBottom: "20px",
  },
  input: {
    marginBottom: "10px",
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#ff7828",
    color: "#fff",
    padding: "10px",
    width: "100%",
    border: "none",
    borderRadius: "5px",
  },
};
