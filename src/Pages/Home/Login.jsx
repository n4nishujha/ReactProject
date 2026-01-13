import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!isLogin) {
      // Signup validations
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }
      if (!/^%[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Please enter a valid email address");
        setLoading(false);
        return;
      }
    }

    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const body = isLogin
        ? { email, password }
        : { email, password, action: "signup" };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const user = await res.json();
        if (setUser) setUser(user);
        navigate("/", { replace: true });
        return;
      } else if (!isLogin && res.status === 404) {
        // Mock signup for development
        const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
        if (existingUsers.some((u) => u.email === email)) {
          setError("User already exists");
          setLoading(false);
          return;
        }

        const mockUser = {
          id: Date.now(),
          email,
          name: email.split("@")[0],
          isNewUser: true,
        };

        existingUsers.push(mockUser);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        localStorage.setItem("user", JSON.stringify(mockUser));

        if (setUser) setUser(mockUser);
        setError(" Account created! (Development mode)");

        setTimeout(() => {
          setIsLogin(true);
          setError("");
          setPassword("");
          setConfirmPassword("");
        }, 2000);

        setLoading(false);
        return;
      }

      // Handle API errors
      try {
        const err = await res.json();
        setError(err.message || `Something went wrong (Status: ${res.status})`);
      } catch {
        setError(`Something went wrong (Status: ${res.status})`);
      }
    } catch (error) {
      if (
        error.name === "TypeError" &&
        error.message.includes("Failed to fetch")
      ) {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  const switchTab = (isLoginTab) => {
    setIsLogin(isLoginTab);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => switchTab(true)}
            disabled={loading}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => switchTab(false)}
            disabled={loading}
          >
            SignUp
          </button>
        </div>

        {error && (
          <div
            className={`error-message ${
              error.startsWith("✓") ? "success" : ""
            }`}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form">
            <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />

            <input
              type="password"
              placeholder={isLogin ? "Password" : "Password (min 6 characters)"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={isLogin ? undefined : 6}
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
              />
            )}

            {isLogin && (
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
            </button>

            <p className="toggle-text">
              {isLogin ? "Not a member?" : "Already a member?"}
              <a
                href="#"
                onClick={() => switchTab(!isLogin)}
                className="toggle-link"
              >
                {isLogin ? "Signup now" : "Login now"}
              </a>
            </p>

            {isLogin ? (
              <div className="test-credentials">
                <p>
                  <b>NOTE:</b> Test login: test@example.com / Pass@123
                </p>
              </div>
            ) : (
              <div className="dev-note">
                <small>Note: Using mock signup for development</small>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
