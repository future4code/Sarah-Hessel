import React, { useEffect, useState } from 'react'
import MatchListItem from './MatchListItem'
import axios from 'axios'

export default function ListMatch() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:sarah/matches")
    .then(response =>{
      setMatches(response.data.matches)
    })
  }, [])
    return (
    <div>
      {matches.map((profile) => {
        return <MatchListItem profile={profile} />
      })}
    </div>
  )
}