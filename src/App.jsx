import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import CharacterCard from './components/CharacterCard';
import CharacterDetails from './components/CharacterDetails';

import { Stack, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import useCharacters from './services/characterService';
import './App.css'
import theme from './theme';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function RootPage({ characters }) {
  return (
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
  )
}

function App() {
  const { characters, isLoading, isError } = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isSortedAsc, setIsSortedAsc] = useState(false);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  const handleSearch = (searchTerm) => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  const handleSort = () => {
    const sortedCharacters = [...filteredCharacters].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (isSortedAsc) {
        return nameA < nameB ? -1 : 1;
      } else {
        return nameA > nameB ? -1 : 1;
      }
    });
    setIsSortedAsc(!isSortedAsc);
    setFilteredCharacters(sortedCharacters);
  };

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ThemeProvider theme={theme}>

      <Router>
        <NavBar onSearch={handleSearch} onSort={handleSort} />
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path="/" element={
              <RootPage characters={filteredCharacters} />
            } />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
