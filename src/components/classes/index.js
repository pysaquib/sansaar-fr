import { Container, Typography, Button, Box } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Navigation/Header';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.css'

function ClassList() {
    const [allClass, setAllClass] = useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect((e) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NiIsImVtYWlsIjoiaWFtc2FxdWlibmFzaW1AZ21haWwuY29tIiwiaWF0IjoxNjAwNTM1MzMxLCJleHAiOjE2MzIwOTI5MzF9.vuSZRabkDGa5kdx51D7K9R7lzZL3sElBUTnHs2x-GDY"
        Axios.get("http://dev-api.navgurukul.org/classes/all", { headers: { "Authorization": `Bearer ${token}` } })
            .then(res => {
                console.log(res.data)
                setAllClass(res.data)
            })
    }, [])

    return (
        <>
            <Header />
            <Box className="boxItems">
                <Typography variant="h4">Classes</Typography>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add Class
                </Button>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Disagree
                     </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Agree
                     </Button>
                </DialogActions>
            </Dialog>




            <TableContainer component={Paper}>
                <Table className="" size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cell">Title </TableCell>
                            <TableCell className="cell" align="center">Description</TableCell>
                            <TableCell className="cell" align="center">Facilitator</TableCell>
                            <TableCell className="cell" align="center">Language</TableCell>
                            <TableCell className="cell" align="center">Class type</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {allClass.map((item, i) => {

                            return (<TableRow key={i}>
                                <TableCell component="th" scope="row"> {item.title}</TableCell>
                                <TableCell align="center">{item.description}</TableCell>
                                <TableCell align="center" > {item.facilitator.name}</TableCell>
                                <TableCell align="center">{item.lang}</TableCell>
                                <TableCell align="center">{item.type}</TableCell>
                                
                            </TableRow>
                            )

                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default ClassList;