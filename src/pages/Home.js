import React from 'react'
import MainWeatherCard from '../components/MainWeatherCard'
import { useAppContext } from '../context'

function Home() {
    const { currentWeather } = useAppContext()

    return (
        <div>
            <MainWeatherCard data={currentWeather} />
        </div>
    )
}

export default Home
