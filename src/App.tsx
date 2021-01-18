import {
    AppBar,
    Container,
    CssBaseline,
    makeStyles,
    Toolbar,
    Typography,
} from "@material-ui/core";
import React from "react";
import "./App.css";
import TuneList from "./components/TuneList";
import AlbumIcon from "@material-ui/icons/Album";
import { Tune } from "@material-ui/icons";

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
}));

function App() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <AlbumIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        100 Tunes!!!
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth="xl">
                    <TuneList />
                </Container>
            </main>
        </React.Fragment>
    );
}

export default App;
