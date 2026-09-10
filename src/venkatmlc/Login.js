
import React, { useState } from "react";
import "../style/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const onhandleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
    e.preventDefault();

    console.log(form);

    if (
        form.email === "rohith@gmail.com" &&
        form.password === "123456"
    ) {
        alert("Login successful");
        navigate("/dashboard");
    } else {
        alert("Invalid username or password");
    }
};

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">
                    <h1>Balmoor Venkat Login</h1>
                    <p>Welcome back! MLC Balmoor Venkat Reddy.</p>
                </div>

                <form className="login-form" onSubmit={handleLogin}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={form.email}
                            onChange={onhandleChange}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={form.password}
                            onChange={onhandleChange}
                        />
                    </div>

                    <button className="login-button" type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;
