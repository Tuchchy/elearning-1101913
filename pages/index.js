import { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/layout";
import Link from "next/link";

export default function LoginPage() {
  
  return <Layout>
    <div style={styles.container}>
      <img src="act+ logo.png" alt="Logo" style={styles.logo} />
      <input
        type="text"
        placeholder="Username"
        
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        
        style={styles.input}
      />
      <button style={styles.button}>
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
