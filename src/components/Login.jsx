import { makeStyles } from "@material-ui/core";
import React from "react";
import '../index.css';
import logoIST from "../assets/images/logoIST.png";

const styles = makeStyles(theme => ({
    body:{
        display:"table",
        height:"100%",
        margin: "0 auto",
    },
    content:{
        display:"table-cell",
        verticalAlign: "middle"
    },

    formContent:{
        width: "95%",
        // margin: "20px 10px",
        padding: "10px 8px",
    },

    form:{
        border: "3px solid #231E20",
        width: "350px"
    },
    input:{
        width: "100%",
        padding: "12px 20px",
        margin: "8px 0px",
        display: "inline-block",
        border: "1px solid #ccc",
        boxSizing: "border-box"
    },
    btnStyle:{
        backgroundColor: "#231E20",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0px",
        border: "none",
        cursor: "pointer",
        width: "100%"
    },
    imgContainer:{
        textAlign: "center",
        margin: "24px 0px 12px 0px"
    },
    imgSize:{
        width: "40%",

    }
}))

function Login() {
    const classes = styles();
    return(
        <div className={classes.body}>
            <div className={classes.content}>
                <h2>Login Form</h2>
                <form className={classes.form}>
                    <div className={classes.imgContainer}>
                        <img className={classes.imgSize} src={logoIST} alt="logo" />
                    </div>
                    <div className={classes.formContent}>
                        <label htmlFor="username">
                            <h4 className="font-size-15">Username</h4>
                        </label>
                        <input 
                            className={classes.input} 
                            type="text" 
                            id="username" 
                            placeholder="Enter Username"
                            required/>
                        <label htmlFor="password">
                            <h4 className="font-size-15">Password</h4>
                        </label>
                        <input 
                            className={classes.input} 
                            type="password" 
                            id="password" 
                            placeholder="Enter Password"
                            required/>
                    <button className={classes.btnStyle}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;