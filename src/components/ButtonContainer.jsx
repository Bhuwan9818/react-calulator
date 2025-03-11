import { useState } from "react"
import style from "./ButtonContainer.module.css"

const ButtonContainer = ({onclick}) => {

    const [ColorChange, setColorChange] = useState(false)

    const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '9', '0','.','=']

    return (
        <div id={style.buttonContainer}>
            {buttonNames.map((item,i) => {
                return <button key={i} onClick={()=> onclick(item) `${setColorChange(!ColorChange)}`} className={`${style.button} ${(ColorChange)?`${style.change}`:''}` }>{item}</button>
            })}
        </div>
    )
}

export default ButtonContainer