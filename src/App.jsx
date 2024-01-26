import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useSWR from 'swr'
import axios from 'axios'
import './App.css'


function App() {
  let url = 'https://rickandmortyapi.com/api/character/'
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (<Stack spacing={2}>

    {data.results.map(
      (item) => <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt={item.name + " image"}
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.origin.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.species}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Favorite</Button>
        </CardActions>
      </Card>
    )}!
  </Stack>)
}

export default App
