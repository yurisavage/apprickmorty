import { Box, Card, CardMedia, Grid } from "@mui/material";
import React from "react";

export default function Galeria() {

    return(
        <>
            <Grid>
                <Card>
                    <CardMedia
                        component="audio"
                        autoPlay
                        src="audio/evil-morty-theme-made-with-Voicemod.mp3"
                    ></CardMedia>
                </Card> 
            </Grid>

            <Box
                style={{
                backgroundImage: `url(img/rick-morty3.gif)`,
                }}
                sx={{ width: 'auto', height: "40rem",  backgroundSize: "cover" }}
            >
            </Box>
        </>
    )
}