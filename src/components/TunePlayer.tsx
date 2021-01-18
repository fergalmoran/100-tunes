import React from "react";
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";

const muiTheme = createMuiTheme({});

const useStyles = makeStyles((theme: any) => {
    return {
        root: {
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
        },
        loopIcon: {
            color: "#3f51b5",
            "&.selected": {
                color: "#0921a9",
            },
            "&:hover": {
                color: "#7986cb",
            },
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        playIcon: {
            color: "#f50057",
            "&:hover": {
                color: "#ff4081",
            },
        },
        volumeIcon: {
            color: "rgba(0, 0, 0, 0.54)",
        },
        volumeSlider: {
            color: "black",
        },
        progressTime: {
            color: "rgba(0, 0, 0, 0.54)",
        },
        mainSlider: {
            color: "#3f51b5",
            "& .MuiSlider-rail": {
                color: "#7986cb",
            },
            "& .MuiSlider-track": {
                color: "#3f51b5",
            },
            "& .MuiSlider-thumb": {
                color: "#303f9f",
            },
        },
    };
});

const TunePlayer = (props: { videoId: string; index: number }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer
                useStyles={useStyles}
                rounded={true}
                elevation={100}
                width="100%"
                volume={false}
                variation="secondary"
                spacing={3}
                download={false}
                autoplay={false}
                order="standart"
                loop={false}
                src={`https://cdn.podnoms.com/fmstuff/100songs/audio/working/${props.videoId}.mp3`}
            />
        </ThemeProvider>
    );
};

export default TunePlayer;
