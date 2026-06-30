import styles from './Nav.module.css'
import { Header } from './Header'
import { Button } from './Button'
import { SearchBar } from './SearchBar'
import { Children, useState } from 'react'

export function Nav(props) {
    const parent = 'nav'
    const [clicked, setClicked] = useState(false)
    const [active, setActive] = useState(true)

    function setNavBtns() {
        //change navBtns
        console.log('navBtns')
        console.log(Nav.Children)
        //navBtns.btnArr.find((btnName == _name))
    }


    return (
        <div className={`${styles.mainWrapper} ${props.appState == 'logged-in' ? styles.wrapperVariant : ''}`}>
            <div className={styles.wrapper}>
                <Header />
                <SearchBar home='nav' appState={props.appState}/>
                <div className={`${props.appState == 'logged-in' ? styles.btnWrapper : styles.displayToggle}`}>
                    <Button name='All' home={parent} clicked={true} clickHandler={setNavBtns}/>
                    <Button name='Remote' home={parent} clicked={false} clickHandler={setNavBtns}/>
                    <Button name='On-site' home={parent} clicked={false} clickHandler={setNavBtns}/>
                    <Button name='Contract' home={parent} clicked={false} clickHandler={setNavBtns}/>
                </div>
            </div>

            <div className={`${props.appState == 'home' ? styles.homeLinks : styles.displayToggle}`}>
                <Button name='About' home='home-nav' />
                <Button name='Features' home='home-nav' />
                <Button name='FAQ' home='home-nav' />
                <Button name='Contact' home='home-nav' />
            </div>

            <div className={`${props.appState == 'home' ? styles.profile : styles.displayToggle}`}>
                <Button name='Log in' home='nav-action' theme='light'/>
                <Button name='Join Wait List' home='nav-action' theme='dark'/>
            </div>

            <div className={`${props.appState == 'logged-in' ? styles.userImage : styles.displayToggle}`}>
                <img src={`/profile_1.jpg`} alt="" />
            </div>
            <img className={styles.hamburger} src={`src/assets/icon-hamburger.svg`} />
        </div>
    )
}