import {
    Avatar,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Tune from "../models/tune";
import TuneTitle from "./TuneTitle";

const MixList = () => {
    const [tunes, setTunes] = useState<Tune[]>([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const mixes: Tune[] = await (
                    await fetch(
                        process.env.REACT_APP_DATA_URL || "data/tunes.json"
                    )
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
                        <TableCell>Link</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Preview</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tunes.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.url}</TableCell>
                            <TableCell>
                                <TuneTitle url={row.title} />
                            </TableCell>
                            <TableCell align="right">
                                <Avatar alt={row.title} src={row.image} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};
export default MixList;
