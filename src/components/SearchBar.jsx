import styles from './SearchBar.module.css'


export function SearchBar(props) {
    return(
        <>
            <input type="text" placeholder='Search' className={`${props.appState == 'logged-in' ? '' : styles.displayToggle}`}/>
        </>
    )
}