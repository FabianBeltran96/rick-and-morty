import React, { useState, useEffect } from 'react';

import { Stack, Grid } from '@mui/material';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function CharacterDetails() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleRootClick = () => {
        navigate(`/`);
    };

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const result = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                setCharacter(result.data);
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        fetchCharacter();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading character!</p>;
    return (
        <Stack sx={{ padding: 2 }} spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="center"
            alignItems="center" useFlexGap flexWrap="wrap">
            <Card sx={{ maxWidth: 600, boxShadow: 3, margin: 2, borderRadius: 2, bgcolor: '#f4f4f4' }} onClick={handleRootClick}>
                <CardMedia
                    component="img"
                    height="400"
                    image={character.image}
                    alt={character.name}
                    sx={{ border: '1px solid #ddd', borderRadius: '4px', }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div" color="primary.main">
                        {character.name}
                    </Typography>
                    <Typography variant="body1" color="text.primary" paragraph>
                        Species: {character.species}
                    </Typography>
                    <Typography variant="body1" color="text.primary" paragraph>
                        Status: {character.status}
                    </Typography>
                    <Typography variant="body1" color="text.primary" paragraph>
                        Gender: {character.gender}
                    </Typography>
                    <Typography variant="body1" color="text.primary" paragraph>
                        Origin: {character.origin?.name}
                    </Typography>
                </CardContent>
            </Card>
        </Stack>
    )
}

export default CharacterDetails



