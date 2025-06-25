import { useLogin } from "@refinedev/core";
import { useState } from "react";

const LoginPage = () => {
    const { mutate: login } = useLogin();
    const [username, setUsername] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login({ username });
    };

    return (
        <div style={{ padding: "16px" }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginRight: "8px" }}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
