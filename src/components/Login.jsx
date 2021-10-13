import React from "react";

function Login() {
    return(
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="username">
                        <h4>Username</h4>
                    </label>
                    <input type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <h4>Password</h4>
                    </label>
                    <input type="password" id="password" />
                </div>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;