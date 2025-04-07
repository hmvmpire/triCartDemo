import { Layout } from "@/components/subComponents/account/layout"
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from "next/link";

function createData(
    order: string,
    date: string,
    status: string,
    total: string,
) {
    return { order, date, status, total };
}

const rows = [
    createData("#5564", "December 2, 2024", "On hold", "$192.64 for 3 items"),
];

const nav1Route =
typeof window !== "undefined" &&
window.location.pathname.includes("/tricart-electronics")
const nav2Route = typeof window !== "undefined" &&
window.location.pathname.includes("/tricart-tools")
const nav3Route = typeof window !== "undefined" &&
window.location.pathname.includes("/tricart-home-decore")
const nav4Route = typeof window !== "undefined" &&
window.location.pathname.includes("/tricart-fashion")

const templateBasePath = nav1Route ? "/tricart-electronics" : nav2Route ? "/tricart-tools" : nav3Route ? "/tricart-home-decore" : nav4Route ? "/tricart-fashion" : "/"


export const OrdersMain = () => {
    return (
        <div>
            <Layout title={"Account Dashboard"} baseUrl={templateBasePath}>
                <div className="w-full">
                    <div className="flex items-center gap-x-4">
                        <FontAwesomeIcon icon={faBoxOpen} className="text-4xl text-zinc-700" />
                        <h1 className="fw_700 text-zinc-700 text-2xl">Orders</h1>
                    </div>
                    <div className="mt-5 w-full">
                        {rows && rows.length > 0 ?
                            <TableContainer component={Paper} sx={{ boxShadow: "none", overflowX: "auto" }}>
                                <Table sx={{ minWidth: 650, overflowX: "auto" }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><p className="fw_700 text-black uppercase">Order</p></TableCell>
                                            <TableCell><p className="fw_700 text-black uppercase">Date</p></TableCell>
                                            <TableCell><p className="fw_700 text-black uppercase">Status</p></TableCell>
                                            <TableCell><p className="fw_700 text-black uppercase">Total</p></TableCell>
                                            <TableCell><p className="fw_700 text-black uppercase">Actions</p></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.order}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.order}
                                                </TableCell>
                                                <TableCell>{row.date}</TableCell>
                                                <TableCell>{row.status}</TableCell>
                                                <TableCell>{row.total}</TableCell>
                                                <TableCell>
                                                    <Link href={templateBasePath + "/account/orders/5564"} className="outline-none border-none shadow-none text-black bg-zinc-100 hover:bg-zinc-200 py-2 px-4 fw_600 uppercase text-xs">View</Link>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer> :
                            <div className=" flex flex-col gap-y-4 items-center justify-center h-60">
                                <p className="text-base text-black fw_400 text-center">Your have no any order yet!</p>
                            </div>}
                        <div className="mt-10 flex justify-center">
                            <Link href={"/"} className="outline-none border-none shadow-none flex items-center justify-center bg-zinc-700 hover:bg-black rounded-sm text-white text-sm uppercase h-12 w-52 fw_600  duration-300">Shop More</Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

