import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CharacterCard({ id, name, image, species }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/character/${id}`);
  };

  return (
    <Card sx={{ width: 300, height: 300 }} onClick={handleCardClick}>
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
        <Button variant="contained" color="secondary" size="small" >Favorite</Button>
      </CardActions>
    </Card >

  );
}

export default CharacterCard;