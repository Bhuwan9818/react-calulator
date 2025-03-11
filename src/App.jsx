import React, { useState } from 'react'
import style from "./App.module.css"
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

function App() {
  const [display, setdisplay] = useState("")
  const onButtonClick = (item) => {
    if (item === 'C') {
      setdisplay('')
    }
    else if (item === '=') {
      let eva = eval(display)
      setdisplay(eva)
    }
    else {
      let newValue = (display+item)
      setdisplay(newValue)
    }
  }

  
  return (
    <div className={style.calculator}>
      <Display display={display}></Display>
      <ButtonContainer onclick={onButtonClick}></ButtonContainer>
    </div>
  )
}

export default App