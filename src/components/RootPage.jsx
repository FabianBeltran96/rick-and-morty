import CharacterCard from './CharacterCard';
import { Stack, Grid } from '@mui/material';

function RootPage({ characters, onFavoriteToggle, favorites }) {
    return (
        <Grid  >
            <Stack sx={{ padding: 2 }} spacing={{ xs: 1, sm: 2 }} direction="row" justifyContent="center"
                alignItems="center" useFlexGap flexWrap="wrap">
                {characters.map((item) => (
                    <CharacterCard
                        key={item.id}
                        {...item}
                        onFavoriteToggle={onFavoriteToggle}
                        isFavorite={favorites[item.id]} 
                    />
                ))}
            </Stack>
        </Grid>
    )
}

export default RootPage;