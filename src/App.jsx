// import { Header } from './components/Header.jsx'
import { Nav } from './components/Nav.jsx'
import { CardWrapper } from './components/CardWrapper'
import { SearchBar } from './components/SearchBar.jsx'
import { Landingpage } from './components/Landingpage.jsx'
import './App.css'
import { jobs } from './data/card-data.js'
import { useState } from 'react'


export function App() {
    const [jobList, setJobList] = useState(jobs)
    const [appState, setAppState] = useState('logged-in')
    // appState={appState} 'logged-in' 'home'

    function logIn() {
        setAppState('logged-in')
    }

    let showCards;
    let showLanding;

    if (appState == 'logged-in') {
        showCards = <CardWrapper jobs={jobList} appState={appState}/>
        showLanding= ''
    } else {
        showCards = ''
        showLanding = <Landingpage appState={appState} loginAction={logIn}/>
    }

    return (
        <>
            <Nav appState={appState}/>
            {/* <SearchBar home='app' appState={appState}/> */}
            {/* <CardWrapper jobs={jobList} appState={appState}/> */}
            {showCards}
            {showLanding}
        </>
    )
}