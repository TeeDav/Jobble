// import { Header } from './components/Header.jsx'
import { Nav } from './components/Nav.jsx'
import { CardWrapper } from './components/CardWrapper'
import { SearchBar } from './components/SearchBar.jsx'
import './App.css'
import { jobs } from './data/card-data.js'
import { useState } from 'react'


export function App() {
    const [jobList, setJobList] = useState(jobs)

    return (
        <>
            <Nav />
            {/* <SearchBar home='app'/> */}
            <CardWrapper jobs={jobList}/>
        </>
    )
}