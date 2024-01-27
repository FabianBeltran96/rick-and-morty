import axios from 'axios';
import useSWR from 'swr';

const baseURL = 'https://rickandmortyapi.com/api/character/';

const fetcher = url => axios.get(url).then(res => res.data);

const useCharacters = () => {
    const { data, error } = useSWR(baseURL, fetcher);
    return {
        characters: data?.results,
        isLoading: !error && !data,
        isError: error
    };
}

export default useCharacters;