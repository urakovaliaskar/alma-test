"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/utils/auth";
import {
  LoginContainer,
  LoginForm,
  LoginTitle,
  LoginInput,
  LoginSubmitButton,
  ErrorMessage,
} from "@/styles";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      login("dummyAuthToken"); // Save a dummy token
      router.push("/dashboard"); // Redirect to the dashboard
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <LoginTitle>Login</LoginTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <LoginInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginSubmitButton type="submit">Login</LoginSubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
