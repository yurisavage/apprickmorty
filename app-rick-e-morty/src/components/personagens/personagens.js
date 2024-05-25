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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function Personagem() {
  const [listaPersonagens, setListaPersonagens] = useState([]);
  const [tempo, setTempo] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // useEffect(() => {
  //     setTimeout(() => {
  //         setTempo(true);
  //     }, 3000);
  // })

  // useEffect(() => {
  //   listarPersonagens();
  //   // console.log('todos os resultados -- ', listaPersonagens.name)
  // }, []);

  const listarPersonagens = async () => {
    setListaPersonagens([]);

    for (let i = 1; i < 43; i++) {
      await apiSerice
        .get("character/?page=" + i)
        .then((response) => {
          if (response.data.results)
            setListaPersonagens((lista) => [...lista, response.data.results]);
          // console.log("result -- ", response.data.results);
        })
        .catch((error) => {
          console.log("erro -- ", error);
        });
    }

    console.log("results --- ", listaPersonagens);
  };

  return (
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
        sx={{
          height: "40rem",
          mb: "-6rem",
          backgroundSize: "cover",
          paddingTop: "1rem",
          paddingLeft: "10rem",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          sx={{ ml: "2rem", mb: "2rem", mt: "2rem", color: "#043c6e", background: '#60a85f', fontWeight: 'bold' }}
          onClick={() => listarPersonagens()}
        >
          Listar Personagens
        </Button>
        {listaPersonagens.length !== 0 && (
          <Paper
            sx={{
              opacity: 0.8,
              width: "40rem",
              height: "25rem",
              background: "#a6cccc",
            }}
          >
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>Nome</TableRow>
                </TableHead>
                <TableBody>
                  {listaPersonagens.length &&
                    listaPersonagens
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1}>
                            <Typography>{item[0].name}</Typography>
                          </TableRow>
                        );
                      })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        )}
      </Box>

      {/* <div>
                <Paper  sx={{ opacity: 0.8, width: '20rem', ml: '20rem' }}>
                    <FormControl>
                        <FormLabel>
                            Nome
                        </FormLabel>
                        <Divider sx={{ ml: "2rem" }} />
                    </FormControl>
                </Paper>
            </div> */}
    </>
  );
}
