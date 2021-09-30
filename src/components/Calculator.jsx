import {useState} from "react";

export const Calculator = () => {

    const [calcInput, setCalcInput] = useState(0)

    const changehandler = (e) => {
        const newInput = Number(e.target.value);
        if (!Number.isNaN(newInput)) {
            setCalcInput(newInput)
        }
    }

    const numberHandler = (props) => {
        const prevState = calcInput;
        const newValue = prevState + String(props)
        setCalcInput(Number(newValue))
    }


    return (
        <div>
            <input type="text" value={calcInput} onChange={changehandler}/>
            <br/>
            <button onClick={() => numberHandler(2)}>2</button>
            <button onClick={() => numberHandler(1)}>1</button>
            {/*<Keyboard/>*/}
        </div>
    )
}