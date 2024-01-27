import CharacterCard from './components/CharacterCard';
import NavBar from './components/NavBar';

import './App.css'

import { Stack, Grid } from '@mui/material';
import useCharacters from './services/characterService';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails'; // Importa el componente de detalles

function App() {

  const { characters, isLoading, isError } = useCharacters();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={
          <Grid  >
            <Stack sx={{ padding: 2 }} spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="center"
              alignItems="center" useFlexGap flexWrap="wrap">
              {
                characters.map((item, index) => {
                  return (
                    <CharacterCard key={item.id} {...item} />
                  )
                })
              }
            </Stack>
          </Grid>
        } />
        <Route path="/character/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  )
}

export default App
