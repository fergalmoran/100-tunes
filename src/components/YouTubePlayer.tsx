import React from "react";

const YouTubePlayer = (props: { videoId: string; index: number }) => {
    return (
        <audio
            controls
            src={`https://cdn.podnoms.com/fmstuff/100songs/audio/working/${props.videoId}.mp3`}
        />
    );
};
export default YouTubePlayer;
