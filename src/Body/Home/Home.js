import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles((theme) => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    }
}))

export default function Home() {
    const classes = useStyles()
    const baselink = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/"
    const buttons = [
        {
            topic: "Physics",
            link: baselink + "Physics",
            available: true,
        },
        {
            topic: "Mathematics",
            link: baselink + "Mathematics",
            available: false,
        },
        {
            topic: "Computer Science",
            link: baselink + "ComputerScience",
            available: false,
        },
    ]

    function routeToTopic(event) {
        const value = event.target.href
        window.location = value
    }

    function AvailableButton(props) {
        if (props.button.available) {
            return (
                <Button variant="contained" color="primary" href={props.button.link} onClick={routeToTopic}>
                    {props.button.topic}
                </Button>
            )
        }

        return (
            <Button variant="contained" color="primary" href={props.button.link} onClick={routeToTopic} disabled>
                {props.button.topic}
            </Button>
        )
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Think Differently
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Learn additional ways to look at topics in Physics, Mathematics and Computer Science.
                    </Typography>
                    <Grid container spacing={2} justify="center">
                        {buttons.map((button) => (
                            <Grid item>
                                <AvailableButton button={button} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </div>
            <div>

            </div>
        </React.Fragment>
    )
}