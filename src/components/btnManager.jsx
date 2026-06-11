import { useState } from "react"

console.log('running')

function btnState(btnName, _state) {
    const [clicked, setClicked] = useState(_state)
    const [buttonName, setbuttonName] = useState(btnName)

    //console.log(`state created for ${this.name}`)
    
    //create details of this instance and push to array
    this.btnDetails = {
        clickState: clicked,
        setBtn: (_clickState) => {
            setClicked(_clickState)
            console.log(_clickState)

        },
        buttonName: buttonName
    }
}

function btn(btnName, _state) {
    //create new state instances
    //click state for each button
    // const [clicked, setClicked] = useState(false)
    let createState = new btnState(btnName, _state)
    //console.log(this.btnArr)
    this.btnArr.push(createState.btnDetails)
}

function btnManager() {
    //console.log('here at btnManager')
    //const [btnArray, setbtnArray] = useState([])
    this.btnArr = []
    this.btn = btn;
}


export const navBtns = new btnManager