import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Container from '@mui/material/Container';

import useSWR from 'swr'
import axios from 'axios'

import { useState } from 'react'

import './App.css'

function styledCard(props) {
  return (
    <>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.species}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>

    </>)
}

function App() {
  let url = 'https://rickandmortyapi.com/api/character/'
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <Container sx={{ padding: 0 }} >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                MUI
              </Typography>

            </Toolbar>
          </AppBar>
        </Box>
        <Stack spacing={3}>
          {
            data.results.map((item, index) => {
              return (
                <Card key={index}>
                  {styledCard(item)}
                </Card>
              )
            })
          }

        </Stack>

      </Container>
    </>
  )
}



export default App
