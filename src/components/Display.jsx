import style from "./Display.module.css"

const Display = ({display}) => {
    return (
        <input type="text" name="" id={style.display} readOnly value={display}/>
    )
}

export default Display