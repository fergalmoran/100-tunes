import React, { useEffect, useState } from "react";
import Tune from "../models/tune";

const MixList = () => {
    const [tunes, setTunes] = useState<Tune[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const mixes: Tune[] = await (
                    await fetch("/data/tunes.json")
                ).json();
                setTunes(mixes);
            } catch (err) {
                console.error("TuneList", "getData", err);
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Here's a list of tunes</h1>
            {tunes.map((m) => (
                <pre key={m.id}>Fart: {m.url}</pre>
            ))}
        </div>
    );
};
export default MixList;
