import React, { useEffect, useState } from "react";
import apiSerice from '../../service/apiService'
import { Box, Button, Card, CardMedia, Divider, FormControl, FormLabel, Grid, Paper } from "@mui/material";

export default function Personagem () {

    const [listaPersonagens, setListaPersonagens] = useState([]);

    useEffect(() => {
        listarPersonagens();
    },[])

    const listarPersonagens = async() => {

        for (let i = 1; i < 43; i++){
            await apiSerice.get('character/?page=' + i)
            .then(response => {
                setListaPersonagens(lista => [...lista, response.data])
            })
            .catch(error => {
                console.log('erro -- ', error)
            })
        }        
    }

    return(
        <>
            <Grid>
                <Card>
                    <CardMedia
                        component="audio"
                        autoPlay
                        src="audio/rick-and-morty-theme-song-[hd]-made-with-Voicemod.mp3"
                    ></CardMedia>
                </Card> 
            </Grid>
            <Box
                style={{
                backgroundImage: `url(img/rick_morty2.gif)`,
                }}
                sx={{ height: "40rem", mb: "-6rem", backgroundSize: "cover" }}
            >
                {/* <Button
                    variant="outlined"
                    color="primary"
                    sx={{ ml: "2rem", mb: "2rem", mt: "2rem", color: "yellow" }}
                    onClick={() => listarPersonagens()}
                    >
                    Listar Personagens
                </Button> */}
            </Box>

            <div>
                <Paper  sx={{ opacity: 0.8, width: '20rem', ml: '20rem' }}>
                    <FormControl>
                        <FormLabel>
                            Nome
                        </FormLabel>
                        <Divider sx={{ ml: "2rem" }} />
                    </FormControl>
                </Paper>
            </div>
        </>
    )
}