import React, { useState, useEffect } from 'react';

import NavBar from './components/NavBar';
import CharacterDetails from './components/CharacterDetails';
import RootPage from './components/RootPage';

import { ThemeProvider } from '@mui/material/styles';

import useCharacters from './services/characterService';
import theme from './theme';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { characters, isLoading, isError } = useCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [isSortedAsc, setIsSortedAsc] = useState(false);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    if (characters) {
      setFilteredCharacters(characters);
    }
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

  const handleFavoriteToggle = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id]
    }));
  }

  const favoriteCount = Object.values(favorites).filter(Boolean).length;

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar onSearch={handleSearch} onSort={handleSort} favoriteCount={favoriteCount} />
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route path="/" element={
              <RootPage characters={filteredCharacters} onFavoriteToggle={handleFavoriteToggle} favorites={favorites} />
            } />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App
