import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Principal() {

    const [tempo, setTempo] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTempo(true);
        }, 3000);
    })


    const Info = (
        <>
            <Paper sx={{ opacity: 0.8, width: '40rem', height: '25rem', background: '#a6cccc' }}>
                <Typography sx={{ color: '#043c6e', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana 
                        de comédia e ficção científica criada por Justin Roiland e Dan Harmon para o bloco de programação 
                        noturno Adult Swim, exibido no canal Cartoon Network.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra Rick e seu neto Morty,
                         que divide seu tempo entre a vida familiar e viagens interdimensionais.</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fonte: Wikipedia</p>
                </Typography>
            </Paper>
        </>
    );

    return(
        <>
            <Box  style={{ backgroundImage: `url(img/rick_morty1.gif)`, 
                            backgroundSize: "cover", width: "auto", paddingTop: '0.5rem', paddingLeft: '35rem',
                            height: "40rem"  }}>
                { tempo && Info }
            </Box>
        </>
    )
}