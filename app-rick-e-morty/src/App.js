import { AppBar, Button, Typography } from "@mui/material";
import React from "react";
import { Route, HashRouter, Link, Routes } from "react-router-dom";
import Principal from "./components/Principal/principal";
import Personagem from "./components/personagens/personagens";
import Galeria from "./components/galeria/galeria";

function App() {
  return (
    <div className="App">
      <div>
        <AppBar sx={{ background: '#043c6e' }}>
            <Typography 
              variant='h3' 
              sx={{ ml: '5rem', mb: '1rem', mt: '1rem', color: '#A6EEE6FF', background: '#043c6e',
                    fontFamily: 'Verdana', WebkitTextStrokeColor: '#FAFD7CFF', 
                    WebkitTextStrokeWidth: '0.1rem', fontWeight: 'bold' }}>App Rick e Morty
            </Typography>                     
        </AppBar>  
      </div>

      <HashRouter>
        <Typography sx={{ background: '#a6cccc', height: '9rem', position: 'fixed', width: '100%', top: '0.5rem', zIndex: 1 }}>
          <Button component={Link} to="/" variant="outlined" 
                  sx={{ mt: '6rem', ml: '2rem', borderColor:'#A6EEE6FF', 
                        color:'#A6EEE6FF', background: '#043c6e'}}>
            Principal
          </Button>
          
          <Button component={Link} to="/personagens" variant="outlined" sx={{ mt: '6rem', ml: '2rem', mr: '2rem', borderColor:'#A6EEE6FF', color:'#A6EEE6FF', background: '#043c6e'}}>
            Personagens
          </Button>

          <Button component={Link} to="/galeria" variant="outlined" sx={{ mt: '6rem', mr: '2rem', borderColor:'#A6EEE6FF', color:'#A6EEE6FF', background: '#043c6e'}}>
            Galeria
          </Button>

          {/* <Button component={Link} to="" variant="outlined"></Button>
          <Button component={Link} to="" variant="outlined"></Button> */}
        </Typography>

        <div>
          <Typography sx= {{ mt: '9rem' }}>
            <Routes>
              <Route path="/" exact element={<Principal />}></Route>
              <Route path="/personagens" exact element={<Personagem />}></Route>
              <Route path="/galeria" exact element={<Galeria />}></Route>
              {/* <Route path="" exact element={}></Route> */}
            </Routes>
          </Typography>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
