import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function Principal() {

    return(
        <>
            {/* <Grid>
                <Card>
                    <CardMedia 
                        component="img"
                        src="img/rick_morty1.gif"
                        sx={{ width: "80rem", height: "40rem"}}
                    >
                    </CardMedia>
                </Card>
            </Grid> */}

            <Box  style={{ backgroundImage: `url(img/rick_morty1.gif)`, 
                            backgroundSize: "cover", width: "auto", 
                            height: "40rem" }}>
                <Paper sx={{ opacity: 0.8 }}>
                    fdfdsfdsfdsfdsfdf
                </Paper>
            </Box>
        </>
    )
}