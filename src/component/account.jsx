import { useState } from "react";
import '../styles/account.css';

export default function Account() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [status, setStatus] = useState("new-account");
    const [error, setError] = useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
        if (error) setError("");
    }

    function checkPasswordLength(password) {
        return password.length >= 8;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (status === "new-account") {
            if (formData.password !== formData.confirmPassword) {
                setError("SYSTEM FAILURE: Passwords are arguing. Try again.");
                return;
            }
            if (!checkPasswordLength(formData.password)) {
                setError("SHORT PASSWORD DETECTED: The syndicate encryptors are not impressed.");
                return;
            }
            setFormData({ name: "", email: "", password: "", confirmPassword: "" });
            window.alert("Oi, hotshot! You actually pulled it off.\n[ PROTOCOL_9000 : USER BORN AGAIN ]\nYour shiny new handle just dropped into the system.\nDon't get cocky—this is only Level 1.");
        } else {
            window.alert("Well, well, look who's back from the shadows.\n[ PROTOCOL_808X : RECONNECTION SUCCESSFUL ]\nThe Grid missed your chaos — don't keep it waiting again.");
        }
    }

    return (
        <div className="account-container">
            <div className="account-title">
                <h1 className="logo-title">NeoMANGA//</h1>
                <h1 className="logo-title">NeoMANGA//</h1>
            </div>
            <div className="form-outline">
                <div>
                    <i className="fa-solid fa-user"></i>
                </div>
                <h1>{status === "new-account" ? "Create New Account" : "Sign in"}</h1>
                <form onSubmit={handleSubmit} noValidate>
                    {status === "new-account" && (
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete="given-name"
                            />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                    </div>
                    {status === "new-account" && (
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                              type="password"
                              name="confirmPassword"
                              id="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                            />
                            {error && <p>{error}</p>}
                        </div>
                    )}
                    <button type="submit">
                        {status === "new-account" ? "Create Account" : "Log in"}
                    </button>
                </form>
                { status === "new-account" ? (
                    <button
                        onClick={() => { setStatus("sign-in"); setError("") }}
                    >
                        Already have an account? Sign in
                    </button>
                ) : (
                    <>
                        <button
                            onClick={() => window.alert("Access denied? Ha. They want you locked out.\n[ ERROR_REBEL_404 ]\nReset your code — reclaim your identity.\nThe system fears those who refuse to fade.")}
                        >
                            Forgotten your password?
                        </button>
                        <button
                            onClick={() => { setStatus("new-account"); setError("") }}
                        >
                            Create new account
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}