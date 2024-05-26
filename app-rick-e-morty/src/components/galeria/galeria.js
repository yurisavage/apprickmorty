import { Box, Card, CardMedia, Grid, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    background: "#ebe480"
  };

export default function Galeria() {

    const [imagemPersonagem, setImagemPersonagem] = useState('');
    const [descricao, setDescricao] = useState('');
    const [open, setOpen] = useState(false);  
    const handleClose = () => setOpen(false);

    const handleOpen = (person) => {
        setImagemPersonagem(null)
        setImagemPersonagem('img/rick_' + person + '.gif')

        switch(person){
            case 1:
                setDescricao('Rick Sanchez é um cientista niilista que busca no hedonismo uma satisfação momentânea. Sempre arrasta ' + 
                    'um de seus netos ou toda sua família para aventuras ou problemas.')
                break;

                case 2:
                    setDescricao('Morty Smith é o neto de Rick e quem geralmente (na maioria das vezes) o acompanha em viagens espaciais ' +
                    'ou interdimensionais. Sempre tem que superar seus medos e inseguranças para salvar a própria vida e/ou de seu avô.')
                    break;

                    case 3:
                        setDescricao('Summer Smith é a neta mais velha de Rick e, como uma adolescente normal, gosta de aproveitar sua ' + 
                                    'juventude com suas amigas. Passou a acompanhar seu avô mais vezes em suas aventuras.')
                        break;

                        case 4:
                            setDescricao('Beth Smith é a única filha de Rick e exerce medicina veterinária em cavalos. Apoia seu pai ' +
                                'em todas as suas loucuras e sonha em ser uma cirurgiã de humanos.')
                            break;

                            case 5:
                                setDescricao('Jerry Smith é o genro de Rick e o ser vivo mais frágil da galáxia. Despreza seu sogro ' +
                                    'e sempre é o alvo de chacotas do mesmo.')
                                break;

            default:
                break
        }

        setOpen(true);
    }

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
                 }}
                    onClick={() => handleOpen(2)}
                 >
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Morty
                    </Typography>
                </Box>

                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '4rem', ml: '0.5rem'
                }}
                    onClick={() => handleOpen(4)}
                >
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2.5rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Beth
                    </Typography>
                </Box>
                </div>

                <div>
                <Box sx={{ mt: '10rem', width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '8rem' }}
                    onClick={() => handleOpen(1)}
                >
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
                        }}
                    onClick={() => handleOpen(3)}
                >
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '1rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Summer
                    </Typography>
                </Box>

                <Box sx={{ width: '10rem', height: '10rem', borderRadius: '20rem', background: "#043c6e", 
                            marginTop: '4rem'
                        }}
                        onClick={() => handleOpen(5)}
                >
                    <Typography sx={{ color: '#ebe480', fontWeight: 'bold', fontSize: '2rem', 
                                        mt: '3.5rem', ml: '2.5rem', paddingTop: '3.5rem'
                                    }}
                    >
                        Jerry
                    </Typography>
                </Box>
                </div>

            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card>
                        <CardMedia component='img' image={imagemPersonagem} sx={{ height: '15rem' }}>                
                        </CardMedia>
                    </Card>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {descricao}
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}