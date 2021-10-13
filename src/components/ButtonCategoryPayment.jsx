import { Button, makeStyles } from "@material-ui/core";
// import imgIcon from "../assets/fonts/fontawesome-free-5.15.4-desktop/svgs/mobile-alt.svg"

const styles = makeStyles(theme => ({
    button:{
        marginBottom: '20px',
        width: "100%",
        height: 50,
        color: "#780000",
        textTransform: "inherit",
        fontSize: "14.5px",
        fontFamily: "[OpenSansRegular]",
        backgroundColor:"e1e1e1"
    },
    leftIcon:{
        marginRight: theme.spacing(2)
    },
    containerImage:{
        width:"50px",
        height: "50px"
    }
}));

function ButtonCategoryPayment({id, onClick, label}){

    const classes = styles();

    return(
        <Button
            id={id}
            style={{justifyContent: "felx-start"}}
            variant="contained"
            className={classes.button}
            onClick={onClick}
        >
            <div className={classes.containerImage}>
                <img className={classes.leftIcon} src="" alt="Mobile" />
            </div>

        </Button>
    );

}

export default ButtonCategoryPayment;