import { Container, Typography, Button, Box } from '@material-ui/core';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Navigation/Header'
import './style.css'

function ClassList() {
    // const [allClass, setAllClass]= useState([])
    
    useEffect((e)=>{
        // const token = `Bearer token ${ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE5NiIsImVtYWlsIjoiaWFtc2FxdWlibmFzaW1AZ21haWwuY29tIiwiaWF0IjoxNjAwNTM1MzMxLCJleHAiOjE2MzIwOTI5MzF9.vuSZRabkDGa5kdx51D7K9R7lzZL3sElBUTnHs2x-GDY}`
        Axios.get("http://dev-api.navgurukul.org/apiDocs/classes/all")
        .then(res=>{
            console.log(res)
        })
    },[])

    return (
        <>
            <Header />
            <Box className="boxItems">
                <Typography variant="h4">Classes</Typography>
                <Button variant="contained" color="primary">
                    Add Class
                </Button>
            </Box>

        </>
    );
}

export default ClassList;