import {Calculator} from "./components/Calculator";
import {Wrapper} from "./styles/Wrapper";
import {GlobalStyle} from "./styles/GlobalStyle";
import {useEffect} from "react";
import {NUMBERS, OPERATION_SYMBOLS} from "./data/symbols";
import {addNumber} from "./redux/slices/inputSlice";
import {useDispatch, useSelector} from "react-redux";

import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";
import {updateInput} from "./utils/updateInput";

function App() {

    const dispatch = useDispatch();
    const inputValue = useSelector((state => state.inputValue.value));
    const result = useSelector((state => state.operationSequence.result))
    const activeOperator = useSelector((state => state.operationSequence.operator));

    const handleKeyDown = (e) => {
        const numberSymbols = NUMBERS.map(({num}) => num);
        const operationSymbols = OPERATION_SYMBOLS.map(({mathAction}) => mathAction);

        if (numberSymbols.includes(e.key)) {
            dispatch(addNumber(e.key))
        } else if (operationSymbols.includes(e.key) || e.key === "Enter") {
            updateInput(inputValue, e.key, activeOperator, dispatch)
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });


    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Wrapper>
                    <Calculator/>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
