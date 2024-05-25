import React, { useEffect, useState } from "react";
import apiSerice from "../../service/apiService";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";

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

export default function Personagem() {
  const [listaPersonagens, setListaPersonagens] = useState([]);
  const [imagemPersonagem, setImagemPersonagem] = useState(null);
  const [personagem, setPersonagem] = useState('');
  const [origem, setOrigem] = useState('');

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [open, setOpen] = useState(false);  
  const handleClose = () => setOpen(false);

  const handleOpen = (personagem) => {
    setImagemPersonagem(null)
    setImagemPersonagem(personagem.image)
    setPersonagem('')
    setPersonagem(personagem)
    setOrigem('');
    setOrigem(personagem.origin.name)

    setOpen(true);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const listarPersonagens = async () => {
      setListaPersonagens([]);

      for (let i = 1; i < 43; i++) {
        await apiSerice
          .get("character/?page=" + i)
          .then((response) => {
            if (response.data.results)
              response.data.results.map((item) => {
                setListaPersonagens((lista) => [...lista, item]);
              });
          })
          .catch((error) => {
            console.log("erro -- ", error);
          });
      }
    };
    listarPersonagens();
  }, []);

  return (
    <>
      {/* <Grid>
        <Card>
          <CardMedia
            component="audio"
            autoPlay
            src="audio/rick-and-morty-theme-song-[hd]-made-with-Voicemod.mp3"
          ></CardMedia>
        </Card>
      </Grid> */}

      <Box
        style={{
          backgroundImage: `url(img/rick_morty2.gif)`,
        }}
        sx={{
          height: "40rem",
          mb: "-6rem",
          backgroundSize: "cover",
          paddingTop: "1rem",
          paddingLeft: "10rem",
        }}
      >
        {/* <Button
          variant="outlined"
          color="primary"
          sx={{ ml: "2rem", mb: "2rem", mt: "2rem", color: "#043c6e", background: '#60a85f', fontWeight: 'bold' }}
          onClick={() => listarPersonagens()}
        >
          Listar Personagens
        </Button> */}
        {listaPersonagens.length !== 0 && (
          <Paper
            sx={{
              opacity: 0.8,
              width: "35rem",
              height: "25rem",
              background: "#a6cccc",
            }}
          >
            <TableContainer sx={{ ml: "2rem", width: "30rem" }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    Nome
                  </TableRow>
                </TableHead>
                <Divider />
                <TableBody>
                  {listaPersonagens
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} onClick={() => handleOpen(item)}>
                          <Typography
                            sx={{
                              fontSize: "1.2rem",
                              ":hover": { background: "#88e23b" },
                            }}
                          >
                            {item.name}
                          </Typography>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={826}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx= {{ mb: '1rem', fontSize: '2rem', color: '#043c6e', fontWeight: 'bold' }}>
              {personagem.name}
            </Typography>
            <Card>
              <CardMedia component='img' image={imagemPersonagem} sx={{ height: '20rem',  }}>                
              </CardMedia>
            </Card>
            <Typography id="modal-modal-description" sx={{ mt: 2, color: '#043c6e' }}>
              Status: {personagem.status}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1, color: '#043c6e' }}>
              Espécie: {personagem.species}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 1, color: '#043c6e' }}>
              Origem: {origem}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
