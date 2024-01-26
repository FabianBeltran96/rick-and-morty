import { useState } from 'react'
import useSWR from 'swr'
import axios from 'axios'
import './App.css'


function App() {
  let url = 'https://rickandmortyapi.com/api/character/'
  const fetcher = url => axios.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR(url, fetcher)

  if (error) return <div>failed to load</div>

  if (isLoading) return <div>loading...</div>

  return <div> {data.results.map(
    (item) => <li key={item.id}> {item.id} - {item.name} {item.status} {item.species} </li>
  )}!</div>
}

export default App
