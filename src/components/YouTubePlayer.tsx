import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import parseString from "../helpers/youtubeStringParser";

// const parseString = (str: string): any => {
//     return str.split("&").reduce((params, param) => {
//         var paramSplit: string[] = param.split("=").map((value) => {
//             return decodeURIComponent(value.replace("+", " "));
//         });
//         // params[+paramSplit[0]] = paramSplit[1];
//         return params;
//     }, "");
// };

// const YouTubePlayer = (props: { videoId: string }) => {
//     const [audioUrl, setAudioUrl] = useState("");
//     useEffect(() => {
//         const dataUrl = `http://localhost:8080/https://www.youtube.com/get_video_info?video_id=${props.videoId}`;
//         fetch(dataUrl).then((response) => {
//             if (response.ok) {
//                 response.text().then((instr) => {
//                     // parse response to find audio info
//                     var ytData = parseString(instr);
//                     const data = JSON.parse(ytData.player_response);
//                     if (data && data.streamingData) {
//                         var getAdaptiveFormats =
//                             data.streamingData.adaptiveFormats;
//                         var findAudioInfo = getAdaptiveFormats.findIndex(
//                             (obj: { audioQuality: any }) => obj.audioQuality
//                         );
//                         var audioURL = getAdaptiveFormats[findAudioInfo].url;
//                         setAudioUrl(audioURL);
//                     } else {
//                         console.log(
//                             "YouTubePlayer",
//                             "Unable to find data",
//                             dataUrl
//                         );
//                         setAudioUrl("INVALID");
//                         console.log("YouTubePlayer", "AudioUrl is", audioUrl);
//                     }
//                 });
//             } else {
//                 console.log("YouTubePlayer", "Unable to find data", dataUrl);
//                 setAudioUrl("INVALID");
//                 console.log("YouTubePlayer", "AudioUrl is", audioUrl);
//             }
//         });
//     }, [props.videoId, audioUrl]);
//     if (!audioUrl) {
//         return <CircularProgress color="secondary" />;
//     } else if (audioUrl === "INVALID") {
//         return <div>Unable to find audio</div>;
//     } else {
//         return <audio controls src={audioUrl} />;
//     }
// };

const YouTubePlayer = (props: { videoId: string; index: number }) => {
    return (
        <iframe
            title={`youtube-audio-${props.index}`}
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${props.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    );
};
export default YouTubePlayer;
