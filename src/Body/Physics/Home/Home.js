import React, { useState } from "react"
import { CssBaseline } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}))

export default function Home() {
    const [topic, setTopic] = useState("Dummy Classical")
    const [body, setBody] = useState(["Dummy Paragraph 1", "Dummy Paragraph 2"])

    const baselink = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + window.location.pathname + "/"


    const cards = [
        {
            title: "Classical Mechanics",
            content: "Basic Newtonian motion dealing with Forces, Friction, Gravity and Energy.",
            image: "/images/Block.svg",
            link: baselink + "Classical",
        },
        {
            title: "Electromagnetism",
            content: "Deal with some Electricity, Currents, Charges and Magnetism.",
        },
        {
            title: "Thermal",
            content: "Handle statistics to help explain Energy and Solids.",
        },
        {
            title: "Quantum",
            content: "Insights to motion in the extreme cases that affect particles.",
        }
    ]

    function routeToTopicPage(event) {
        const value = event.target.href
        window.location = value
    }

    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Physics
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Learn everything about Forces, Energy, Motion, to help describe the world!
                    </Typography>
                </Container>
            </div>
            <div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.image}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary" href={card.link} onClick={routeToTopicPage}>
                                            View
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </React.Fragment>
    )
}