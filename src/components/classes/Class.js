import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Header from '../Navigation/Header';
import { Container, Button, Typography, Card, CardContent, Grid, colors } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import useStyles from "./style";

function PaperComponent(props) {
    return (
        <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    );
}

// post api = "http://dev-api.navgurukul.org/classes"

function Class(props) {
    const classes = useStyles();
    const [allClass, setAllClass] = useState([])
    const [open, setOpen] = React.useState(false);
    const[classDetail, setClassDeatil]= useState({})

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
        <div style={{ backgroundColor: "#e8eaf6" }}>
            <Header />
            <Container >
                <Typography variant="h4" className={classes.title}>Classes</Typography>
                {/* add classes */}
                <Button variant="contained" color="primary" onClick={handleClickOpen} className={classes.addbtn}>Add Class</Button>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Add class 
                     </DialogTitle>

                    <DialogContent>
                    <Container component="main" maxWidth="xs">
                        <form noValidate >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Title"
                                name="title"
                                autoComplete="title"
                                autoFocus
                            // defaultValue={useDeatil.userName}
                            // onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Description"
                                name="description"
                                autoComplete="description"
                                autoFocus
                            // defaultValue={useDeatil.userEmail}
                            // onChange={handleChange}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="facilitator_id"
                                label="Facilitator Id"
                                autoComplete="facilitator_id"
                            // onChange={handleChange}
                            // defaultValue={useDeatil.userPhone}
                            />



                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Start Date"
                                name="start_time"
                                autoComplete="start_time"
                                autoFocus
                            // defaultValue={useDeatil.citizen}
                            // onChange={handleChange}
                            />
                          
                             <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                               
                                label="End Date"
                                name="end_time"
                                autoComplete="end_time"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />
                             <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth  
                                label="Exercise Id"
                                name="exercise_id"
                                autoComplete="exercise_id"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />

                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Course Id"
                                name="course_id"
                                autoComplete="course_id"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />
                             <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                              
                                label="Category Id"
                                name="category_id"
                                autoComplete="category_id"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />
                             <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                               
                                label="Language"
                                name="lang"
                                autoComplete="lang"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />
                              <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Class Type"
                                name="type"
                                autoComplete="type"
                                autoFocus
                            // defaultValue={useDeatil.otp}
                            // onChange={handleChange}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            // className={classes.submit}
                            >
                               Submit
                           </Button>
                        </form>
                        </Container>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* search classes */}
                <FilterListIcon className={classes.iconfilter} />
                <form className={classes.form}>
                    <TextField
                        label="Filter Classes"
                        margin="normal"
                        variant="outlined"
                        name="searchPtin"
                        fullWidth
                        className={classes.textField}
                    // defaultValue={searchPtin}
                    // onChange={handleChange}
                    />

                </form>
            </Container>


            {/* show classes */}
            <Container className={classes.container}>
                <Grid container spacing={12} >
                    {allClass.map((item, i) => {
                        return (
                            <Grid item xs={12} sm={4} className={classes.grid}>
                                <Card key={i} className={classes.card}>
                                    <CardContent className={classes.leftContainer}>
                                        <Typography variant="h6" className={classes.text} >Title</Typography>
                                        <Typography variant="h6" className={classes.text}>Description</Typography>
                                        <Typography variant="h6" className={classes.text}>FacilitatorName</Typography>
                                        <Typography variant="h6" className={classes.text}>language</Typography>
                                        <Typography variant="h6" className={classes.text}>Class Type</Typography>
                                        <Typography variant="h6" className={classes.text}>Start Date</Typography>

                                    </CardContent>
                                    <CardContent className={classes.rightContainer}>
                                        <Typography variant="h6" className={classes.rightText} >{item.title}</Typography>
                                        <Typography variant="h6" className={classes.rightText}>{item.description}</Typography>
                                        <Typography variant="h6" className={classes.rightText} >{item.facilitator.name}</Typography>
                                        <Typography variant="h6" className={classes.rightText} >{item.lang}</Typography>
                                        <Typography variant="h6" className={classes.rightText} >{item.type}</Typography>
                                        <Typography variant="h6" className={classes.rightText} >{new Intl.DateTimeFormat("en-GB", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit"
                                        }).format(item.start_date)}</Typography>

                                    </CardContent>
                                </Card>
                            </Grid>)
                    })}

                </Grid>

            </Container>

        </div>
    );

}

export default Class;