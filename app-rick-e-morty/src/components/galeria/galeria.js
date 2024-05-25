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
                
                <div>
                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e",
                            marginTop: '-2rem', ml: '0.5rem'
                 }}>
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Morty
                    </Typography>
                </Box>

                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '4rem', ml: '0.5rem'
                }}>
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2.5rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Beth
                    </Typography>
                </Box>
                </div>

                <div>
                <Box sx={{ mt: '10rem', width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", marginTop: '8rem' }}>
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        ml: '2.5rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Rick
                    </Typography>
                </Box>
                </div>

                <div>
                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '-2rem'
                }}>
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '1rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Summer
                    </Typography>
                </Box>

                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '4rem'
                }}>
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2.5rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Jerry
                    </Typography>
                </Box>
                </div>

            </Box>
        </>
    )
}