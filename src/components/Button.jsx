import React from "react";
import {makeStyles} from "@material-ui/core";

const styles = makeStyles(() => ({
    btnStyle:{
        backgroundColor: "#231E20",
        color: "white",
        padding: "14px 20px",
        margin: "8px 0px",
        border: "none",
        cursor: "pointer",
        width: "100%",
        transition: "0.2s",

        "&:hover":{
            opacity: "0.9"
        }
    }
}));

function Button(){
    const classes = styles()
    return(
        <div>
            <button className={classes.btnStyle} disabled="true">
                Login
            </button>
        </div>
    )
}
export default Button;