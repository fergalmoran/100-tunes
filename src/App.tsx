import { Typography } from "@material-ui/core";
import React from "react";
import "./App.css";
import TuneList from "./components/TuneList";

function App() {
    return (
        <div className="App">
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                100 Tunes
            </Typography>
            <TuneList />
        </div>
    );
}

export default App;
