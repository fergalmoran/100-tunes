import {
    Avatar,
    Link,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Tune from "../models/tune";
import TuneTitle from "./TuneTitle";
import TunePlayer from "./TunePlayer";

const MixList = () => {
    const [tunes, setTunes] = useState<Tune[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const mixes: Tune[] = await (
                    await fetch(`${process.env.PUBLIC_URL}/data/tunes.json`)
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
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell></TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Play</TableCell>
                        <TableCell>Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tunes.map((tune) => (
                        <TableRow key={tune.id}>
                            <TableCell align="center">{tune.id}</TableCell>
                            <TableCell align="center">
                                <Avatar alt={tune.title} src={tune.image} />
                            </TableCell>
                            <TableCell>
                                <TuneTitle url={tune.title} />
                            </TableCell>
                            <TableCell>
                                <TunePlayer
                                    key={tune.id}
                                    index={tune.id}
                                    videoId={tune.videoId}
                                />
                            </TableCell>
                            <TableCell>
                                <Link
                                    href={tune.url}
                                    color="inherit"
                                    variant="body2"
                                >
                                    Open
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default MixList;
