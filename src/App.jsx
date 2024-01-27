import { Card, CardActions, CardContent, CardMedia, Button, Stack, Typography, AppBar, Box, Toolbar, IconButton, Grid } from '@mui/material';
import { Menu } from '@mui/icons-material';

import useSWR from 'swr'
import axios from 'axios'

import './App.css'

function StyledCard({ name, image, species }) {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        component="img"
        height="140"

        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {species}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card >
  );
}

function App() {
  let url = 'https://rickandmortyapi.com/api/character/'
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return (
    <Grid  >
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
              <Menu />
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
      <Stack sx={{ padding: 2 }} spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="center"
        alignItems="center" useFlexGap flexWrap="wrap">
        {
          data.results.map((item, index) => {
            return (
              <StyledCard key={item.id} {...item} />
            )
          })
        }

      </Stack>

    </Grid>
  )
}



export default App
