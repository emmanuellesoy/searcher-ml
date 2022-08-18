import React from "react";
import { Grid } from "@mui/material";

const styleImage = {
    width: '180px',
    height: '180px',
    borderRadius: '4px'
}

const Result = () => {
    return(
        <Grid item xs={2}>
            <h2 sx={styleImage}>res</h2>
        </Grid>
)};

export default Result;