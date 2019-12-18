import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

export default function Header() {
    const classes = useStyles()

    const baselink = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/"

    function routeToPage(event) {
        const value = event.target.href
        window.location = value
    }

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Differently Explained!
                    </Typography>
                    <Button href={baselink} onClick={routeToPage}> Home </Button>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}