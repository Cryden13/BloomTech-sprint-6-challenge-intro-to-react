import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
    // ❗ Create state to hold the data from the API
    const [parsedData, setParsedData] = useState([])
    // ❗ Create effects to fetch the data and put it in state
    useEffect(() => {
        Promise.all([axios.get(urlPeople), axios.get(urlPlanets)])
            .then(([{ data: peopleData }, { data: planetsData }]) => {
                // console.log(peopleData)
                // console.log(planetsData)
                const mapData = peopleData.map(person => {
                    const { name: planetName } = planetsData.find(planet => planet.id === person.homeworld)
                    const { id, name } = person
                    return { id, name, homeworld: planetName }
                })
                setParsedData(mapData)
                // console.log(mapData)
            })
    }, [])

    return (
        <div>
            <h2>Star Wars Characters</h2>
            <p>See the README of the project for instructions on completing this challenge</p>
            {/* ❗ Map over the data in state, rendering a Character at each iteration */
                parsedData.map(({ id, name, homeworld }) => {
                    return <Character key={id} charName={name} homeworld={homeworld} />
                })
            }
        </div>
    )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
