import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function Galeria() {

    return(
        <>
            <Grid>
                <Card>
                    {/* <CardMedia
                        component="audio"
                        autoPlay
                        src="audio/evil-morty-theme-made-with-Voicemod.mp3"
                    ></CardMedia> */}
                </Card> 
            </Grid>

            <Box
                sx={{ width: 'auto', height: "auto",  background: "#88e23b", display: 'flex', borderRadius: '20rem' }}
            >
                <CardMedia component='img' image="img/rick-morty3.gif" sx={{ width: 'auto', height: '27.5rem'}}>
                </CardMedia>

                <Box sx={{ mt: '1rem', width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", }}>
                    
                </Box>

                <Box sx={{ mt: '10rem', width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", }}>
                    
                </Box>

                <Box sx={{ mt: '1rem', width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", }}>
                    
                </Box>

            </Box>
        </>
    )
}