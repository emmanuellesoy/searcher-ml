import React from "react";
import { Stack, IconButton, TextField, Grid } from "@mui/material";

const styleStack = {
    backgroundColor: '#ffe600',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 0',
    justifyContent: 'center'
}

const styleIconButton = {
    left: '-30px',
    borderRadius: '0',
    backgroundColor: '#eeeeee',
    padding: '0 10px',
}

const Searcher = () => {
    return(
        <Stack sx={styleStack}>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <IconButton>
                        b
                    </IconButton>
                </Grid>
                <Grid item xs={9}>
                    <TextField 
                    placeholder="Nunca dejes de buscar"
                    size="small"
                    sx={{
                        width: '90%',
                        backgroundColor: 'white',
                        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline":{
                            outline: '0',
                            border: '0',
                            focus: '0'
                        },
                        ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
                            width: '90%'
                        }
                    }}/>
                    <IconButton 
                    sx={styleIconButton}
                    size="small">
                        b
                    </IconButton>
                </Grid>
            </Grid>
        </Stack>
)};

export default Searcher;