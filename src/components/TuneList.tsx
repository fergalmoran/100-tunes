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
                        <TableCell align="right"></TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Link</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tunes.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell align="center">
                                <Avatar alt={row.title} src={row.image} />
                            </TableCell>
                            <TableCell>
                                <TuneTitle url={row.title} />
                            </TableCell>
                            <TableCell>
                                <Link
                                    href={row.url}
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
